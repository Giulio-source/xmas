import { ISourceOptions } from "tsparticles-engine";

export const neveOptions: ISourceOptions = {
  background: {
    opacity: 0,
  },
  particles: {
    move: {
      direction: "bottom",
      enable: true,
      random: false,
      straight: false,
    },
    opacity: {
      value: { min: 0.5, max: 1 },
    },
    size: {
      value: { min: 1, max: 5 },
    },
    wobble: {
      distance: 20,
      enable: true,
      speed: {
        min: -5,
        max: 5,
      },
    },
  },
};
