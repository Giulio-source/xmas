import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { Odioso } from "../../components/Odioso/Odioso";

export default function CartolinaOdioso() {
  return (
    <Cartolina
      message="E anche sto Natale..."
      backgroundColor={Colors.darkBlue}
      Elfo={Odioso}
    />
  );
}
