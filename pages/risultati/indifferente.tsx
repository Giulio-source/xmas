import { Colors, Container } from "../../components/commons/Theme";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Indifferente } from "../../components/Indifferente/Indifferente";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { RisultatoPageWrapper } from "../../page-styles/risultato-page.style";

export default function IndifferentePage() {
  return (
    <RisultatoPageWrapper>
      <HintoIcon theme="light" />
      <Hero
        title="Uno spirito natalizio piuttosto neutrale!"
        background={Colors.mintGreen}
        testo={
          <>
            Diciamocelo: non sei in trepidante attesa del Natale, ma non ti
            dispiace il suo arrivo.
            <br />
            Vivi queste giornate come un'occasione per riposare, dedicare del
            tempo a ciò che ti piace e trascorrere momenti in compagnia.
            <br />
            Coi regali ti regoli per fare il necessario, senza impazzire, magari
            provando a stupire solo gli affetti più cari.
            <br />
            Insomma, niente facili entusiasmi!
          </>
        }
        Elfo={Indifferente}
      />
      <Container>
        <AltriHinto persone={["ester-barbato", "irene-fano"]} />
        <Sciaugurati />
      </Container>
    </RisultatoPageWrapper>
  );
}
