import styled from "styled-components";

export const StyledLoader = styled.div<any>`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  transform: translateY(-100%);

  & div:nth-child(1) {
    width: 25%;
    background: #616dff;
  }

  & div:nth-child(2) {
    width: 25%;
    background: #4e50ff;
  }

  & div:nth-child(3) {
    width: 25%;
    background: #204bcf;
  }

  & div:nth-child(4) {
    width: 25%;
    background: #092860;
  }
`;
