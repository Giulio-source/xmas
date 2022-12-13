import gsap from "gsap";

export const esaltatoDefault = () =>
  gsap
    .timeline({ repeat: -1, repeatDelay: 0.5, paused: true })
    .add("start")
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2, #esaltato #faccia",
      {
        y: -5,
      },
      "start"
    )
    .to(
      "#esaltato #orecchio_six, #esaltato #orecchio_dex",
      {
        y: 5,
      },
      "start"
    )
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2, #esaltato #faccia",
      {
        y: 0,
      },
      "start+=2"
    )
    .to(
      "#esaltato #orecchio_six, #esaltato #orecchio_dex",
      {
        y: 0,
      },
      "start+=2"
    )
    .to(
      "#esaltato #bocca",
      { morphSVG: "#esaltato #bocca-wide", duration: 0.5 },
      "start+=3"
    )
    .to(
      "#esaltato #sopracciglio_1, #esaltato #sopracciglio_2",
      { y: -5, duration: 0.5 },
      "start+=3"
    )
    .to(
      "#esaltato #guanciotte",
      { y: -7, duration: 0.5, ease: "power1.out" },
      "start+=3"
    )
    .to(
      "#esaltato #sopracciglio_1, #esaltato #sopracciglio_2",
      { y: 0, duration: 0.5 },
      "start+=5"
    )
    .to(
      "#esaltato #bocca",
      { morphSVG: "#esaltato #bocca", duration: 0.5 },
      "start+=5"
    )
    .to("#esaltato #guanciotte", { y: 0, duration: 0.5 }, "start+=5")
    .timeScale(1.2);

const esaltatoTremblingMouth = () => {
  return gsap
    .timeline({ repeat: 10, yoyo: true })
    .to("#esaltato #bocca", {
      y: 1,
      duration: 0.1,
    })
    .timeScale(1.8);
};

export const esaltatoResetFace = () =>
  gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#esaltato #occhio_3, #esaltato #occhio_4",
      {
        autoAlpha: 0,
        duration: 0.1,
      },
      "start"
    )
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2",
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.1,
      },
      "start"
    )
    .to(
      "#esaltato #bocca",
      { morphSVG: "#esaltato #bocca", duration: 0.5 },
      "start"
    )
    .to(
      "#esaltato #orecchio_dex, #esaltato #orecchio_six, #esaltato #guanciotte, #esaltato #faccia, #esaltato #faccia_forma, #esaltato #cappello",
      { rotate: 0, x: 0, y: 0, duration: 0.5 },
      "start"
    );

export const esaltatoStelle = () => {
  gsap
    .timeline()
    .fromTo(
      "#esaltato #coriandoli .stella",
      { scale: 0, autoAlpha: 1, y: 0 },
      { scale: 1, autoAlpha: 1, stagger: 0.1, transformOrigin: "center center" }
    )
    .to(
      "#esaltato #coriandoli .stella",
      { y: -10, autoAlpha: 0, stagger: 0.1 },
      "-=0.2"
    );
};

export const esaltatoSingleClick = () =>
  gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#esaltato #sopracciglio_1, #esaltato #sopracciglio_2",
      { y: 0, duration: 0.5 },
      "start"
    )
    .to(
      "#esaltato #bocca",
      { morphSVG: "#esaltato #bocca", duration: 0.5 },
      "start"
    )
    .to(
      "#esaltato #guanciotte",
      { y: -1, duration: 0.5, ease: "power1.out" },
      "start"
    )
    .to(
      "#esaltato #bocca",
      { morphSVG: "#esaltato #bocca_small", duration: 0.5 },
      "start+=1"
    )
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2, #esaltato #faccia",
      {
        x: 6,
        y: -2,
      },
      "start+=2"
    )
    .to(
      "#esaltato #bocca",
      {
        x: -5,
        y: -2,
      },
      "start+=2"
    )
    .to(
      "#esaltato #orecchio_six",
      {
        rotate: -10,
        transformOrigin: "left bottom",
      },
      "start+=2"
    )
    .to(
      "#esaltato #faccia",
      {
        x: 0,
        y: 0,
      },
      "start+=4"
    )
    .to(
      "#esaltato #orecchio_six",
      {
        rotate: 0,
        transformOrigin: "left bottom",
      },
      "start+=4"
    )
    .to(
      "#esaltato #orecchio_dex",
      {
        rotate: 12,
        transformOrigin: "right bottom",
      },
      "start+=4"
    )
    .to(
      "#esaltato #bocca",
      {
        x: 0,
        y: -2,
      },
      "start+=4"
    )
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2",
      {
        x: -6,
      },
      "start+=5"
    )
    .to(
      "#esaltato #bocca",
      {
        x: 6,
      },
      "start+=6"
    )
    .to(
      "#esaltato #bocca",
      {
        x: 0,
        y: 2,
      },
      "start+=8"
    )
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2",
      {
        autoAlpha: 0,
        duration: 0.1,
      },
      "start+=8"
    )
    .to(
      "#esaltato #occhio_3, #esaltato #occhio_4",
      {
        autoAlpha: 1,
        duration: 0.1,
      },
      "start+=8"
    )
    .add(esaltatoTremblingMouth())
    .to(
      "#esaltato #bocca",
      { morphSVG: "#esaltato #bocca-wide", duration: 0.5 },
      "start+=10"
    )
    .timeScale(1.5);

function esaltatoOrecchie() {
  return gsap
    .timeline({ repeat: 2, yoyo: true })
    .add("start")
    .to(
      "#esaltato #orecchio_dex",
      {
        rotate: -30,
        transformOrigin: "right bottom",
        duration: 0.2,
        ease: "linear",
      },
      "start"
    )
    .to(
      "#esaltato #orecchio_six",
      {
        rotate: 30,
        transformOrigin: "left bottom",
        duration: 0.2,
        ease: "linear",
      },
      "start"
    )
    .to(
      "#esaltato #orecchio_dex",
      {
        rotate: 0,
        transformOrigin: "right bottom",
        ease: "linear",
        duration: 0.2,
      },
      "start+=0.2"
    )
    .to(
      "#esaltato #orecchio_six",
      {
        rotate: 0,
        transformOrigin: "left bottom",
        duration: 0.2,
        ease: "linear",
      },
      "start+=0.2"
    )
    .timeScale(1.8);
}

export const esaltatoDoubleClick = () =>
  gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2",
      {
        x: 0,
      },
      "start"
    )
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2",
      {
        autoAlpha: 1,
        duration: 0.1,
      },
      "start"
    )
    .to(
      "#esaltato #occhio_3, #esaltato #occhio_4",
      {
        autoAlpha: 0,
        duration: 0.1,
      },
      "start"
    )
    .to(
      "#esaltato #bocca",
      { morphSVG: "#esaltato #bocca", duration: 0.5 },
      "start"
    )
    .to(
      "#esaltato #guanciotte",
      { y: -12, duration: 0.5, ease: "power1.out" },
      "start"
    )
    .to(
      "#esaltato #pupilla, #esaltato #pupilla-2",
      {
        y: -5,
      },
      "start"
    )
    .to(
      "#esaltato #cappello, #esaltato #faccia, #esaltato #orecchio_dex, #esaltato #orecchio_six, #esaltato #faccia_forma, #esaltato #coriandoli",
      {
        y: 15,
      },
      "start"
    )
    .add(esaltatoOrecchie())
    .add("middle")
    .fromTo(
      "#esaltato #coriandoli .linea",
      {
        autoAlpha: 1,
        drawSVG: "0 0",
      },
      {
        autoAlpha: 1,
        drawSVG: "0 100%",
        duration: 0.5,
      },
      "middle+=0.5"
    )
    .to(
      "#esaltato #coriandoli .linea",
      {
        autoAlpha: 1,
        drawSVG: "100% 100%",
        duration: 1,
      },
      "-=0.25"
    )
    .add(esaltatoStelle, "middle+=0.5");
