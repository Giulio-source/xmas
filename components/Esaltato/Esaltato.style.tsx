import styled, { keyframes } from "styled-components";

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

const glitteryEyes = keyframes`
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(10deg);
    }
  `;

export const StyledEsaltato = styled.div`
  width: 500px;
  margin: auto;

  #esaltato #bocca-wide,
  #esaltato #bocca_small,
  #indifferente #bocca-smile,
  #esaltato #occhio_3,
  #esaltato #occhio_4,
  #esaltato #braccio-dex-2,
  #esaltato #braccio-six-2,
  #esaltato #coriandoli .linea,
  #esaltato #coriandoli .stella {
    visibility: hidden;
    opacity: 0;
  }

  .luce-bianca {
    animation: ${glowWhite} 0.4s linear infinite alternate-reverse;
  }

  .luce-gialla {
    animation: ${glowYellow} 0.4s 0.2s linear infinite alternate-reverse;
  }

  #esaltato {
    cursor: pointer;
  }

  #esaltato #occhio_3 .glitter {
    transform-box: fill-box;
    transform-origin: center center;
    animation: ${glitteryEyes} 0.1s linear infinite alternate-reverse;
  }

  #esaltato #occhio_4 .glitter {
    transform-box: fill-box;
    transform-origin: center center;
    animation: ${glitteryEyes} 0.1s 0.05s linear infinite alternate-reverse;
  }
`;
