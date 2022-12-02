import { Titolo } from "../commons/Theme";
import { ElfoHinto } from "../ElfoHinto/ElfoHinto";
import { StyledElfi, StyledRisultati } from "./Risultati.style";
export const SezioneRisultati = () => {
  return (
    <StyledRisultati>
      <Titolo size={22}>In Hinto col tuo stesso spirito</Titolo>
      <StyledElfi>
        <ElfoHinto imgUrl="/ester-clip.png" nome="ester" cognome="barbato" />
        <ElfoHinto imgUrl="/irene-clip.png" nome="irene" cognome="fano"/>
      </StyledElfi>
    </StyledRisultati>
  );
};
