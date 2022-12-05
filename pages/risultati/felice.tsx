import { useEffect, useState } from "react";
import { Colors, Container } from "../../components/commons/Theme";
import { getRandomNames } from "../../components/commons/utils";
import { Felice } from "../../components/Felice/Felice";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import { RisultatoPageWrapper } from "../../page-styles/risultato-page.style";

export default function FelicePage() {
  const [names, setNames] = useState<string[]>();

  useEffect(() => {
    const names = getRandomNames("felice");
    setNames(names);
  }, []);

  return (
    <RisultatoPageWrapper>
      <HintoIcon theme="light" />
      <Trees />
      <Hero
        title="Saresti un ottimo aiutante di Babbo Natale! "
        background={Colors.deepBlue}
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
        Elfo={Felice}
      />
      <Container>
        <AltriHinto persone={names} />
        <Sciaugurati />
      </Container>
    </RisultatoPageWrapper>
  );
}
