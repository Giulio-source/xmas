import { Button } from "../../../Button/Button";
import { Testo, Titolo, Input } from "../../../commons/Theme";
import { StyledCloseIcon, StyledTesta } from "../RisultatoModal.style";
import { CloseIcon } from "../../../Icons/CloseIcon";
import { TestaElfoVerde } from "../../../Icons/TestaElfoVerde";

export const SimpleTYP = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <StyledTesta>
        <TestaElfoVerde />
      </StyledTesta>
      <Titolo>Ben fatto!</Titolo>
      <Testo>
        L'esperienza di Natale
        <br />
        non finisce qui
      </Testo>
      <Button
        label="Invita i tuoi amici a partecipare"
        onClick={() => alert("Send data to BE")}
      />
      <Button
        label="Torna al risultato del test"
        onClick={onClose}
        type="ghost"
        style={{ margin: "16px auto" }}
      />
    </>
  );
};
