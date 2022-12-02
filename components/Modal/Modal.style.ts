import styled, { css } from "styled-components";

export const StyledModal = styled.div<any>`
  width: calc(100% - 32px);
  max-width: 416px;
  position: fixed;
  top: 72px;
  left: 50%;
  padding: 36px 24px;
  border-radius: 4px;

  background: white;
  transform: translateX(-50%) translateY(100vh);

  box-shadow: 0px 0px 80px #6cb894;

  @media screen and (min-width: 1024px) {
    top: 160px;
  }

  ${({ typeQuestion }) =>
    typeQuestion &&
    css`
      width: 100%;
      max-width: 100%;
      top: unset;
      bottom: 24px;
      left: 50%;
      padding: 16px 28px;
      border-radius: 4px;

      background: rgba(190, 252, 223, 0);
      backdrop-filter: blur(4px);
      box-shadow: none;

      @media screen and (min-width: 1024px) {
        bottom: 120px;
        top: unset;
      }
    `}
`;

export const StyledModalBody = styled.div<any>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 16)}px;
  align-items: center;
`;

export const StyledIllustrazioneElfo = styled.div`
  width: 100%;
  max-width: 175px;
`;

export const StyledAnswerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: inherit;
  flex: 1;
  width: auto;

  div {
    flex: 1;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: space-between;
  }
`;
