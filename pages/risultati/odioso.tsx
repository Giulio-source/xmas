import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
  wait,
} from "../../components/commons/utils";
import { OdiosoHinto } from "../../components/ElfoHinto/Elfi/Odioso";
import { ElfoHinto } from "../../components/ElfoHinto/ElfoHinto";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Neve } from "../../components/Neve/Neve";
import { Odioso } from "../../components/Odioso/Odioso";
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

export async function getServerSideProps() {
  await wait(2);
  return {
    props: {},
  };
}

export default function OdiosoPage() {
  const [names, setNames] = useState<{ nome: string; cognome: string }[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const isMobile = useWindowMedia();

  useEffect(() => {
    const names = getRandomNames("odioso");
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
                  handleOnCondividi("cartolina/elfo-odioso", () =>
                    setCopiedSuccess(true)
                  )
                }
              />
            </StyledCondividiCTA>
          )}
          <Cartolina
            message="E anche sto Natale..."
            backgroundColor={Colors.darkBlue}
            Elfo={Odioso}
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
                    handleOnCondividi("cartolina/elfo-odioso", () =>
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
            title="Qui siamo ai livelli del Grinch!"
            background={Colors.darkBlue}
            testo={
              <>
                Tutto questo clima di festa, lucine ed entusiasmo ingiustificato
                ti causa una certa allergia.
                <br />
                C'è chi fa il conto alla rovescia per l'avvento del Natale, tu
                invece conti i giorni alla fine di questo strazio.
                <br />
                Se cerchi una gioia, potresti trovarla in un po' di riposo o in
                qualche abbuffata, altrimenti difficile trovare troppi aspetti
                positivi per questo periodo dell'anno.
                <br />
                <strong>Se ami il rischio, tocca l'elfo e vediamo che succede!</strong>
              </>
            }
            Elfo={Odioso}
            onShowAnteprima={() => setShowAnteprima(true)}
          />
          <Container>
            {names && (
              <AltriHinto>
                <ElfoHinto
                  Elfo={
                    <OdiosoHinto
                      imgUrl={`/xmas-facce/${names[0].nome}-${names[0].cognome}.png`}
                    />
                  }
                  nome={names[0].nome}
                  cognome={names[0].cognome.replace("-", " ")}
                />
                <ElfoHinto
                  Elfo={
                    <OdiosoHinto
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
