import { Button } from "../../components/Button/Button";
import { Divider } from "../../components/commons/Divider";
import { Colors, Row, Testo, Titolo } from "../../components/commons/Theme";
import { Credits } from "../../components/Credits/Credits";
import { Esaltato } from "../../components/Esaltato/Esaltato";
import { ChevronDownIcon } from "../../components/Icons/ChevronDownIcon";
import { HintoIcon } from "../../components/Icons/HintoIcon";
import { SezioneRisultati } from "../../components/Risultati/Risultati";
import { Sciaugurati } from "../../components/Sciaugurati/Sciaugurati";
import {
  StyledSection,
  StyledSnowHill,
  StyledBackground,
  Container,
} from "../../page-styles/default.style";
import {
  EsaltatoPageWrapper,
  HeroWrapper,
  StyledChevronDown,
  StyledContent,
  StyledContentTitolo,
  StyledCopyCta,
  StyledCtaWrapper,
} from "../../page-styles/esaltato-page.style";

export default function EsaltatoPage() {
  return (
    <EsaltatoPageWrapper>
      <HintoIcon theme="light" />
      <StyledSection>
        <HeroWrapper>
          <Esaltato />
          <StyledContent>
            <StyledContentTitolo>
              Saresti un ottimo aiutante di Babbo Natale!
            </StyledContentTitolo>
            <StyledChevronDown>
              <ChevronDownIcon />
            </StyledChevronDown>
            <StyledCopyCta>
              <Testo size={14} align="left">
                Natale per te significa festa, compagnia e tradizione.
                <br />
                L'idea di condividere momenti indimenticabili con gli affetti
                più cari ti riempie il cuore e pensare ai regali è sempre una
                gioia.
                <br />
                L'albero addobbato illumina le tue giornate, donando a questo
                periodo un senso di pace in grado di rigenerarti per l'anno
                nuovo.
              </Testo>
              <StyledCtaWrapper>
                <Button
                  label="Condividi auguri personalizzati"
                  type="outline"
                />
                <Button label="Scarta il tuo regalo" fill />
              </StyledCtaWrapper>
            </StyledCopyCta>
          </StyledContent>
        </HeroWrapper>
        <StyledBackground color={Colors.darkGreen} />
        <StyledSnowHill />
      </StyledSection>
      <Container>
        <Divider />
        <SezioneRisultati />
        <Divider />
        <Sciaugurati />
        <Credits margin="32px 0 50px" />
      </Container>
    </EsaltatoPageWrapper>
  );
}
