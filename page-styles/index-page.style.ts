import styled from "styled-components";
import { Colors } from "../components/commons/Theme";

export const MappaPageWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background: ${Colors.lightMint};

  #righe polyline {
    visibility: hidden;
    opacity: 0;
    /* mix-blend-mode: screen; */

    &:nth-child(1) {
      stroke: white;
    }
    &:nth-child(2) {
      stroke: ${Colors.red};
    }
    &:nth-child(3) {
      stroke: white;
    }
  }
`;
