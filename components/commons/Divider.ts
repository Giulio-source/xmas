import styled from "styled-components";
import { Colors } from "./Theme";

export const Divider = styled.div<any>`
  width: 100%;
  height: 1px;
  background: ${Colors.lightGrey};
  margin: ${({ noMargin }) => (noMargin ? "0" : "16px 0")};
`;

export const SmallDivider = styled.div`
  max-width: 292px;
  width: 100%;
  height: 1px;
  background: ${Colors.lightGrey};
  margin: auto;
`;
