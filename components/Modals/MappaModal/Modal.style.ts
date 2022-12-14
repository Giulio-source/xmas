import styled, { css } from "styled-components";

export const StyledModal = styled.div<any>`
  width: calc(100% - 32px);
  max-width: 416px;
  max-height: calc(100% - 84px);
  overflow-y: auto;
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
      bottom: 0;
      left: 50%;
      padding: 16px 28px 40px;
      border-radius: 4px;

      background: rgba(190, 252, 223, 0);
      backdrop-filter: blur(4px);
      box-shadow: none;

      @media screen and (min-width: 1024px) {
        padding: 16px 28px 148px;
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
  max-width: 200px;
`;

export const StyledAnswerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: inherit;
  flex: 1;
  width: 100%;

  div {
    flex: 1;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: space-between;
    width: auto;
  }
`;
