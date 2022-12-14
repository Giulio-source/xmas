import { Row, Testo } from "../commons/Theme";
import { HintoFullIcon } from "../Icons/HintoFullIcon";
import { StyledCredits } from "./Credits.style";

export const Credits = ({ margin = "" }: { margin?: string }) => {
  return (
    <StyledCredits>
      <a href="https://www.hinto.com/" target="_blank" rel="noreferrer">
        <Row margin={margin}>
          <Testo size={11} italic>
            Con amore da
          </Testo>
          <HintoFullIcon width={50} />
        </Row>
      </a>
    </StyledCredits>
  );
};
