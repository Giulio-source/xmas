import styled from "styled-components";

export const StyledScazzato = styled.div`
  max-width: 500px;
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
`;
