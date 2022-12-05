import Link from "next/link";
import { StyledCartolinaContent } from "../../page-styles/cartolina-page.style";
import { Button } from "../Button/Button";
import { Titolo } from "../commons/Theme";
import { Credits } from "../Credits/Credits";
import { HintoIcon } from "../Icons/HintoIcon";
import { Neve } from "../Neve/Neve";
import { StyledBackground } from "../Sezioni/Hero/Hero.style";
import { Trees } from "../Trees/Trees";
import { StyledCartolina } from "./Cartolina.style";

export const Cartolina = ({
  message,
  backgroundColor,
  Elfo,
  CTA,
}: CartolinaProps) => {
  return (
    <StyledCartolina>
      <HintoIcon theme="light" />
      <Neve />
      <Trees />
      <div style={{ position: "relative" }}>
        <Elfo />
        <StyledBackground color={backgroundColor} />
      </div>
      <StyledCartolinaContent>
        <Titolo>{message}</Titolo>
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
        <Credits />
      </StyledCartolinaContent>
    </StyledCartolina>
  );
};

type CartolinaProps = {
  message: string;
  backgroundColor: string;
  Elfo: React.FC;
  CTA?: React.ReactNode;
};
