import gsap from "gsap";
import { useEffect, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { Neve } from "../components/Neve/Neve";
import { Villaggio } from "../components/Villaggio/Villaggio";
import {
  QuestionIds,
  QuestionType,
  villaggioData,
} from "../components/Villaggio/villaggioData";
import { MappaPageWrapper } from "../page-styles/mappa-page.style";

export function openModal() {
  console.log("Open modal");
  return gsap.to("#dialog-modal", {
    y: "0%",
    duration: 0.3,
  });
}

export function closeModal() {
  console.log("Close modal");
  return gsap.to("#dialog-modal", {
    y: "100%",
    duration: 0.3,
  });
}

function goToStep(id: string) {
  const el = document.getElementById(id) as SVGGraphicsElement | null;

  if (!el) return;

  const BBox = el.getBBox();

  gsap.to("#villaggio-elfo", {
    attr: {
      viewBox: `${BBox.x - 8} ${BBox.y - 16} ${BBox.width + 16} ${
        BBox.height + 16
      }`,
    },
    duration: 1,
  });
}

export default function Mappa() {
  const [questionId, setQuestionId] = useState<QuestionIds>();
  const [question, setQuestion] = useState<QuestionType>();

  useEffect(() => {
    if (!questionId) {
      setTimeout(() => {
        openModal();
      }, 500);
    } else {
      closeModal();
      goToStep(questionId);
      setTimeout(() => {
        //@ts-ignore
        setQuestion(villaggioData[questionId]);
        openModal();
      }, 1000);
    }
  }, [questionId]);

  return (
    <MappaPageWrapper>
      <Villaggio />
      <Neve />
      <Modal
        id="dialog-modal"
        question={question}
        onChange={(questionId: QuestionIds) => {
          //@ts-ignore
          villaggioData[questionId] && setQuestionId(questionId);
        }}
      />
    </MappaPageWrapper>
  );
}
