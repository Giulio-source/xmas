import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
} from "../../components/commons/utils";
import { FeliceHinto1 } from "../../components/ElfoHinto/Elfi/FeliceHinto1";
import { FeliceHinto2 } from "../../components/ElfoHinto/Elfi/FeliceHinto2";
import { ElfoHinto } from "../../components/ElfoHinto/ElfoHinto";
import { Felice } from "../../components/Felice/Felice";
import { HeadRisultato } from "../../components/Head/HeadRisultato";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { showLoaderAnimation } from "../../components/Loader/Loader";
import { Neve } from "../../components/Neve/Neve";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import { useWindowMedia } from "../../hooks/useWindowMedia";
import {
  RisultatoPageWrapper,
  StyledCondividiCTA,
  StyledCTAWrapper,
} from "../../page-styles/risultato-page.style";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showAnteprima]);

  return (
    <RisultatoPageWrapper>
      <HeadRisultato />
      {showAnteprima ? (
        <>
          <Cartolina
            message="Ti auguro gioia, serenit?? e uno splendido Natale in compagnia!"
            interactionMessage="Accarezza l'elfo per sprigionare la sua felicit??!"
            backgroundColor={Colors.deepBlue}
            Elfo={Felice}
            goBack={() => showLoaderAnimation(() => setShowAnteprima(false))}
            CTA={
              isMobile ? (
                <StyledCTAWrapper>
                  <Button
                    label={
                      copiedSuccess
                        ? "Link copiato!"
                        : "Condividi i tuoi auguri"
                    }
                    onClick={() =>
                      handleOnCondividi("cartolina/elfo-felice", () =>
                        setCopiedSuccess(true)
                      )
                    }
                  />
                  <Button
                    label="Torna al risultato del test"
                    type="ghost"
                    onClick={() =>
                      showLoaderAnimation(() => setShowAnteprima(false))
                    }
                    style={{ margin: "16px auto" }}
                  />
                </StyledCTAWrapper>
              ) : (
                <Button
                  label={
                    copiedSuccess ? "Link copiato!" : "Condividi i tuoi auguri"
                  }
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
                pi?? cari ti riempie il cuore e pensare ai regali ?? sempre una
                gioia.
                <br />
                L'albero addobbato illumina le tue giornate, donando a questo
                periodo un senso di pace in grado di rigenerarti per l'anno
                nuovo.
                <br />
                <strong>
                  Accarezza l'elfo per sprigionare la sua felicit??!
                </strong>
              </>
            }
            Elfo={Felice}
            onShowAnteprima={() => setShowAnteprima(true)}
            snowHeight={320}
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
