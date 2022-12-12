import styled from "styled-components";
import { StyledTitolo } from "../commons/Theme";
import { StyledCredits } from "../Credits/Credits.style";
import { StyledBackground } from "../Sezioni/Hero/Hero.style";

export const StyledElfoWrapper = styled.div`
  position: relative;
`;

export const StyledCartolina = styled.div`
  @media screen and (min-width: 1024px) {
    position: relative;
    display: grid;
    grid-template-columns: 500px 450px;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 40px;
  }
`;

export const StyledCartolinaContent = styled.div`
  padding: 16px;
  background: white;
  margin-top: -5px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: 1024px) {
    padding: 0;
    background: transparent;

    ${StyledTitolo} {
      color: white;
      margin-bottom: 200px;
    }
    ${StyledCredits} {
      display: none;
    }

    a {
      display: flex;
      justify-content: center;
    }
  }
`;

export const StyledCartolinaDesktop = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: initial;
  }
`;

export const StyledCartolinaFooterDesktop = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    grid-column: 1 / -1;
    margin-bottom: 80px;
  }
`;

export const StyledGoBackButton = styled.div`
  @media screen and (min-width: 1024px) {
    grid-column: 1 / -1;
    margin-top: 32px;
  }
`;

export const StyledCartolinaBackground = styled(StyledBackground)`
  bottom: 200px;
`;
