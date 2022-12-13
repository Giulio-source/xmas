import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
  wait,
} from "../../components/commons/utils";
import { IndifferenteHinto } from "../../components/ElfoHinto/Elfi/Indifferente";
import { ElfoHinto } from "../../components/ElfoHinto/ElfoHinto";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Indifferente } from "../../components/Indifferente/Indifferente";
import { Neve } from "../../components/Neve/Neve";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import {
  RisultatoPageWrapper,
  StyledCondividiCTA,
} from "../../page-styles/risultato-page.style";
import { showLoaderAnimation } from "../../components/Loader/Loader";
import { useWindowMedia } from "../../hooks/useWindowMedia";

export default function IndifferentePage() {
  const [names, setNames] = useState<{ nome: string; cognome: string }[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const isMobile = useWindowMedia();

  useEffect(() => {
    const names = getRandomNames("indifferente");
    const fullNames = names.map((n) => {
      const [nome, ...cognome] = n.split("-");
      return { nome, cognome: cognome.join("-") };
    });
    setNames(fullNames);
  }, []);

  return (
    <RisultatoPageWrapper>
      {showAnteprima ? (
        <>
          {isMobile && (
            <StyledCondividiCTA>
              <Button
                label={copiedSuccess ? "Link copiato!" : "Condividi"}
                color="white"
                onClick={() =>
                  handleOnCondividi("cartolina/elfo-indifferente", () =>
                    setCopiedSuccess(true)
                  )
                }
              />
            </StyledCondividiCTA>
          )}
          <Cartolina
            message="Buon Natale e felice anno nuovo!"
            backgroundColor={Colors.mintGreen}
            Elfo={Indifferente}
            goBack={() => showLoaderAnimation(() => setShowAnteprima(false))}
            CTA={
              isMobile ? (
                <Button
                  label="Torna al risultato del test"
                  type="ghost"
                  onClick={() =>
                    showLoaderAnimation(() => setShowAnteprima(false))
                  }
                  style={{ margin: "16px auto" }}
                />
              ) : (
                <Button
                  label={copiedSuccess ? "Link copiato!" : "Condividi"}
                  onClick={() =>
                    handleOnCondividi("cartolina/elfo-indifferente", () =>
                      setCopiedSuccess(true)
                    )
                  }
                  fit
                />
              )
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
                <br />
                <strong>Prova a pungolare l'elfo, chissà se gli interesserà!</strong>
              </>
            }
            Elfo={Indifferente}
            onShowAnteprima={() => setShowAnteprima(true)}
          />
          <Container>
            {names && (
              <AltriHinto>
                <ElfoHinto
                  Elfo={
                    <IndifferenteHinto
                      imgUrl={`/xmas-facce/${names[0].nome}-${names[0].cognome}.png`}
                    />
                  }
                  nome={names[0].nome}
                  cognome={names[0].cognome.replace("-", " ")}
                />
                <ElfoHinto
                  Elfo={
                    <IndifferenteHinto
                      imgUrl={`/xmas-facce/${names[1].nome}-${names[1].cognome}.png`}
                    />
                  }
                  nome={names[1].nome}
                  cognome={names[1].cognome.replace("-", " ")}
                />
              </AltriHinto>
            )}
            <Sciaugurati />
          </Container>{" "}
        </>
      )}
    </RisultatoPageWrapper>
  );
}
