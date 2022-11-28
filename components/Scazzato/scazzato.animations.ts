import gsap from "gsap";

export const scazzatoDefault = () =>
  gsap
    .timeline({
      repeat: -1,
      repeatDelay: 1,
      paused: true,
      repeatRefresh: true,
      defaults: { duration: 0.2 },
    })
    .add("start")
    .to(
      "#occhio-dex, #occhio-six",
      {
        x: -5,
      },
      "start"
    )
    .to(
      "#sopracciglia-dex",
      {
        y: 3,
      },
      "start"
    )
    .to(
      "#sopracciglia-six",
      {
        y: -3,
      },
      "start"
    )
    .to(
      "#occhio-dex, #occhio-six",
      {
        x: 5,
      },
      "start+=1"
    )
    .to(
      "#sopracciglia-dex",
      {
        y: -3,
      },
      "start+=1"
    )
    .to(
      "#sopracciglia-six",
      {
        y: 3,
      },
      "start+=1"
    )
    .to(
      "#occhio-dex, #occhio-six, #sopracciglia-dex, #sopracciglia-six",
      {
        x: 0,
        y: 0,
        duration: 0.6,
      },
      "start+=2"
    )
    .to(
      "#occhio-dex, #occhio-six",
      {
        y: -3,
      },
      "start+=3"
    )
    .to(
      "#occhio-dex, #occhio-six",
      {
        y: 0,
      },
      "start+=4"
    );

export const resetScazzato = () =>
  gsap
    .timeline({ paused: true, defaults: { duration: 0.2 } })
    .add("start")
    .to(
      "#occhio-dex, #occhio-six, #sopracciglia-dex, #sopracciglia-six, #mano-dex, #mano-six, #faccia, #bocca, #orecchio-dex, #orecchio-six",
      {
        x: 0,
        y: 0,
        rotate: 0,
      },
      "start"
    )
    .to("#braccio-dex .braccio", { morphSVG: "#braccio-dex .braccio" }, "start")
    .to(
      "#braccio-six .braccio",
      { morphSVG: "#braccio-six .braccio" },
      "start"
    )
    .to(
      "#palla1, #palla2, #palla3",
      { y: '-100%', stagger: 0.2 },
      "start"
    )

export const scazzatoSingleClick = () =>
  gsap
    .timeline({ paused: true, defaults: { duration: 0.3 } })
    .add("start")
    .to(
      "#braccio-dex .braccio",
      { morphSVG: "#braccio-dex-basso .braccio" },
      "start"
    )
    .to(
      "#braccio-six .braccio",
      { morphSVG: "#braccio-six-basso .braccio" },
      "start"
    )
    .to(
      "#mano-dex",
      {
        x: 42,
        y: 66,
        rotate: 110,
        transformOrigin: "center center",
      },
      "start"
    )
    .to(
      "#mano-six",
      {
        x: -37,
        y: 68,
        rotate: -100,
        transformOrigin: "center center",
      },
      "start"
    )
    .to(
      "#palla1, #palla2, #palla3",
      { y: 0, duration: 0.5, stagger: 0.2 },
      "start+=0.5"
    )
    .add("middle", "start+=1.2")
    .to("#faccia", { y: -7, duration: 0.5 }, "middle")
    .to("#orecchio-dex, #orecchio-six", { y: 4, duration: 0.5 }, "middle")
    .to("#occhio-dex, #occhio-six", { y: -1, duration: 0.5 }, "middle")
    .to(
      "#faccia, #occhio-dex, #occhio-six, #orecchio-dex, #orecchio-six",
      { y: 0, duration: 0.5 },
      "middle+=1"
    )
    .to(
      "#sopracciglia-dex",
      {
        y: 3,
      },
      "middle+=2"
    )
    .to(
      "#sopracciglia-six",
      {
        y: -3,
      },
      "middle+=2"
    )
    .to(
      "#bocca",
      {
        x: -2,
        y: -2,
        rotate: 15,
        duration: 0.1,
        transformOrigin: "center center",
      },
      "middle+=2.5"
    )
    .to(
      "#bocca",
      {
        x: 0,
        y: 0,
        rotate: 0,
      },
      "middle+=2.6"
    );
