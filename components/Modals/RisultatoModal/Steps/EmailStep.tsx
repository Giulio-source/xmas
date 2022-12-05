import { Button } from "../../../Button/Button";
import { Testo, Titolo, Input } from "../../../commons/Theme";
import { StyledCloseIcon } from "../RisultatoModal.style";
import { CloseIcon } from "../../../Icons/CloseIcon";
export const EmailStep = ({
  email,
  onChange,
  goBack,
  onClose,
  goToTYP,
}: {
  email: string;
  onChange: (e: any) => void;
  goBack: () => void;
  onClose: () => void;
  goToTYP: () => void;
}) => {
  return (
    <>
      <StyledCloseIcon onClick={onClose}>
        <CloseIcon />
      </StyledCloseIcon>
      <Titolo>Ottima scelta!</Titolo>
      <Testo>
        Inserisci la tua email <br /> per essere contattato
      </Testo>
      <Input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={onChange}
      />
      <Button
        label="Prosegui"
        style={{ alignSelf: "flex-end" }}
        onClick={goToTYP}
        disabled={!email}
      />
      <Button
        label="Indietro"
        style={{ alignSelf: "flex-start" }}
        onClick={goBack}
        type="ghost"
      />
    </>
  );
};
