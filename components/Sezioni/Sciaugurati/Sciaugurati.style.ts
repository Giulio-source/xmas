import styled, { keyframes } from "styled-components";

export const StyledSciaugurati = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 20px;

  @media screen and (min-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

export const StyledSciauguratiContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 1023px) {
    gap: 40px;
  }
`;

const spriteAnim = keyframes`
  0% {
  background-position: center left;
  }
  100% {
  background-position: center right;
  }
`;

export const StyledSciauguratiImage = styled.div`
  position: relative;
  height: 182px;
  width: 187px;
  background-image: url("/sciaugurati-sprite.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;
  animation: ${spriteAnim} 1s steps(5) infinite alternate;

  @media screen and (min-width: 1023px) {
    height: 350px;
    width: 359px;
  }
`;

export const StyledBackButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0 32px;

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
  }
`;
