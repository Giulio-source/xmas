import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
} from "../../components/commons/utils";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Scazzato } from "../../components/Scazzato/Scazzato";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import {
  RisultatoPageWrapper,
  StyledCondividiCTA,
} from "../../page-styles/risultato-page.style";

export default function ScazzatoPage() {
  const [names, setNames] = useState<string[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);

  useEffect(() => {
    const names = getRandomNames("scazzato");
    setNames(names);
  }, []);

  return (
    <RisultatoPageWrapper>
      {showAnteprima ? (
        <>
          <StyledCondividiCTA>
            <Button
              label="Condividi"
              color="white"
              onClick={() => handleOnCondividi("cartolina/elfo-scazzato")}
            />
          </StyledCondividiCTA>
          <Cartolina
            message="Anche a te e famiglia!"
            backgroundColor={Colors.violet}
            Elfo={Scazzato}
            CTA={
              <Button
                label="Torna indietro"
                type="ghost"
                onClick={() => setShowAnteprima(false)}
                style={{ margin: "16px auto" }}
              />
            }
          />
        </>
      ) : (
        <>
          <HintoIcon theme="light" />
          <Trees />
          <Hero
            title="Saresti un ottimo aiutante di Babbo Natale!"
            background={Colors.violet}
            testo={
              <>
                Natale per te significa festa, compagnia e tradizione.
                <br />
                L'idea di condividere momenti indimenticabili con gli affetti
                più cari ti riempie il cuore e pensare ai regali è sempre una
                gioia.
                <br />
                L'albero addobbato illumina le tue giornate, donando a questo
                periodo un senso di pace in grado di rigenerarti per l'anno
                nuovo.
              </>
            }
            Elfo={Scazzato}
            onShowAnteprima={() => setShowAnteprima(true)}
          />
          <Container>
            <AltriHinto persone={names} />
            <Sciaugurati />
          </Container>
        </>
      )}
    </RisultatoPageWrapper>
  );
}
