import styled from "styled-components";
import { Colors } from "./Theme";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
  font-size: 14px;

  input,
  label {
    cursor: pointer;
  }

  a {
    text-decoration: underline;
    color: ${Colors.violet};
  }
`;

export const PrivacyCheckbox = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (e: any) => void;
}) => {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox-privacy"
        checked={value}
        onChange={onChange}
      />
      <label htmlFor="checkbox-privacy">
        Ho letto e accetto l'
        <a
          href="https://www.hinto.com/it/privacy"
          target="_blank"
          rel="noreferrer"
        >
          informativa privacy
        </a>
      </label>
    </StyledCheckbox>
  );
};
