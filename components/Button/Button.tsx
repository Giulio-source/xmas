import {
  StyledButton,
  StyledGhostButton,
  StyledOutlineButton,
} from "./Button.style";

export const Button = ({
  label,
  type = "full",
  fill = false,
  color = "purple",
  disabled = false,
  onClick,
  style,
}: {
  label: string | React.ReactNode;
  type?: "outline" | "full" | "ghost";
  color?: "purple" | "grey";
  fill?: boolean;
  onClick?: () => void;
  style?: any;
  disabled?: boolean;
}) => {
  if (type === "ghost") {
    return (  
      <StyledGhostButton onClick={onClick} style={style}>
        {label}
      </StyledGhostButton>
    );
  }
  if (type === "outline") {
    return (
      <StyledOutlineButton
        fill={fill}
        color={color}
        onClick={onClick}
        style={style}
      >
        {label}
      </StyledOutlineButton>
    );
  }
  return (
    <StyledButton
      fill={fill}
      color={color}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};
