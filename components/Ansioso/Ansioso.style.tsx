import styled from "styled-components";

export const StyledAnsioso = styled.div`
  width: 100%;
  margin: auto;

  #braccio-six-conserto,
  #braccio-dex-conserto,
  #sopracciglio-six-2,
  #sopracciglio-dex-2,
  #bocca2 {
    visibility: hidden;
    opacity: 0;
  }

  #palla1,
  #palla2,
  #palla3 {
    transform: translateY(-100%);
  }

  #elfo-intero {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 80px;
  }
`;
