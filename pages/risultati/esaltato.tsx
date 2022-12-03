import { Colors, Container } from "../../components/commons/Theme";
import { Esaltato } from "../../components/Esaltato/Esaltato";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { RisultatoPageWrapper } from "../../page-styles/risultato-page.style";

export default function EsaltatoPage() {
  return (
    <RisultatoPageWrapper>
      <HintoIcon theme="light" />
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
        <AltriHinto persone={["ester-barbato", "irene-fano"]} />
        <Sciaugurati />
      </Container>
    </RisultatoPageWrapper>
  );
}
