import gsap from "gsap";

export function animateCharacters() {
  gsap.timeline({ repeat: -1, yoyo: true }).to(".wave-arm", {
    transformOrigin: "bottom right",
    rotate: 10,
    duration: 0.3,
  });

  gsap.timeline({ repeat: -1, yoyo: true }).to(
    ".float",
    {
      y: "random(1, -1)",
      duration: 0.3,
    },
    "start"
  );

  gsap
    .timeline({ repeat: -1, repeatDelay: 1.5 })
    .to(".kiss", {
      rotateY: 45,
      x: -0.3,
      transformOrigin: "center center",
      duration: 0.2,
    })
    .to(".kiss", {
      rotateY: 0,
      x: 0,
      transformOrigin: "center center",
      duration: 0.2,
    })
    .to(".kiss", {
      rotateY: 45,
      x: -0.3,
      transformOrigin: "center center",
      duration: 0.2,
    })
    .to(".kiss", {
      rotateY: 0,
      x: 0,
      transformOrigin: "center center",
      duration: 0.2,
    })
    .to(".kiss", {
      rotateY: 45,
      x: -0.3,
      transformOrigin: "center center",
      duration: 0.2,
    })
    .to(".kiss", {
      rotateY: 0,
      x: 0,
      transformOrigin: "center center",
      duration: 0.2,
    })
    .timeScale(1.4);

  gsap
    .timeline({ repeat: -1, repeatDelay: 1 })
    .to(".bounce2", {
      y: -0.3,
      duration: 0.1,
    })
    .to(".bounce2", {
      y: 0,
      duration: 0.1,
    })
    .to(".bounce2", {
      y: -0.3,
      duration: 0.1,
    })
    .to(".bounce2", {
      y: 0,
      duration: 0.1,
    });

  gsap.timeline({ repeat: -1, yoyo: true }).to(".wiggle-left", {
    transformOrigin: "bottom left",
    rotate: 10,
    duration: 0.2,
  });

  gsap.timeline({ repeat: -1, yoyo: true }).to(".wiggle-right", {
    transformOrigin: "bottom right",
    rotate: -10,
    duration: 0.2,
  });

  gsap
    .timeline({ repeat: -1, yoyo: true, repeatDelay: 1.5 })
    .to(".side-right", {
      x: 0.4,
      duration: 0.2,
    });

  gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1.5 }).to(".up-down", {
    y: 0.4,
    duration: 0.2,
  });

  gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1.5 }).to(".down-up", {
    y: -0.4,
    duration: 0.2,
  });

  gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1.5 }).fromTo(
    ".draw-middle",
    { drawSVG: "35% 50%", y: -0.1 },
    {
      drawSVG: "0% 100%",
      y: 0,
      duration: 0.2,
    }
  );
}
