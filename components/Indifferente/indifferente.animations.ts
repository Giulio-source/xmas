import gsap from "gsap";

export const initialStyles = () => {
  gsap.set("#braccio_six .spalla", { drawSVG: "0 93%" });
};

export const indifferenteDefault = () =>
  gsap
    .timeline({ repeat: -1, repeatRefresh: true })
    .add("start")
    .to(
      "#sopracciglio_dex, #sopracciglio_six, #occhio_six, #occhio_dex",
      {
        y: 0,
        x: 0,
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#bocca",
      {
        morphSVG: "#bocca",
        duration: 0.2,
      },
      "start"
    )
    .fromTo(
      "#braccio_dex",
      {
        transformOrigin: "right bottom",
        skewX: 0,
      },
      {
        transformOrigin: "right bottom",
        skewX: -10,
      },
      "start"
    )
    .fromTo(
      "#palla1",
      {
        transformOrigin: "center top",
        rotate: 0,
      },
      {
        transformOrigin: "center top",
        rotate: -3,
      },
      "start"
    )
    .to(
      "#braccio_dex",
      {
        transformOrigin: "right bottom",
        skewX: 0,
        duration: 0.2,
      },
      "start+=1"
    )
    .to(
      "#palla1",
      {
        transformOrigin: "center top",
        rotate: 0,
        ease: "elastic.out(2, 0.2)",
        duration: 3,
      },
      "start+=1"
    )
    .add("face", "start+=1.5")
    .to(
      "#occhio_six, #occhio_dex",
      {
        x: 8,
        duration: 0.2,
      },
      "face"
    )
    .to(
      "#sopracciglio_dex",
      {
        y: -10,
        x: -1,
        duration: 0.2,
      },
      "face"
    )
    .to(
      "#sopracciglio_six",
      {
        y: 8,
        x: -1,
        duration: 0.2,
      },
      "face"
    )
    .to(
      "#bocca",
      {
        morphSVG: "#bocca-smile",
        duration: 0.2,
      },
      "face"
    );

export const indifferenteSingleClick = () =>
  gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#braccio_dex",
      {
        transformOrigin: "right bottom",
        skewX: 0,
      },
      "start"
    )
    .to(
      "#sopracciglio_dex",
      {
        y: 0,
        x: 0,
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#occhio_six, #occhio_dex",
      {
        x: 4,
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#sopracciglio_six",
      {
        y: 5,
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#bocca",
      {
        morphSVG: "#bocca-neutra",
        duration: 0.2,
      },
      "start"
    )
    .to("#braccio_six .spalla", { drawSVG: "0 100%", duration: 0.3 }, "start")
    .to(
      "#palla1",
      {
        transformOrigin: "center top",
        rotate: 0,
        ease: "elastic.out(2, 0.2)",
        duration: 3,
      },
      "start"
    )
    .to(
      "#braccio_six",
      { rotate: -3, transformOrigin: "center center", x: 5, duration: 0.3 },
      "start"
    )
    .to("#braccio_six .spalla", { drawSVG: "0 93%" }, "start+=0.3")
    .to("#braccio_six", { rotate: 0, x: 0 }, "start+=0.3");
