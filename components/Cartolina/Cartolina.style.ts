import styled from "styled-components";

export const StyledCartolina = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 500px 450px;
    justify-content: center;
    align-items: center;
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
    padding: 32px;
    border-radius: 8px;
  }
`;

export const StyledCartolinaDesktop = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: initial;
  }
`;
