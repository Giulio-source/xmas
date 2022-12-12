import { Row, Testo } from "../commons/Theme";
import { HintoFullIcon } from "../Icons/HintoFullIcon";
import { StyledCredits } from "./Credits.style";

export const Credits = ({ margin = "" }: { margin?: string }) => {
  return (
    <a href="https://www.hinto.com/" target="_blank" rel="noreferrer">
      <StyledCredits>
        <Row margin={margin}>
          <Testo size={11} italic>
            Con amore da
          </Testo>
          <HintoFullIcon width={50} />
        </Row>
      </StyledCredits>
    </a>
  );
};
