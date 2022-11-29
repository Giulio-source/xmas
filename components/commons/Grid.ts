import styled from "styled-components";

export const Grid = styled.div`
  margin: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: min(1280px, 80vw);
  grid-auto-rows: auto;
  gap: 28px;
`;
