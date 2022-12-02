import { Row, Testo } from "../commons/Theme";
import { HintoFullIcon } from "../Icons/HintoFullIcon";

export const Credits = ({ margin = '' }: { margin?: string }) => {
  return (
    <Row margin={margin}>
      <Testo size={11} italic>
        Con amore da
      </Testo>
      <HintoFullIcon width={50} />
    </Row>
  );
};
