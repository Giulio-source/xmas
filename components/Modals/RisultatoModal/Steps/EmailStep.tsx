import { Button } from "../../../Button/Button";
import { BACKEND_URL } from "../../../commons/constants";
import { Input, Testo, Titolo } from "../../../commons/Theme";
import { isValidEmail } from "../../../commons/utils";
export const EmailStep = ({
  email,
  onChange,
  goBack,
  goToTYP,
  regalo,
}: {
  email: string;
  onChange: (e: any) => void;
  goBack: () => void;
  goToTYP: () => void;
  regalo: number;
}) => {
  function handleOnSubmitEmail() {
    fetch(`${BACKEND_URL}api/v1/presents`, {
      method: "POST",
      body: JSON.stringify({
        choiceID: regalo,
        email: email,
      }),
    }).catch((err) => console.log(err));
    goToTYP();
  }

  return (
    <>
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
        onClick={handleOnSubmitEmail}
        disabled={!email || !isValidEmail(email)}
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
