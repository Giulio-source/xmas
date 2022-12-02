import { StyledButton, StyledOutlineButton } from "./Button.style";

export const Button = ({
  label,
  type = "full",
  fill = false,
}: {
  label: string;
  type?: "outline" | "full";
  fill?: boolean;
}) => {
  if (type === "outline") {
    return <StyledOutlineButton fill={fill}>{label}</StyledOutlineButton>;
  }
  return <StyledButton fill={fill}>{label}</StyledButton>;
};
