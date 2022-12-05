import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateX(-50%) translateY(50vh)

  }
  100% {
    transform: translateX(-50%) translateY(-50%)
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

export const StyledRisultatoModal = styled.div<any>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 513px;

  background: #ffffff;
  box-shadow: 0px 0px 80px #111428;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 36px 24px;
  gap: 16px;

  animation: ${slideUp} 0.4s both;
`;

export const StyledDarkBackground = styled.div<any>`
  position: fixed;
  inset: 0;
  z-index: 999;

  background: rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 0.2s both;
`;

export const StyledCloseIcon = styled.div<any>`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 24px;
`;

export const StyledTesta = styled.div`
  margin: auto;
`;
