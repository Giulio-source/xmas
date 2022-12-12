import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
  wait,
} from "../../components/commons/utils";
import { Scazzato1 } from "../../components/ElfoHinto/Elfi/Scazzato1";
import { Scazzato2 } from "../../components/ElfoHinto/Elfi/Scazzato2";
import { ElfoHinto } from "../../components/ElfoHinto/ElfoHinto";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Neve } from "../../components/Neve/Neve";
import { Scazzato } from "../../components/Scazzato/Scazzato";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import {
  RisultatoPageWrapper,
  StyledCondividiCTA,
} from "../../page-styles/risultato-page.style";
import { showLoaderAnimation } from "../../components/Loader/Loader";

export async function getServerSideProps() {
  await wait(2);
  return {
    props: {},
  };
}

export default function ScazzatoPage() {
  const [names, setNames] = useState<{ nome: string; cognome: string }[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  useEffect(() => {
    const names = getRandomNames("scazzato");
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
          <StyledCondividiCTA>
            <Button
              label={copiedSuccess ? "Link copiato!" : "Condividi"}
              color="white"
              onClick={() =>
                handleOnCondividi("cartolina/elfo-triste", () =>
                  setCopiedSuccess(true)
                )
              }
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
                onClick={() =>
                  showLoaderAnimation(() => setShowAnteprima(false))
                }
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
            {names && (
              <AltriHinto>
                <ElfoHinto
                  Elfo={
                    <Scazzato1
                      imgUrl={`/xmas-facce/${names[0].nome}-${names[0].cognome}.png`}
                    />
                  }
                  nome={names[0].nome}
                  cognome={names[0].cognome.replace("-", " ")}
                />
                <ElfoHinto
                  Elfo={
                    <Scazzato2
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
