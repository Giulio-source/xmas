import { Ansioso } from "../Ansioso/Ansioso";
import {
  StyledCartolinaContent,
  StyledCartolinaPage,
} from "../../page-styles/cartolina-page.style";
import { HintoIcon } from "../Icons/HintoIcon";
import { Trees } from "../Trees/Trees";
import { StyledBackground } from "../Sezioni/Hero/Hero.style";
import { Colors, Titolo } from "../commons/Theme";
import { Button } from "../Button/Button";
import { Neve } from "../Neve/Neve";
import { Credits } from "../Credits/Credits";
import Link from "next/link";

export const Cartolina = ({
  message,
  backgroundColor,
  Elfo,
  CTA,
}: CartolinaProps) => {
  return (
    <StyledCartolinaPage>
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
    </StyledCartolinaPage>
  );
};

type CartolinaProps = {
  message: string;
  backgroundColor: string;
  Elfo: React.FC;
  CTA?: React.ReactNode;
};
