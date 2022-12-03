import { Colors, Container } from "../../components/commons/Theme";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Scazzato } from "../../components/Scazzato/Scazzato";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { RisultatoPageWrapper } from "../../page-styles/risultato-page.style";

export default function ScazzatoPage() {
  return (
    <RisultatoPageWrapper>
      <HintoIcon theme="light" />
      <Hero
        title="Saresti un ottimo aiutante di Babbo Natale!"
        background={Colors.violet}
        testo={
          <>
            Natale per te significa festa, compagnia e tradizione.
            <br />
            L'idea di condividere momenti indimenticabili con gli affetti più
            cari ti riempie il cuore e pensare ai regali è sempre una gioia.
            <br />
            L'albero addobbato illumina le tue giornate, donando a questo
            periodo un senso di pace in grado di rigenerarti per l'anno nuovo.
          </>
        }
        Elfo={Scazzato}
      />
      <Container>
        <AltriHinto persone={["ester-barbato", "irene-fano"]} />
        <Sciaugurati />
      </Container>
    </RisultatoPageWrapper>
  );
}
