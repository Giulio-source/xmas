import styled from "styled-components";

export const StyledSection = styled.div<any>`
  position: relative;
`;

export const StyledBackground = styled.div<any>`
  background-color: ${({ color }) => color};
  position: absolute;
  inset: 0;
  z-index: -2;
`;

export const StyledSnowHill = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: initial;
    background: white;
    height: 280px;
    width: 100%;
    z-index: -1;
    position: absolute;
    bottom: 0%;
    left: 0;
    clip-path: ellipse(75% 100% at 50% 100%);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: auto;
  padding: 0 16px;
`;
