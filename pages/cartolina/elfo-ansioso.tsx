import { Ansioso } from "../../components/Ansioso/Ansioso";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";

export default function CartolinaAnsioso() {
  return (
    <Cartolina
      message="Buone feste a tutti!"
      backgroundColor={Colors.mintGreen}
      Elfo={Ansioso}
    />
  );
}
