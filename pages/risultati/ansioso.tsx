import { useEffect, useState } from "react";
import { Ansioso } from "../../components/Ansioso/Ansioso";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
} from "../../components/commons/utils";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import {
  RisultatoPageWrapper,
  StyledCondividiCTA,
} from "../../page-styles/risultato-page.style";
import { Neve } from "../../components/Neve/Neve";

export default function AnsiosoPage() {
  const [names, setNames] = useState<string[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);

  useEffect(() => {
    const names = getRandomNames("ansioso");
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
              onClick={() => handleOnCondividi("cartolina/elfo-ansioso")}
            />
          </StyledCondividiCTA>
          <Cartolina
            message="Buone feste a tutti!"
            backgroundColor={Colors.mintGreen}
            Elfo={Ansioso}
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
            title="Lo spirito c'è, ma non è troppo convinto!"
            background={Colors.mintGreen}
            testo={
              <>
                L'idea dei troppi impegni natalizi ti dà quella fastidiosa
                sensazione di soffocamento.
                <br />
                Molto spesso ti ritrovi a fare una corsa all'ultimo per i
                regali. L'albero invece non può mancare, ma se anche la parte
                che non si vede non è addobbata, nessun problema, tanto non si
                accorge nessuno.
                <br />
                Pranzi e cene in compagnia? Le domande inopportune sono dietro
                l'angolo e questo ti preoccupa assai!
              </>
            }
            Elfo={Ansioso}
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
