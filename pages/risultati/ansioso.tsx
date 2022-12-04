import { Ansioso } from "../../components/Ansioso/Ansioso";
import { Colors, Container } from "../../components/commons/Theme";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import { RisultatoPageWrapper } from "../../page-styles/risultato-page.style";

export default function AnsiosoPage() {
  return (
    <RisultatoPageWrapper>
      <HintoIcon theme="light" />
      <Trees />
      <Hero
        title="Lo spirito c'è, ma non è troppo convinto!"
        background={Colors.mintGreen}
        testo={
          <>
            L'idea dei troppi impegni natalizi ti dà quella fastidiosa
            sensazione di soffocamento.
            <br />
            Molto spesso ti ritrovi a fare una corsa all'ultimo per i regali.
            L'albero invece non può mancare, ma se anche la parte che non si
            vede non è addobbata, nessun problema, tanto non si accorge nessuno.
            <br />
            Pranzi e cene in compagnia? Le domande inopportune sono dietro
            l'angolo e questo ti preoccupa assai!
          </>
        }
        Elfo={Ansioso}
      />
      <Container>
        <AltriHinto persone={["ester-barbato", "irene-fano"]} />
        <Sciaugurati />
      </Container>
    </RisultatoPageWrapper>
  );
}
