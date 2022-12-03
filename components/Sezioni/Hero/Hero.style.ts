import styled from "styled-components";
import { keyframes } from "styled-components";
export const HeroWrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 100%;
  margin: auto;

  @media screen and (min-width: 1024px) {
    max-width: 950px;
    grid-template-columns: 400px 1fr;
  }
`;

export const pointDown = keyframes`
  0% {
    transform: translateY(-5px);
    opacity: 0
  }
  80% {
    transform: translateY(5px);
    opacity: 1
  }
  100% {
    transform: translateY(5px);
    opacity: 1
  }
`;

export const StyledChevronDown = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;

  svg {
    animation: ${pointDown} 1s ease infinite;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const StyledContent = styled.div`
  padding: 16px;
  background: white;
  margin-top: -8px;

  @media screen and (min-width: 1024px) {
    background: transparent;
    margin-top: 0px;
  }
`;

export const StyledContentTitolo = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: black;
  text-align: center;

  @media screen and (min-width: 1024px) {
    color: white;
    text-align: left;
  }
`;

export const StyledCtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const StyledCopyCta = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: 1024px) {
    margin-top: 100px;
  }
`;

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
    height: 300px;
    width: 100%;
    z-index: -1;
    position: absolute;
    bottom: 0%;
    left: 0;
    clip-path: ellipse(85% 100% at 60% 100%);
  }
`;
