import styled from "styled-components";
import { keyframes } from "styled-components";

const glowYellow = keyframes`
    0% {
      fill: #f2de5c;
      filter: drop-shadow();
    }
    100% {
      fill: #ffe436;
      filter: drop-shadow(0 0 3px #ffe436);
    }
  `;

const glowWhite = keyframes`
    0% {
      fill: #fffceb;
      filter: none;
    }
    100% {
      fill: #fff7cf;
      filter: drop-shadow(0 0 3px #fff7cf);
    }
  `;

export const StyledLucine = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;

    .luce-bianca {
      animation: ${glowWhite} 0.4s linear infinite alternate-reverse;
    }

    .luce-gialla {
      animation: ${glowYellow} 0.4s 0.2s linear infinite alternate-reverse;
    }
  }
`;
