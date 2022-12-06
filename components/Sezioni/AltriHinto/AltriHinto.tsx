import { Divider } from "../../commons/Divider";
import { Titolo } from "../../commons/Theme";
import { StyledElfi, StyledRisultati } from "./AltriHinto.style";

export const AltriHinto = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Divider />
      <StyledRisultati>
        <Titolo size={22}>In Hinto col tuo stesso spirito</Titolo>
        <StyledElfi>{children}</StyledElfi>
      </StyledRisultati>
    </>
  );
};
