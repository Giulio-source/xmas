import Head from "next/head";
import { MouseEvent, useRef, useState } from "react";
import { Button } from "../../Button/Button";
import { SmallDivider } from "../../commons/Divider";
import { Testo, Titolo } from "../../commons/Theme";
import { CloseIcon } from "../../Icons/CloseIcon";
import {
  StyledCloseIcon,
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
  const [regalo, setRegalo] = useState<number>(1);

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <StyledRisultatoModal open={open} ref={modalRef} tabIndex={open ? 0 : -1}>
        <StyledCloseIcon onClick={resetDataAndClose}>
          <CloseIcon />
        </StyledCloseIcon>
        {activeStep === "email" && (
          <EmailStep
            email={email}
            regalo={regalo}
            onChange={(e: any) => setEmail(e.target.value)}
            goBack={() => setActiveStep("default")}
            goToTYP={() => setActiveStep("typ")}
          />
        )}
        {activeStep === "typ" && <SimpleTYP onClose={resetDataAndClose} />}
        {activeStep === "special-typ" && (
          <SpecialTYP onClose={resetDataAndClose} />
        )}
        {activeStep === "default" && (
          <>
            <Titolo>
              Oh oh oh...
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
              onClick={() => {
                setActiveStep("email");
                setRegalo(1);
              }}
            />
            <Button
              label="Analisi dell'ottimizzazione del tuo sito
          per il posizionamento sui motori di ricerca"
              type="outline"
              color="grey"
              onClick={() => {
                setActiveStep("email");
                setRegalo(2);
              }}
            />
            <Button
              label="Analisi di sicurezza e performance della tua infrastruttura in cloud"
              type="outline"
              color="grey"
              onClick={() => {
                setActiveStep("email");
                setRegalo(3);
              }}
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
