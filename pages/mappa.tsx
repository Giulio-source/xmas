import gsap from "gsap";
import { useEffect, useState } from "react";
import { Modal } from "../components/Modal/Modal";
import { Villaggio } from "../components/Villaggio/Villaggio";
import { MappaPageWrapper } from "../page-styles/mappa-page.style";
import {
  QuestionType,
  villaggioData,
  QuestionIds,
} from "../components/Villaggio/villaggioData";

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
  console.log(BBox);

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
  const [question, setQuestion] = useState<QuestionType>();

  useEffect(() => {
    console.log(
      "%c HERE",
      "background: dodgerblue; color: white; padding: 6px 8px 4px 2px; border-radius: 999px",
      question
    );
    if (!question) {
      setTimeout(() => {
        openModal();
      }, 500);
    }

    closeModal();
    goToStep(question?.name || "");
    setTimeout(() => openModal(), 1000);
  }, [question]);

  return (
    <MappaPageWrapper>
      <Villaggio />
      <Modal
        id="dialog-modal"
        question={question}
        onChange={(questionId: QuestionIds) => {
          //@ts-ignore
          villaggioData[questionId] && setQuestion(villaggioData[questionId]);
        }}
      />
    </MappaPageWrapper>
  );
}
