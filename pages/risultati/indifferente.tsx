import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
} from "../../components/commons/utils";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Indifferente } from "../../components/Indifferente/Indifferente";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import {
  RisultatoPageWrapper,
  StyledCondividiCTA,
} from "../../page-styles/risultato-page.style";
import {Neve} from '../../components/Neve/Neve';

export default function IndifferentePage() {
  const [names, setNames] = useState<string[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);

  useEffect(() => {
    const names = getRandomNames("indifferente");
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
              onClick={() => handleOnCondividi("cartolina/elfo-indifferente")}
            />
          </StyledCondividiCTA>
          <Cartolina
            message="Buon Natale e felice anno nuovo!"
            backgroundColor={Colors.mintGreen}
            Elfo={Indifferente}
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
          <Neve />
          <Hero
            title="Uno spirito natalizio piuttosto neutrale!"
            background={Colors.mintGreen}
            testo={
              <>
                Diciamocelo: non sei in trepidante attesa del Natale, ma non ti
                dispiace il suo arrivo.
                <br />
                Vivi queste giornate come un'occasione per riposare, dedicare
                del tempo a ciò che ti piace e trascorrere momenti in compagnia.
                <br />
                Coi regali ti regoli per fare il necessario, senza impazzire,
                magari provando a stupire solo gli affetti più cari.
                <br />
                Insomma, niente facili entusiasmi!
              </>
            }
            Elfo={Indifferente}
            onShowAnteprima={() => setShowAnteprima(true)}
          />
          <Container>
            <AltriHinto persone={names} />
            <Sciaugurati />
          </Container>{" "}
        </>
      )}
    </RisultatoPageWrapper>
  );
}
