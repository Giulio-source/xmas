import styled from "styled-components";
import { Colors } from "../components/commons/Theme";

export const MappaPageWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background: ${Colors.lightMint};

  #righe polyline {
    visibility: hidden;
    opacity: 1;
    mix-blend-mode: overlay;
  }
`;
