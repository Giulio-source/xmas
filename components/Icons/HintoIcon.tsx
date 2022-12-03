import styled from "styled-components";

const StyledHintoIcon = styled.div`
  position: absolute;
  z-index: 1;
  top: 24px;
  right: 16px;

  @media screen and (min-width: 1024px) {
    top: 30px;
    right: 30px;
  }
`;

export const HintoIcon = ({ theme = "dark" }: { theme?: "dark" | "light" }) => {
  return (
    <a href="https://www.hinto.com/">
      <StyledHintoIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          fill="none"
          viewBox="0 0 35 32"
        >
          <path
            fill={theme === "dark" ? "#131D20" : "#fff"}
            d="M10.57 0H5.28v13.1h5.29V0ZM10.57 18.12H5.28v13.84h5.29V18.12ZM24.35 13.1H10.57v5.02h13.78v13.84h5.29V0h-5.29v13.1ZM5.28 13.1H0v5.02h5.28V13.1ZM33 .4c.55 0 1.02.2 1.41.6.4.38.59.85.59 1.4 0 .56-.2 1.03-.59 1.42-.39.4-.86.59-1.41.59-.55 0-1.02-.2-1.41-.59-.4-.4-.59-.86-.59-1.41 0-.56.2-1.03.59-1.42.39-.4.86-.58 1.41-.58Zm1.28 3.3c.36-.35.54-.79.54-1.3 0-.5-.18-.93-.54-1.3A1.73 1.73 0 0 0 33 .58c-.5 0-.93.18-1.3.54-.35.36-.52.79-.52 1.3 0 .5.17.94.53 1.3.36.35.79.53 1.29.53s.93-.18 1.28-.54Zm-.81-1.05.42.78h-.46l-.36-.7h-.3v.7h-.43V1.38h.7c.47 0 .77.3.77.67 0 .28-.11.48-.35.6Zm-.7-.87v.57h.26c.22 0 .36-.11.36-.28 0-.2-.12-.29-.36-.29h-.26Z"
          />
        </svg>
      </StyledHintoIcon>
    </a>
  );
};
