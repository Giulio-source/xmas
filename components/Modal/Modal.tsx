import { StyledModal } from "./Modal.style";

export const Modal = ({ open = false, onClick, ...rest }: any) => {
  return (
    <StyledModal open={open} {...rest}>
      <button onClick={onClick}>Comincia il test</button>
    </StyledModal>
  );
};
