import Link from "next/link";
import { useWindowMedia } from "../../hooks/useWindowMedia";
import { Button } from "../Button/Button";
import { Divider } from "../commons/Divider";
import { Titolo } from "../commons/Theme";
import { Credits } from "../Credits/Credits";
import { HintoIcon } from "../Icons/HintoIcon";
import { Neve } from "../Neve/Neve";
import {
  StyledBackground,
  StyledSnowHillCartolina
} from "../Sezioni/Hero/Hero.style";
import { Trees } from "../Trees/Trees";
import {
  StyledCartolina,
  StyledCartolinaBackground,
  StyledCartolinaContent,
  StyledCartolinaDesktop,
  StyledCartolinaFooter,
  StyledElfoWrapper,
  StyledGoBackButton,
  StyledMessage
} from "./Cartolina.style";

export const Cartolina = ({
  message,
  backgroundColor,
  Elfo,
  CTA,
  goBack,
  isPageCartolina = false,
  interactionMessage,
}: CartolinaProps) => {
  const isMobile = useWindowMedia();

  return (
    <StyledCartolina>
      <HintoIcon theme="light" />
      <Neve />
      <Trees />
      <StyledElfoWrapper>
        <Elfo />
        <StyledBackground color={backgroundColor} />
      </StyledElfoWrapper>
      <StyledCartolinaContent>
        <Titolo>{message}</Titolo>
        {interactionMessage && (
          <StyledMessage>{interactionMessage}</StyledMessage>
        )}
        {CTA ? (
          CTA
        ) : (
          <Link href="/">
            <Button
              label="Scopri anche tu l'elfo che c'è in te"
              type="outline"
            />
          </Link>
        )}
      </StyledCartolinaContent>
      {!isMobile && (
        <>
          {goBack && (
            <StyledGoBackButton>
              <Button
                label="Torna al risultato del test"
                type="ghost"
                onClick={goBack}
              />
            </StyledGoBackButton>
          )}
          <StyledCartolinaDesktop>
            <StyledCartolinaBackground
              color={backgroundColor}
              fillPage={isPageCartolina}
            />
            <StyledSnowHillCartolina />
          </StyledCartolinaDesktop>
        </>
      )}
      <StyledCartolinaFooter>
        <Divider noMargin />
        <Credits />
      </StyledCartolinaFooter>
    </StyledCartolina>
  );
};

type CartolinaProps = {
  message: string;
  backgroundColor: string;
  Elfo: React.FC;
  CTA?: React.ReactNode;
  goBack?: () => void;
  isPageCartolina?: boolean;
  interactionMessage?: string;
};
