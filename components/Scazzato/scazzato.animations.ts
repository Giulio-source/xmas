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
