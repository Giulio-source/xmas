import gsap from "gsap";
import { Colors } from "../commons/Theme";

export const odiosoDefault = () =>
  gsap
    .timeline({
      paused: true,
      repeat: -1,
      repeatDelay: 1,
      defaults: { duration: 0.2 },
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
        transformOrigin: "center center",
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
        morphSVG: "#bocca",
      },
      "back"
    );

export const odiosoSingleClick = () =>
  gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#testa, #braccio-dex-basso, #braccio-six-basso",
      {
        y: 0,
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
      "#guancia-dex, #guancia-six",
      {
        scale: 1.4,
        transformOrigin: "center center",
      },
      "start"
    )
    .to(
      "#braccio-dex-basso .braccio",
      {
        morphSVG: "#braccio-dex-alto",
      },
      "start"
    )
    .to(
      "#braccio-six-basso .braccio",
      {
        morphSVG: "#braccio-six-alto",
      },
      "start"
    )
    .to(
      "#braccio-six-basso .braccio",
      {
        morphSVG: "#braccio-six-alto",
      },
      "start"
    )
    .to(
      "#braccio-six-basso .mano",
      {
        x: 36,
        y: -50,
      },
      "start"
    )
    .to(
      "#braccio-dex-basso .mano",
      {
        x: -23,
        y: -46,
      },
      "start"
    )
    .to(
      "#braccio-six-basso, #braccio-dex-basso",
      {
        y: -10,
      },
      "start+=1"
    )
    .to(
      "#testa",
      {
        y: 10,
      },
      "start+=1"
    )
    .add(shakeHead(2))
    .add(shakeHead(4))
    .add(shakeHead(0))
    .add("middle")
    .to(
      "#testa-shape, #orecchio-six .fuori, #orecchio-dex .fuori",
      {
        fill: Colors.red,
      },
      "start+=2"
    )
    .to(
      "#orecchio-six .dentro, #orecchio-dex .dentro",
      {
        stroke: Colors.darkRed,
      },
      "start+=2"
    )
    .to(
      "#occhio-dex-small, #occhio-six-small",
      {
        transformOrigin: "center center",
        scaleY: 0.1,
      },
      "middle-=0.2"
    )
    .to("#orecchio-dex", { y: -5, duration: 0.1 }, "middle-=0.2")
    .add("explode")
    .add(esplosioneCoriandoli(), "explode+=0.5");

function shakeHead(intensity: number) {
  return gsap
    .timeline({
      repeat: intensity > 0 ? 5 : 0,
      repeatRefresh: true,
      defaults: { duration: 0.1, ease: "linear" },
    })
    .add("start")
    .to(
      "#testa",
      {
        x: intensity,
      },
      "start"
    )
    .to(
      "#testa",
      {
        x: intensity * -1,
      },
      "start+=0.1"
    )
    .to(
      "#orecchio-six",
      { rotate: intensity * 2, transformOrigin: "right bottom" },
      "start"
    )
    .to(
      "#orecchio-six",
      {
        rotate: intensity * -1,
        transformOrigin: "right bottom",
      },
      "start+=0.1"
    )
    .to(
      "#orecchio-dex",
      {
        rotate: intensity > 0 ? intensity * -1 : 10,
        transformOrigin: "left bottom",
      },
      "start"
    )
    .to(
      "#orecchio-dex",
      {
        rotate: intensity > 0 ? intensity * 2 : 10,
        transformOrigin: "left bottom",
      },
      "start+=0.1"
    )
    .timeScale(1.2);
}

function esplosioneCoriandoli() {
  return gsap
    .timeline({ repeat: 2, repeatDelay: 0.1 })
    .add("start")
    .fromTo(
      "#coriandoli path",
      {
        autoAlpha: 1,
        drawSVG: "0 0",
      },
      {
        autoAlpha: 1,
        drawSVG: "0 100%",
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#coriandoli path",
      {
        autoAlpha: 1,
        drawSVG: "100% 100%",
        duration: 0.2,
      },
      "start+=0.2"
    );
}

export const resetElfo = () =>
  gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#braccio-dex-basso .braccio",
      {
        morphSVG: "#braccio-dex-basso .braccio",
      },
      "start"
    )
    .to(
      "#braccio-six-basso .braccio",
      {
        morphSVG: "#braccio-six-basso .braccio",
      },
      "start"
    )
    .to(
      "#bocca",
      {
        morphSVG: "#bocca",
      },
      "start"
    )
    .to(
      `#braccio-six-basso,
      #braccio-six-basso .mano,
      #braccio-dex-basso,
      #braccio-dex-basso .mano,
      #orecchio-dex,
      #orecchio-six,
      #testa,
      #occhio-dex-small,
      #occhio-six-small,
      #sopracciglio-1,
      #guancia-dex, #guancia-six`,
      {
        x: 0,
        y: 0,
        rotate: 0,
        scaleY: 1,
        drawSVG: "100%",
        scale: 1,
      },
      "start"
    )
    .to(
      "#testa-shape, #orecchio-six .fuori, #orecchio-dex .fuori",
      {
        fill: Colors.pink,
      },
      "start"
    )
    .to(
      "#orecchio-six .dentro, #orecchio-dex .dentro",
      {
        stroke: Colors.darkPink,
      },
      "start"
    );
