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
    .add(tremaGuancia())

function tremaGuancia() {
  return gsap
    .timeline({ repeat: 1 })
    .add("start")
    .to("#guancia-six", { y: -8, duration: 0.4 })
    .to("#guancia-six", { y: 0, duration: 0.4 })
    .timeScale(1.2)
}
