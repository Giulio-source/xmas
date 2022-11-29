import gsap from "gsap";
import { useEffect } from "react";
import { Modal } from "../components/Modal/Modal";
import { Villaggio } from "../components/Villaggio/Villaggio";
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
  console.log(BBox);

  gsap.to("#villaggio-elfo", {
    attr: {
      viewBox: `${BBox.x} ${BBox.y - 8} ${BBox.width} ${BBox.height}`,
    },
    duration: 1
  });
}

export default function Mappa() {
  useEffect(() => {
    setTimeout(() => {
      openModal();
    }, 500);
  }, []);

  return (
    <MappaPageWrapper>
      <Villaggio />
      <Modal
        id="dialog-modal"
        onClick={() => {
          closeModal();
          goToStep("q1");
        }}
      />
    </MappaPageWrapper>
  );
}
