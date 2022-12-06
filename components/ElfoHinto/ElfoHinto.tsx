import { StyledElfoHinto, StyledNome } from "./ElfoHinto.style";
export const ElfoHinto = ({
  Elfo,
  nome,
  cognome,
}: {
  Elfo: React.ReactNode;
  nome?: string;
  cognome?: string;
}) => {
  return (
    <StyledElfoHinto>
      {Elfo}
      {nome && cognome && (
        <StyledNome>
          <p>{nome}</p>
          <p>{cognome}</p>
        </StyledNome>
      )}
    </StyledElfoHinto>
  );
};
