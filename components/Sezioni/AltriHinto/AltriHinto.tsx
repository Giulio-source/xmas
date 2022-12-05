import { Titolo } from "../../commons/Theme";
import { ElfoHinto } from "../../ElfoHinto/ElfoHinto";
import { StyledElfi, StyledRisultati } from "./AltriHinto.style";
import { Divider } from "../../commons/Divider";
export const AltriHinto = ({ persone }: { persone: string[] | undefined }) => {
  return (
    <>
      <Divider />
      <StyledRisultati>
        <Titolo size={22}>In Hinto col tuo stesso spirito</Titolo>
        <StyledElfi>
          {persone?.map((n) => {
            const [nome, ...cognome] = n.split("-");
            return (
              <ElfoHinto
                key={n}
                imgUrl={`/xmas-facce/${n}.png`}
                nome={nome}
                cognome={cognome.join(' ')}
              />
            );
          })}
        </StyledElfi>
      </StyledRisultati>
    </>
  );
};
