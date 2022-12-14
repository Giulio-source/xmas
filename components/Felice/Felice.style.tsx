import styled from "styled-components";

export const StyledFelice = styled.div`
  width: 100%;
  margin: auto;

  #gruppo {
    cursor: pointer;
  }

  #occhio-dex-2,
  #occhio-six-2,
  #bocca_2,
  #bocca_small,
  #cuore1,
  #cuore2,
  #bacio,
  #sopracciglia-2,
  #vischio {
    visibility: hidden;
    opacity: 0;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 60px;
  }
`;
