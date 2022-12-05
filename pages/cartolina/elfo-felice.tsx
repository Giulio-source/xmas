import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { Felice } from "../../components/Felice/Felice";

export default function CartolinaFelice() {
  return (
    <Cartolina
      message="Ti auguro gioia, serenità e uno splendido Natale in compagnia!"
      backgroundColor={Colors.deepBlue}
      Elfo={Felice}
    />
  );
}
