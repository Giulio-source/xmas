import gsap from "gsap";

export const ansiosoDefault = () =>
  gsap
    .timeline({
      repeat: -1,
      paused: true,
      repeatDelay: 1,
      repeatRefresh: true,
      defaults: { duration: 0.2 },
    })
    .add("start")
    .to("#occhio-dex, #occhio-six", { x: -5 }, "start")
    .to("#occhio-dex, #occhio-six", { x: 5 }, "start+=1")
    .to("#occhio-dex, #occhio-six", { x: 0 }, "start+=2")
    .add(tremaGuancia());

function tremaGuancia() {
  return gsap
    .timeline({ repeat: 1 })
    .add("start")
    .to("#guancia-six", { y: -8, duration: 0.4 })
    .to("#guancia-six", { y: 0, duration: 0.4 })
    .timeScale(1.3);
}

function tremaCorpo() {
  return gsap
    .timeline({ repeat: 3, defaults: { duration: 0.1, ease: "linear" } })
    .add("start")
    .to("#elfo-intero", { x: -2, y: -2 })
    .to("#elfo-intero", { x: 2, y: -2 })
    .to("#elfo-intero", { x: -2, y: 2 })
    .to("#elfo-intero", { x: 2, y: 2 })
    .to("#elfo-intero", { x: 0, y: 0 })
    .timeScale(1.4);
}

export const ansiosoSingleClick = () =>
  gsap
    .timeline({
      paused: true,
      repeatRefresh: true,
      defaults: { duration: 0.2 },
    })
    .add("start")
    .to(
      "#sopracciglio-dex-1",
      {
        morphSVG: "#sopracciglio-dex-2",
      },
      "start"
    )
    .to(
      "#sopracciglio-six-1",
      {
        morphSVG: "#sopracciglio-six-2",
      },
      "start"
    )
    .to(
      "#bianco-dex, #bianco-six",
      {
        scale: 1.2,
        transformOrigin: "center center",
      },
      "start"
    )
    .add(tremaCorpo(), "start+=1");

export const resetAnsioso = () =>
  gsap
    .timeline({ paused: true })
    .add("reset")
    .to(
      "#occhio-dex, #occhio-six, #guancia-six, #bianco-dex, #bianco-six, #elfo-intero",
      { x: 0, y: 0, scale: 1 },
      "reset"
    )
    .to(
      "#sopracciglio-dex-1",
      {
        morphSVG: "#sopracciglio-dex-1",
      },
      "reset"
    )
    .to(
      "#sopracciglio-six-1",
      {
        morphSVG: "#sopracciglio-six-1",
      },
      "reset"
    );
