import { MouseEvent, useRef, useState } from "react";
import { Button } from "../../Button/Button";
import { SmallDivider } from "../../commons/Divider";
import { Testo, Titolo } from "../../commons/Theme";
import {
  StyledDarkBackground,
  StyledRisultatoModal,
} from "./RisultatoModal.style";
import { EmailStep } from "./Steps/EmailStep";
import { SimpleTYP } from "./Steps/SimpleTYP";
import { SpecialTYP } from "./Steps/SpecialTYP";
export const RisultatoModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [activeStep, setActiveStep] = useState<
    "default" | "email" | "typ" | "special-typ"
  >("default");
  const [email, setEmail] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  function resetDataAndClose() {
    onClose();
    setEmail("");
    setActiveStep("default");
  }

  if (!open) return null;

  return (
    <StyledDarkBackground
      open={open}
      onClick={({ target }: MouseEvent) =>
        !modalRef.current?.contains(target as Node) && resetDataAndClose()
      }
    >
      <StyledRisultatoModal open={open} ref={modalRef} tabIndex={open ? 0 : -1}>
        {activeStep === "email" && (
          <EmailStep
            email={email}
            onChange={(e: any) => setEmail(e.target.value)}
            goBack={() => setActiveStep("default")}
            goToTYP={() => setActiveStep("typ")}
            onClose={resetDataAndClose}
          />
        )}
        {activeStep === "typ" && <SimpleTYP onClose={resetDataAndClose} />}
        {activeStep === "special-typ" && (
          <SpecialTYP onClose={resetDataAndClose} />
        )}
        {activeStep === "default" && (
          <>
            <Titolo>
              <b>Oh oh oh...</b>
              <br />
              <span>
                Hinto ha una
                <br /> sorpresa per te.{" "}
              </span>
            </Titolo>
            <Testo>Scegli il regalo che preferisci:</Testo>
            <Button
              label={
                <>
                  Analisi dei tuoi flussi di
                  <br /> lavoro per ottimizzare i processi
                </>
              }
              type="outline"
              color="grey"
              onClick={() => setActiveStep("email")}
            />
            <Button
              label="Analisi dell'ottimizzazione del tuo sito
          per il posizionamento sui motori di ricerca"
              type="outline"
              color="grey"
              onClick={() => setActiveStep("email")}
            />
            <Button
              label="Analisi di sicurezza e performance della tua infrastruttura in cloud"
              type="outline"
              color="grey"
              onClick={() => setActiveStep("email")}
            />
            <SmallDivider />
            <Button
              label="Preferisco si faccia beneficenza :)"
              color="grey"
              onClick={() => setActiveStep("special-typ")}
            />
          </>
        )}
      </StyledRisultatoModal>
    </StyledDarkBackground>
  );
};