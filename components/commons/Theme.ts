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
};

// UI

export const Titolo = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
`;

export const Testo = styled.div<any>`
  font-size: ${({ size }) => (size ? size : "16")}px;
  line-height: 24px;
  text-align: center;
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

  transition: all 0.3s;

  &:hover {
    background: rgba(108, 247, 198, 0.54);
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
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
  weight: ["400"],
});
