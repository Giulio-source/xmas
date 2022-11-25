import styled from "styled-components";

export const StyledAnsioso = styled.div`
  max-width: 500px;
  margin: auto;

  #braccio-six-conserto,
  #braccio-dex-conserto,
  #bocca2 {
    visibility: hidden;
    opacity: 0;
  }

  #palla1,
  #palla2,
  #palla3 {
    transform: translateY(-100%);
  }
`;
