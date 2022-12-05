import { useEffect, useState } from "react";
import { Colors, Container } from "../../components/commons/Theme";
import { getRandomNames } from "../../components/commons/utils";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { Odioso } from "../../components/Odioso/Odioso";
import { AltriHinto } from "../../components/Sezioni/AltriHinto/AltriHinto";
import { Hero } from "../../components/Sezioni/Hero/Hero";
import { Sciaugurati } from "../../components/Sezioni/Sciaugurati/Sciaugurati";
import { Trees } from "../../components/Trees/Trees";
import { RisultatoPageWrapper } from "../../page-styles/risultato-page.style";

export default function OdiosoPage() {
  const [names, setNames] = useState<string[]>();

  useEffect(() => {
    const names = getRandomNames("odioso");
    setNames(names);
  }, []);

  return (
    <RisultatoPageWrapper>
      <HintoIcon theme="light" />
      <Trees />
      <Hero
        title="Qui siamo ai livelli del Grinch!"
        background={Colors.darkBlue}
        testo={
          <>
            Tutto questo clima di festa, lucine ed entusiasmo ingiustificato ti
            causa una certa allergia.
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
      />
      <Container>
        <AltriHinto persone={names} />
        <Sciaugurati />
      </Container>
    </RisultatoPageWrapper>
  );
}
