import styled from "styled-components";
import { Lora, Noto_Sans } from "@next/font/google";

export const Colors = {
  darkGreen: "#024c45",
  deepBlue: "#0c45ca",
  mintGreen: "#43EFBB",
  darkBlue: "#002764",
  violet: "#4E50FF",
  red: "#FF0055",
  darkRed: "#DB1D41",
  pink: "#F8CEDE",
  darkPink: "#DE8BB5",
  lightMint: "#BEFCDF",
  lightGrey: "#C5D2D6",
};

// UI

export const StyledTitolo = styled.div<any>`
  font-weight: 700;
  font-size: ${({ size }) => size}px;
  line-height: 38px;
  text-align: center;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};

  @media screen and (min-width: 1024px) {
    color: ${({ desktopColor }) => desktopColor};
  }
`;

export const Titolo = ({
  children,
  color = "black",
  desktopColor = "black",
  size = 30,
  align = "center",
}: TitoloProps) => (
  <StyledTitolo
    className={loraFont.className}
    color={color}
    desktopColor={desktopColor}
    size={size}
    align={align}
  >
    {children}
  </StyledTitolo>
);

export const Testo = styled.div<{
  size?: number;
  italic?: boolean;
  align?: "right" | "left" | "center";
}>`
  font-size: ${({ size }) => (size ? size : "16")}px;
  line-height: 24px;
  text-align: ${({ align }) => (align ? align : "center")};
  letter-spacing: 0.02em;
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
`;

export const PurpleButton = styled.div`
  cursor: pointer;
  background: ${Colors.violet};
  padding: 16px 40px;
  width: fit-content;
  border-radius: 2px;
  color: white;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

export const AnswerButton = styled.div`
  cursor: pointer;
  border: 2px solid ${Colors.violet};
  padding: 16px 40px;
  border-radius: 2px;
  color: black;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;

  transition: all 0.3s;

  &:hover {
    background: rgba(108, 247, 198, 0.54);
  }
`;

export const Row = styled.div<{
  justify?: "center" | "flex-start" | "flex-end";
  gap?: number;
  margin?: string;
}>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : 4)}px;
  margin: ${({ margin }) => margin};
`;

// FONTS

export const loraFont = Lora({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["700"],
});

export const notoFont = Noto_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

type TitoloProps = {
  children: React.ReactNode;
  color?: string;
  desktopColor?: string;
  align?: "right" | "left" | "center";
  size?: number;
};
