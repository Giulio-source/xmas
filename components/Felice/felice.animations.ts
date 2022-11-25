import gsap from "gsap";

export const feliceDefault = () => {
  return gsap
    .timeline({ repeat: -1, yoyo: true, paused: true })
    .add(feliceAlzaBraccia())
    .add(feliceSaltella());
};

export function resetElfo() {
  return gsap
    .timeline({ paused: true })
    .add("start")
    .to(
      "#faccia-e-cappello",
      {
        scale: 1,
      },
      "start"
    )
    .to("#gruppo", { y: 0, duration: 0.2 })
    .to(
      "#braccio-dex-basso, #braccio-six-basso, #braccio-six-basso .mano, #braccio-dex-basso .mano",
      {
        skewX: 0,
        rotate: 0,
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#felice #braccio-dex-basso .braccio",
      {
        morphSVG: "#felice #braccio-dex-basso .ref",
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#felice #braccio-six-basso .braccio",
      {
        morphSVG: "#felice #braccio-six-basso .ref",
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#occhio-dex, #occhio-six",
      {
        autoAlpha: 1,
      },
      "start"
    )
    .to(
      ".bianco-occhio",
      {
        scale: 1,
        transformOrigin: "center center",
      },
      "start"
    )
    .to(
      "#occhio-dex-2, #occhio-six-2",
      {
        drawSVG: "50% 50%",
        autoAlpha: 0,
      },
      "start"
    )
    .to(
      "#bocca",
      { morphSVG: { shape: "#bocca", shapeIndex: 5 }, rotateY: 0, x: 0 },
      "start"
    )
    .to("#sopracciglia", { y: 0 }, "start")
    .to(
      "#sopracciglia .dex",
      {
        morphSVG: "#sopracciglia .dex",
      },
      "start"
    )
    .to(
      "#sopracciglia .six",
      {
        morphSVG: "#sopracciglia .six",
      },
      "start"
    );
}

export function feliceAlzaBraccia() {
  return gsap
    .timeline()
    .add("start")
    .to(
      "#felice #braccio-six-basso",
      {
        rotate: -100,
        transformOrigin: "left top",
      },
      "start"
    )
    .to(
      "#felice #braccio-six-basso .braccio",
      {
        morphSVG: "#felice #braccio-six-basso .braccio-concavo",
      },
      "start"
    )
    .to(
      "#felice #braccio-six-basso .mano",
      {
        rotate: -60,
        transformOrigin: "center top",
      },
      "start"
    )
    .to(
      "#felice #braccio-dex-basso",
      {
        rotate: 100,
        transformOrigin: "right top",
      },
      "start"
    )
    .to(
      "#felice #braccio-dex-basso .braccio",
      {
        morphSVG: "#felice #braccio-dex-basso .braccio-concavo",
      },
      "start"
    )
    .to(
      "#felice #braccio-dex-basso .mano",
      {
        rotate: 60,
        transformOrigin: "center top",
      },
      "start"
    )
    .timeScale(1.5);
}

function feliceSaltella() {
  return gsap
    .timeline({ repeat: 4, yoyo: true })
    .add("start")
    .to("#gruppo", { y: 3, duration: 0.2 })
    .to(
      "#felice #braccio-dex-basso",
      {
        skewX: -5,
        transformOrigin: "right top",
        duration: 0.2,
      },
      "start"
    )
    .to(
      "#felice #braccio-six-basso",
      {
        skewX: 5,
        transformOrigin: "left top",
        duration: 0.2,
      },
      "start"
    )
    .timeScale(1.2);
}

export function pallineDiNatale() {
  return gsap.timeline().delay(1).from("#palla1, #palla2", {
    y: "-100%",
    stagger: 0.2,
    ease: "bounce.out",
    duration: 1,
  });
}

function alzaSopracciglia() {
  return gsap
    .timeline({ repeat: 3, yoyo: true })
    .to("#sopracciglia", { y: -3, duration: 0.1 });
}

function sbaciucchia() {
  return gsap
    .timeline({ repeat: 5, yoyo: true })
    .to("#bocca", {
      rotateY: 45,
      x: -3,
      transformOrigin: "center center",
      duration: 0.2,
    })
    .timeScale(1.3);
}

export const feliceSingleClick = () => {
  return gsap
    .timeline({ paused: true })
    .add("reset")
    .to("#gruppo", { y: 0, duration: 0.2 })
    .to(
      "#braccio-dex-basso, #braccio-six-basso, #braccio-six-basso .mano, #braccio-dex-basso .mano",
      {
        skewX: 0,
        rotate: 0,
        duration: 0.2,
      },
      "reset"
    )
    .to(
      "#felice #braccio-dex-basso .braccio",
      {
        morphSVG: "#felice #braccio-dex-basso .ref",
        duration: 0.2,
      },
      "reset"
    )
    .to(
      "#felice #braccio-six-basso .braccio",
      {
        morphSVG: "#felice #braccio-six-basso .ref",
        duration: 0.2,
      },
      "reset"
    )
    .to(
      "#occhio-dex, #occhio-six",
      {
        autoAlpha: 1,
      },
      "reset"
    )
    .to(
      ".bianco-occhio",
      {
        scale: 1,
        transformOrigin: "center center",
      },
      "reset"
    )
    .to(
      "#occhio-dex-2, #occhio-six-2",
      {
        drawSVG: "50% 50%",
        autoAlpha: 0,
      },
      "reset"
    )
    .add("start")
    .fromTo("#vischio", { y: "-100%", autoAlpha: 1 }, { y: "0" }, "start")
    .to("#bocca", { morphSVG: "#bocca_small" }, "start+=0.8")
    .to(
      "#occhio-six, #occhio-dex, #sopracciglia",
      {
        y: -5,
      },
      "start+=0.8"
    )
    .to("#bocca", { morphSVG: "#bocca" }, "start+=2.2")
    .to(
      "#occhio-six, #occhio-dex, #sopracciglia",
      {
        y: 0,
      },
      "start+=2.2"
    )
    .to(
      "#sopracciglia .dex",
      {
        morphSVG: "#sopracciglia-2 .dex",
      },
      "start+=2.2"
    )
    .to(
      "#sopracciglia .six",
      {
        morphSVG: "#sopracciglia-2 .six",
      },
      "start+=2.2"
    )
    .add(alzaSopracciglia())
    .add("middle", "start+=4")
    .to(
      "#bocca",
      {
        morphSVG: { shape: "#bocca_2", shapeIndex: 5 },
      },
      "middle"
    )
    .to(
      ".bianco-occhio",
      {
        scale: 0,
        transformOrigin: "center center",
      },
      "middle"
    )
    .to(
      "#occhio-dex, #occhio-six",
      {
        autoAlpha: 0,
      },
      "middle"
    )
    .to(
      "#occhio-dex-2, #occhio-six-2",
      {
        drawSVG: "0% 100%",
        autoAlpha: 1,
      },
      "middle"
    )
    .to(
      "#faccia-e-cappello",
      {
        scale: 1.05,
        transformOrigin: "center center",
      },
      "middle"
    )
    .add(sbaciucchia());
};
