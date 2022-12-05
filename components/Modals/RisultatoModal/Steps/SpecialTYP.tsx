import { Button } from "../../../Button/Button";
import { Row, Testo, Titolo } from "../../../commons/Theme";
import { CloseIcon } from "../../../Icons/CloseIcon";
import { Facebook } from "../../../Icons/Facebook";
import { Instagram } from "../../../Icons/Instagram";
import { LinkedIn } from "../../../Icons/LinkedIn";
import { TestaElfoRossa } from "../../../Icons/TestaElfoRossa";
import { StyledCloseIcon, StyledTesta } from "../RisultatoModal.style";

export const SpecialTYP = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <StyledCloseIcon onClick={onClose}>
        <CloseIcon />
      </StyledCloseIcon>
      <StyledTesta>
        <TestaElfoRossa />
      </StyledTesta>
      <Titolo>Fantastico!</Titolo>
      <Testo>
        Quest'anno in Hinto abbiamo deciso di aiutare il nostro pianeta. Grazie
        alla tua scelta e a Treedom pianteremo tanti alberi in tutto il mondo!
        <br />
        <br />
        Seguici sul tuo social preferito per rimanere informato sull'iniziativa
        benefica e non perderti aggiornamenti.
      </Testo>
      <Row gap={40} margin="8px 0">
        <a href="https://www.instagram.com/wearehinto/" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/wearehinto/" target="_blank" rel="noreferrer">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/company/wearehinto/" target="_blank" rel="noreferrer">
          <LinkedIn />
        </a>
      </Row>
      <Button
        label="Torna al risultato del test"
        onClick={onClose}
        type="ghost"
        style={{ margin: "16px auto" }}
      />
    </>
  );
};
