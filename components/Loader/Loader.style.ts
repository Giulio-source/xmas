import styled from "styled-components";

export const StyledLoader = styled.div<any>`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  transform: translateY(-100%);

  & div:nth-child(1) {
    width: 25%;
    background: #eef1ff;
  }

  & div:nth-child(2) {
    width: 25%;
    background: #d2daff;
  }

  & div:nth-child(3) {
    width: 25%;
    background: #aac4ff;
  }

  & div:nth-child(4) {
    width: 25%;
    background: #b1b2ff;
  }
`;
