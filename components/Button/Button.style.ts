import styled, { css } from "styled-components";
import { Colors } from "../commons/Theme";

export const StyledButton = styled.div<any>`
  cursor: pointer;
  background: ${Colors.violet};
  border: 2px solid ${Colors.violet};
  padding: 16px 32px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      background: ${Colors.lightGrey};
      border-color: ${Colors.lightGrey};
    `}

  ${({ color }) =>
    color === "grey" &&
    css`
      color: black;
      background-color: rgba(197, 210, 214, 0.35);
      border-color: rgba(197, 210, 214, 0.35);
      font-weight: 400;
    `}

    ${({ color }) =>
    color === "white" &&
    css`
      color: ${Colors.violet};
      background-color: white;
      border-color: white;
      font-weight: 700;
      padding: 12px 36px;
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      flex: 1;
    `}
`;

export const StyledOutlineButton = styled(StyledButton)`
  color: ${Colors.violet};
  background: white;
  border: 2px solid ${Colors.violet};

  ${({ color }) =>
    color === "grey" &&
    css`
      color: black;
      border-color: ${Colors.lightGrey};
      font-weight: 400;
    `}
`;

export const StyledGhostButton = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: ${Colors.violet};
  cursor: pointer;
  width: fit-content;
`;
