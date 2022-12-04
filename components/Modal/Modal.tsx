import {
  AnswerButton,
  PurpleButton,
  Row,
  Testo,
  Titolo,
} from "../commons/Theme";
import { IllustrazioneElfo } from "../Icons/ElfoModale";
import { HintoFullIcon } from "../Icons/HintoFullIcon";
import {
  QuestionIds,
  QuestionType,
  ResultsIds,
} from "../Villaggio/villaggioData";
import {
  StyledAnswerButtons,
  StyledModal,
  StyledModalBody,
} from "./Modal.style";

export const Modal = ({ id, question, onChange }: ModalProps) => {
  return (
    <StyledModal id={id} typeQuestion={!!question}>
      {question ? (
        <StyledModalBody gap={20}>
          <Titolo>{question.question}</Titolo>
          <StyledAnswerButtons>
            <AnswerButton onClick={() => onChange(question.answer1.next)}>
              {question.answer1.text}
            </AnswerButton>
            <AnswerButton onClick={() => onChange(question.answer2.next)}>
              {question.answer2.text}
            </AnswerButton>
          </StyledAnswerButtons>
        </StyledModalBody>
      ) : (
        <StyledModalBody>
          <Titolo>Scopri l'elfo che c'è in te!</Titolo>
          <Testo size={16}>
            Fai il test e misura il tuo spirito natalizio.
          </Testo>
          <PurpleButton onClick={() => onChange("q1")}>
            Inizia il test
          </PurpleButton>
          <IllustrazioneElfo />
          <Testo size={14}>Una sorpresa ti aspetta alla fine del test.</Testo>
          <Row>
            <Testo size={11} italic>
              Con amore da
            </Testo>
            <HintoFullIcon width={50} />
          </Row>
        </StyledModalBody>
      )}
    </StyledModal>
  );
};

type ModalProps = {
  id: string;
  question: QuestionType | undefined;
  onChange: (questionId: QuestionIds | ResultsIds) => void;
};
