import { useEffect, useState } from "react";
import { Ansioso } from "../../components/Ansioso/Ansioso";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
} from "../../components/commons/utils";
import { AnsiosoHinto } from "../../components/ElfoHinto/Elfi/AnsiosoHinto";
import { ElfoHinto } from "../../components/ElfoHinto/ElfoHinto";
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
  StyledCTAWrapper,
} from "../../page-styles/risultato-page.style";

export default function AnsiosoPage() {
  const [names, setNames] = useState<{ nome: string; cognome: string }[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const isMobile = useWindowMedia();

  useEffect(() => {
    const names = getRandomNames("ansioso");
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
            message="Buone feste a tutti!"
            interactionMessage="Clicca l'elfo e vediamo se cambia idea sul Natale!"
            backgroundColor={Colors.mintGreen}
            Elfo={Ansioso}
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
                      handleOnCondividi("cartolina/elfo-ansioso", () =>
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
                    handleOnCondividi("cartolina/elfo-ansioso", () =>
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
            title="Lo spirito c'??, ma non ?? troppo convinto!"
            background={Colors.mintGreen}
            testo={
              <>
                L'idea dei troppi impegni natalizi ti d?? quella fastidiosa
                sensazione di soffocamento.
                <br />
                Molto spesso ti ritrovi a fare una corsa all'ultimo per i
                regali. L'albero invece non pu?? mancare, ma se anche la parte
                che non si vede non ?? addobbata, nessun problema, tanto non si
                accorge nessuno.
                <br />
                Pranzi e cene in compagnia? Le domande inopportune sono dietro
                l'angolo e questo ti preoccupa assai!
                <br />
                <strong>
                  Clicca l'elfo e vediamo se cambia idea sul Natale!
                </strong>
              </>
            }
            Elfo={Ansioso}
            onShowAnteprima={() => setShowAnteprima(true)}
            snowHeight={380}
          />
          <Container>
            {names && (
              <AltriHinto>
                <ElfoHinto
                  Elfo={
                    <AnsiosoHinto
                      imgUrl={`/xmas-facce/${names[0].nome}-${names[0].cognome}.png`}
                    />
                  }
                  nome={names[0].nome}
                  cognome={names[0].cognome.replace("-", " ")}
                />
                <ElfoHinto
                  Elfo={
                    <AnsiosoHinto
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
