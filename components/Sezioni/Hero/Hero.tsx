import { useState } from "react";
import { Button } from "../../Button/Button";
import { loraFont, Testo } from "../../commons/Theme";
import { Esaltato } from "../../Esaltato/Esaltato";
import { ChevronDownIcon } from "../../Icons/ChevronDownIcon";
import { RisultatoModal } from "../../Modals/RisultatoModal/RisultatoModal";
import {
  HeroWrapper,
  StyledBackground,
  StyledChevronDown,
  StyledContent,
  StyledContentTitolo,
  StyledCopyCta,
  StyledCtaWrapper,
  StyledSection,
  StyledSnowHill,
} from "./Hero.style";

export const Hero = ({
  title,
  background,
  testo,
  Elfo,
  onShowAnteprima,
}: HeroProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledSection>
      <HeroWrapper>
        <Elfo />
        <StyledContent>
          <StyledContentTitolo className={loraFont.className}>
            {title}
          </StyledContentTitolo>
          <StyledChevronDown>
            <ChevronDownIcon />
          </StyledChevronDown>
          <StyledCopyCta>
            <Testo size={14} align="left">
              {testo}
            </Testo>
            <StyledCtaWrapper>
              <Button
                label="Condividi auguri personalizzati"
                type="outline"
                onClick={onShowAnteprima}
              />
              <Button
                label="Scarta il tuo regalo"
                fill
                onClick={() => {
                  setOpen(true);
                }}
              />
            </StyledCtaWrapper>
          </StyledCopyCta>
        </StyledContent>
      </HeroWrapper>
      <StyledBackground color={background} />
      <StyledSnowHill />
      <RisultatoModal open={open} onClose={() => setOpen(false)} />
    </StyledSection>
  );
};

type HeroProps = {
  title: string;
  background: string;
  testo: React.ReactNode;
  Elfo: React.FC;
  onShowAnteprima: () => void;
};
