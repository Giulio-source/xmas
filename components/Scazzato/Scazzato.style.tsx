import styled from "styled-components";

export const StyledScazzato = styled.div`
  width: 100%;
  margin: auto;

  #braccio-dex-basso,
  #braccio-six-basso,
  #braccio-dex-alto,
  #braccio-six-alto,
  #occhi-chiusi {
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
