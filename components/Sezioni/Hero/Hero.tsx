import { useState } from "react";
import { Button } from "../../Button/Button";
import { Relative, Testo } from "../../commons/Theme";
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
import { showLoaderAnimation } from "../../Loader/Loader";
import { useWindowMedia } from "../../../hooks/useWindowMedia";

export const Hero = ({
  title,
  background,
  testo,
  Elfo,
  onShowAnteprima,
}: HeroProps) => {
  const [open, setOpen] = useState(false);
  const isMobile = useWindowMedia();

  return (
    <StyledSection>
      <HeroWrapper>
        <Relative>
          <Elfo />
          {isMobile && (
            <StyledChevronDown>
              <ChevronDownIcon />
            </StyledChevronDown>
          )}
        </Relative>
        <StyledContent>
          <StyledContentTitolo>{title}</StyledContentTitolo>
          <StyledCopyCta>
            <Testo size={14} align="left">
              {testo}
            </Testo>
            <StyledCtaWrapper>
              <Button
                label="Condividi i tuoi auguri"
                type="outline"
                onClick={() => {
                  showLoaderAnimation(onShowAnteprima);
                }}
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
      <StyledSnowHill insideHero />
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
