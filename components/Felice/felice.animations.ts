import gsap from "gsap";

export const feliceDefault = () =>
  gsap
    .timeline({ repeat: -1, yoyo: true })
    .add(feliceAlzaBraccia())
    .add(feliceSaltella());

function feliceAlzaBraccia() {
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
        attr: {
          d: "M235.9,452.9c-2-0.7-43.5-15.6-51.5-56c-4.7-23.9,4.9-43.2,8.3-49.3",
        },
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
        attr: {
          d: "M127.1,363.5c0,0,32.2,47.5-38.7,90.4",
        },
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
    return gsap.timeline().delay(1).from('#palla1, #palla2', {
        y: '-100%',
        stagger: 0.2,
        ease: "bounce.out",
        duration: 1
    })
}
