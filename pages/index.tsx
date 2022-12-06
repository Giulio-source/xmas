import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef, useState } from "react";
import { HintoIcon } from "../components/Icons/HintoIcon";
import { Modal } from "../components/Modals/MappaModal/Modal";
import { Neve } from "../components/Neve/Neve";
import { Villaggio } from "../components/Villaggio/Villaggio";
import {
  QuestionIds,
  QuestionType,
  resultsHandler,
  ResultsIds,
  villaggioData,
} from "../components/Villaggio/villaggioData";
import { MappaPageWrapper } from "../page-styles/index-page.style";
import { useRouter } from "next/router";

export function openModal() {
  console.log("Open modal");
  return gsap.to("#dialog-modal", {
    y: "0%",
    duration: 0.8,
  });
}

export function closeModal() {
  console.log("Close modal");
  return gsap.to("#dialog-modal", {
    y: "100vh",
    duration: 0.8,
  });
}

function goToStep(fromId: string | undefined, toId: string) {
  const svg: any = document.getElementById("villaggio-elfo");
  const el = document.getElementById(toId) as SVGGraphicsElement | null;

  if (!el) return;

  const BBox = el.getBBox();
  const currentBBox = svg?.viewBox.baseVal;

  if (fromId) {
    gsap
      .timeline()
      .add("start")
      .to(
        "#villaggio-elfo",
        {
          attr: {
            viewBox: `${currentBBox.x - 64} ${currentBBox.y - 64} ${
              currentBBox.width + 128
            } ${currentBBox.height + 128}`,
          },
          duration: 0.5,
        },
        "start"
      )
      .to(
        "#villaggio-elfo",
        {
          attr: {
            viewBox: `${BBox.x - 16} ${BBox.y - 8} ${BBox.width + 32} ${
              BBox.height + 16
            }`,
          },
          duration: 1.5,
        },
        "start+=0.5"
      )
      .fromTo(
        `#${fromId}-${toId}`,
        { stroke: "white" },
        { drawSVG: "100%", autoAlpha: 1, duration: 1.5 },
        "start+=0.5"
      );
  } else {
    gsap
      .timeline()
      .add("start")
      .to(
        "#villaggio-elfo",
        {
          attr: {
            viewBox: `${BBox.x - 16} ${BBox.y - 8} ${BBox.width + 32} ${
              BBox.height + 16
            }`,
          },
          duration: 1,
        },
        "start"
      );
  }
}

function showEntireMap() {
  gsap.to("#villaggio-elfo", {
    attr: {
      viewBox: "0 0 1683.8 841.9",
    },
    duration: 1,
  });
}

export default function Mappa() {
  const [questionId, setQuestionId] = useState<QuestionIds>();
  const [question, setQuestion] = useState<QuestionType>();

  const prevQuestion = useRef<string>();
  const router = useRouter();

  function handleOnChange(id: QuestionIds | ResultsIds) {
    if (id.includes("q")) {
      //@ts-ignore
      setQuestionId(id);
    } else {
      closeModal();
      showEntireMap();
      setTimeout(() => {
        //@ts-ignore
        router.push(`/risultati/${resultsHandler[id]}`);
      }, 1500);
    }
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);
    gsap.set("#righe polyline", { drawSVG: 0 });
  }, []);

  useEffect(() => {
    if (!questionId) {
      setTimeout(() => {
        openModal();
      }, 500);
    } else {
      closeModal();
      goToStep(prevQuestion.current, questionId);
      setTimeout(() => {
        //@ts-ignore
        setQuestion(villaggioData[questionId]);
        prevQuestion.current = questionId;
        openModal();
      }, 1500);
    }
  }, [questionId]);

  return (
    <MappaPageWrapper>
      <HintoIcon />
      <Villaggio />
      <Neve />
      <Modal id="dialog-modal" question={question} onChange={handleOnChange} />
    </MappaPageWrapper>
  );
}
