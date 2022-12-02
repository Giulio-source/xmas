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

  ${({ fill }) =>
    fill &&
    css`
      flex: 1;
    `}
`;

export const StyledOutlineButton = styled(StyledButton)`
  color: ${Colors.violet};
  background: white;
  border: 2px solid ${Colors.violet};
`;
