import { Titolo } from "../../commons/Theme";
import { ElfoHinto } from "../../ElfoHinto/ElfoHinto";
import { StyledElfi, StyledRisultati } from "./AltriHinto.style";
import { Divider } from "../../commons/Divider";
export const AltriHinto = ({ persone }: { persone: string[] }) => {
  return (
    <>
      <Divider />
      <StyledRisultati>
        <Titolo size={22}>In Hinto col tuo stesso spirito</Titolo>
        <StyledElfi>
          {persone.map((n) => {
            const [nome, cognome] = n.split("-");
            return (
              <ElfoHinto
                key={n}
                imgUrl={`/${n}.png`}
                nome={nome}
                cognome={cognome}
              />
            );
          })}
        </StyledElfi>
      </StyledRisultati>
    </>
  );
};
