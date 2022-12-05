import { useEffect, useState } from "react";
import { Colors, Container } from "../../components/commons/Theme";
import { getRandomNames } from "../../components/commons/utils";
import { Esaltato } from "../../components/Esaltato/Esaltato";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import { RisultatoPageWrapper } from "../../page-styles/risultato-page.style";

export default function EsaltatoPage() {
  const [names, setNames] = useState<string[]>();

  useEffect(() => {
    const names = getRandomNames("esaltato");
    setNames(names);
  }, []);

  return (
    <RisultatoPageWrapper>
      <HintoIcon theme="light" />
      <Trees />
      <Hero
        title="Hai spaccato il natalometro!"
        background={Colors.darkGreen}
        testo={
          <>
            Per te il countdown a Natale comincia quando mancano 100 giorni.
            <br />
            I regali? Lista già pronta con largo anticipo e non capita mai di
            dimenticare qualcuno.
            <br />
            L'albero è addobbato con luci visibili persino dalla luna e questo è
            un motivo di vanto.
            <br />
            Quell'atmosfera con strade addobbate, la gioia dell'attesa e la neve
            rendono tutto magico, tanto che ti dispiace tutto questo debba
            finire.
          </>
        }
        Elfo={Esaltato}
      />
      <Container>
        <AltriHinto persone={names} />
        <Sciaugurati />
      </Container>
    </RisultatoPageWrapper>
  );
}
