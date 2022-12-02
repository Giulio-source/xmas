import Image from "next/image";
import { Button } from "../Button/Button";
import { Testo } from "../commons/Theme";
import {
  StyledSciaugurati,
  StyledSciauguratiContent,
  StyledSciauguratiImage,
} from "./Sciaugurati.style";
export const Sciaugurati = () => {
  return (
    <StyledSciaugurati>
      <StyledSciauguratiContent>
        <Testo>
          Ora che conosci il tuo spirito natalizio, non ti resta che scoprire
          chi tra <b>gli SciaUgurati</b> siederà accanto a te quest'anno.
        </Testo>
        <Button label="Scoprilo ora" type="outline" />
      </StyledSciauguratiContent>
      <StyledSciauguratiImage>
        <Image
          src="/sciaugurati.jpeg"
          alt="sciaugurati"
          fill
          style={{ objectFit: "contain" }}
        />
      </StyledSciauguratiImage>
    </StyledSciaugurati>
  );
};
