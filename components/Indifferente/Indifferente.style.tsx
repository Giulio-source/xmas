import styled from "styled-components";

export const StyledIndifferente = styled.div`
  width: 100%;
  margin: auto;

  #bocca-smile,
  #bocca-neutra {
    visibility: hidden;
    opacity: 0;
  }

  #faccia_cliccabile {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 80px;
  }
`;
