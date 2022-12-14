import Link from "next/link";
import { Button } from "../../Button/Button";
import { Divider } from "../../commons/Divider";
import { Row, Testo } from "../../commons/Theme";
import { Credits } from "../../Credits/Credits";
import {
  StyledBackButton,
  StyledSciaugurati,
  StyledSciauguratiContent,
  StyledSciauguratiImage,
} from "./Sciaugurati.style";
export const Sciaugurati = () => {
  return (
    <>
      <Divider />
      <StyledSciaugurati>
        <StyledSciauguratiContent>
          <Testo>
            Ora che conosci il tuo spirito natalizio, non ti resta che scoprire
            chi tra <b>gli SciaUgurati</b> siederà accanto a te quest'anno.
          </Testo>
          <a
            href="https://www.sciaugurati.christmas/"
            target="_blank"
            rel="noreferrer"
          >
            <Button label="Scoprilo ora" type="outline" />
          </a>
        </StyledSciauguratiContent>
        <StyledSciauguratiImage />
      </StyledSciaugurati>
      <StyledBackButton>
        <Link href="/">
          <Button label="Torna alla home" type="ghost" />
        </Link>
      </StyledBackButton>
      <Divider />
      <Credits margin="32px 0 50px" />
    </>
  );
};
