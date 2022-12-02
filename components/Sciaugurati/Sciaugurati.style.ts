import styled from "styled-components";

export const StyledSciaugurati = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

export const StyledSciauguratiContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 1023px) {
    gap: 40px;
  }
`;

export const StyledSciauguratiImage = styled.div`
  position: relative;
  height: 182px;

  @media screen and (min-width: 1023px) {
    height: 350px;
  }
`;
