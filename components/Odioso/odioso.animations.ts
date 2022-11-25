import gsap from "gsap";

export const odiosoDefault = () =>
  gsap
    .timeline({
      paused: true,
      repeat: -1,
      repeatDelay: 1,
      defaults: { duration: 0.2, transformOrigin: "center center" },
      repeatRefresh: true,
    })
    .add("start")
    .to(
      "#sopracciglio-1",
      {
        drawSVG: "0 60%",
        y: 4,
        rotate: 3,
        x: -2,
      },
      "start"
    )
    .to(
      "#bocca",
      {
        morphSVG: "#bocca2",
      },
      "start"
    )
    .to(
      "#testa",
      {
        y: 10,
      },
      "start+=1"
    )
    .to(
      "#braccio-dex-basso, #braccio-six-basso",
      {
        y: -10,
      },
      "start+=1"
    )
    .to(
      "#guancia-dex, #guancia-six",
      {
        scale: 1.4,
      },
      "start+=2"
    )
    .add("back", "start+=4")
    .to(
      "#testa, #braccio-dex-basso, #braccio-six-basso,#guancia-dex, #guancia-six, #sopracciglio-1",
      {
        y: 0,
        scale: 1,
        rotate: 0,
        x: 0,
        drawSVG: "100%",
      },
      "back"
    )
    .to(
      "#bocca",
      {
        morphSVG: "#bocca2",
      },
      "back"
    );
