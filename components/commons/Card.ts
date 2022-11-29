import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  text-align: center;
  transition: all 0.15s;
  
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
