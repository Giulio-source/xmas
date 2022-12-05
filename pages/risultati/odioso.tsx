import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors, Container } from "../../components/commons/Theme";
import {
  getRandomNames,
  handleOnCondividi,
} from "../../components/commons/utils";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Odioso } from "../../components/Odioso/Odioso";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import {
  RisultatoPageWrapper,
  StyledCondividiCTA,
} from "../../page-styles/risultato-page.style";

export default function OdiosoPage() {
  const [names, setNames] = useState<string[]>();
  const [showAnteprima, setShowAnteprima] = useState(false);

  useEffect(() => {
    const names = getRandomNames("odioso");
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
              onClick={() => handleOnCondividi("cartolina/elfo-odioso")}
            />
          </StyledCondividiCTA>
          <Cartolina
            message="E anche sto Natale..."
            backgroundColor={Colors.darkBlue}
            Elfo={Odioso}
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
              </>
            }
            Elfo={Odioso}
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
