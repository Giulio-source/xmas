import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
} from "../../components/commons/utils";
import { EsaltatoHinto1 } from "../../components/ElfoHinto/Elfi/EsaltatoHinto1";
import { EsaltatoHinto2 } from "../../components/ElfoHinto/Elfi/EsaltatoHinto2";
import { ElfoHinto } from "../../components/ElfoHinto/ElfoHinto";
import { Esaltato } from "../../components/Esaltato/Esaltato";
import { HeadRisultato } from "../../components/Head/HeadRisultato";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { showLoaderAnimation } from "../../components/Loader/Loader";
import { Lucine } from "../../components/Lucine/Lucine";
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

export default function EsaltatoPage() {
  const [names, setNames] = useState<{ nome: string; cognome: string }[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const isMobile = useWindowMedia();

  useEffect(() => {
    const names = getRandomNames("esaltato");
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
          <Lucine />
          <Cartolina
            message="Ti auguro un Natale splendente e un meraviglioso anno nuovo ricco di gioia!"
            interactionMessage="Tocca l'elfo per farlo saltare di gioia!"
            backgroundColor={Colors.darkGreen}
            Elfo={Esaltato}
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
                      handleOnCondividi("cartolina/elfo-esaltato", () =>
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
                    handleOnCondividi("cartolina/elfo-esaltato", () =>
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
          <Lucine />
          <Trees />
          <Neve />
          <Hero
            title="Hai spaccato il natalometro!"
            background={Colors.darkGreen}
            testo={
              <>
                <br />
                Per te il countdown a Natale comincia quando mancano 100 giorni.
                <br />
                I regali? Lista gi?? pronta con largo anticipo e non capita mai
                di dimenticare qualcuno.
                <br />
                L'albero ?? addobbato con luci visibili persino dalla luna e
                questo ?? un motivo di vanto.
                <br />
                Quell'atmosfera con strade addobbate, la gioia dell'attesa e la
                neve rendono tutto magico, tanto che ti dispiace tutto questo
                debba finire.
                <br />
                <strong>Tocca l'elfo per farlo saltare di gioia!</strong>
              </>
            }
            Elfo={Esaltato}
            onShowAnteprima={() => setShowAnteprima(true)}
            snowHeight={390}
          />
          <Container>
            {names && (
              <AltriHinto>
                <ElfoHinto
                  Elfo={
                    <EsaltatoHinto1
                      imgUrl={`/xmas-facce/${names[0].nome}-${names[0].cognome}.png`}
                    />
                  }
                  nome={names[0].nome}
                  cognome={names[0].cognome.replace("-", " ")}
                />
                <ElfoHinto
                  Elfo={
                    <EsaltatoHinto2
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
