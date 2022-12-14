import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { setAppHeight } from "../components/commons/utils";
import { HeadHome } from "../components/Head/HeadHome";
import { HintoIcon } from "../components/Icons/HintoIcon";
import { showLoader } from "../components/Loader/Loader";
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

export function openModal() {
  console.log("Open modal");
  return gsap.to("#dialog-modal", {
    y: "0%",
    duration: 0.5,
    // ease: "elastic.out(0.6, 0.3)"
    ease: "back.out(1.1)",
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
  const isMobile = window && window.matchMedia("(max-width: 1023px)").matches;

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
            viewBox: `${currentBBox.x - 32} ${currentBBox.y - 32} ${
              currentBBox.width + 64
            } ${currentBBox.height + 64}`,
          },
          duration: 0.5,
        },
        "start"
      )
      .to(
        "#villaggio-elfo",
        {
          attr: {
            viewBox: `${BBox.x - 16} ${isMobile ? BBox.y : BBox.y - 8} ${
              BBox.width + 32
            } ${BBox.height + 16}`,
          },
          duration: 1.5,
        },
        "start+=0.5"
      )
      .fromTo(
        `#${fromId}-${toId} polyline`,
        { autoAlpha: 1 },
        { drawSVG: "100%", autoAlpha: 1, duration: 1.5, stagger: 0.3 },
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
            viewBox: `${BBox.x - 16} ${isMobile ? BBox.y : BBox.y - 8} ${
              BBox.width + 32
            } ${BBox.height + 16}`,
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
      viewBox: "0 0 595.28 297.64",
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
        showLoader();
        setTimeout(() => {
          //@ts-ignore
          router.push(`/risultati/${resultsHandler[id]}`);
        }, 800);
      }, 1000);
    }
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);
    gsap.set("#righe polyline", { drawSVG: 0 });

    window.addEventListener("resize", setAppHeight);
    setAppHeight();

    return () => {
      window.removeEventListener("resize", setAppHeight);
    };
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
      }, 1200);
    }
  }, [questionId]);

  return (
    <MappaPageWrapper>
      <HeadHome />
      <HintoIcon />
      <Villaggio />
      <Neve />
      <Modal id="dialog-modal" question={question} onChange={handleOnChange} />
    </MappaPageWrapper>
  );
}
