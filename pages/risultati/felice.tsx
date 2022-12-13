import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
  wait,
} from "../../components/commons/utils";
import { FeliceHinto1 } from "../../components/ElfoHinto/Elfi/FeliceHinto1";
import { FeliceHinto2 } from "../../components/ElfoHinto/Elfi/FeliceHinto2";
import { ElfoHinto } from "../../components/ElfoHinto/ElfoHinto";
import { Felice } from "../../components/Felice/Felice";
import { HintoIcon } from "../../components/Icons/HintoIcon";
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

export default function FelicePage() {
  const [names, setNames] = useState<{ nome: string; cognome: string }[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const isMobile = useWindowMedia();

  useEffect(() => {
    const names = getRandomNames("felice");
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
                  handleOnCondividi("cartolina/elfo-felice", () =>
                    setCopiedSuccess(true)
                  )
                }
              />
            </StyledCondividiCTA>
          )}
          <Cartolina
            message="Ti auguro gioia, serenità e uno splendido Natale in compagnia!"
            backgroundColor={Colors.deepBlue}
            Elfo={Felice}
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
                    handleOnCondividi("cartolina/elfo-felice", () =>
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
            title="Saresti un ottimo aiutante di Babbo Natale! "
            background={Colors.deepBlue}
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
                <br />
                <strong>
                  Accarezza l'elfo per sprigionare la sua felicità!
                </strong>
              </>
            }
            Elfo={Felice}
            onShowAnteprima={() => setShowAnteprima(true)}
          />
          <Container>
            {names && (
              <AltriHinto>
                <ElfoHinto
                  Elfo={
                    <FeliceHinto1
                      imgUrl={`/xmas-facce/${names[0].nome}-${names[0].cognome}.png`}
                    />
                  }
                  nome={names[0].nome}
                  cognome={names[0].cognome.replace("-", " ")}
                />
                <ElfoHinto
                  Elfo={
                    <FeliceHinto2
                      imgUrl={`/xmas-facce/${names[1].nome}-${names[1].cognome}.png`}
                    />
                  }
                  nome={names[1].nome}
                  cognome={names[1].cognome.replace("-", " ")}
                />
              </AltriHinto>
            )}
            <Sciaugurati />
          </Container>
        </>
      )}
    </RisultatoPageWrapper>
  );
}
