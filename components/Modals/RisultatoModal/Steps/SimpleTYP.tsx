import { useState } from "react";
import { Button } from "../../../Button/Button";
import { Testo, Titolo } from "../../../commons/Theme";
import { handleOnCondividi } from "../../../commons/utils";
import { TestaElfoVerde } from "../../../Icons/TestaElfoVerde";
import { StyledTesta } from "../RisultatoModal.style";

export const SimpleTYP = ({ onClose }: { onClose: () => void }) => {
  const [copied, setCopied] = useState(false);

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
        label={copied ? "Link copiato!" : "Invita i tuoi amici a partecipare"}
        onClick={() => handleOnCondividi("", () => setCopied(true))}
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
