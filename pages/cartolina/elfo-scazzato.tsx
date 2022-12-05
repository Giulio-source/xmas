import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { Scazzato } from "../../components/Scazzato/Scazzato";

export default function CartolinaScazzato() {
  return (
    <Cartolina
      message="Anche a te e famiglia!"
      backgroundColor={Colors.violet}
      Elfo={Scazzato}
    />
  );
}
