import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { Indifferente } from "../../components/Indifferente/Indifferente";

export default function CartolinaIndifferente() {
  return (
    <Cartolina
      message="Buon Natale e felice anno nuovo!"
      backgroundColor={Colors.mintGreen}
      Elfo={Indifferente}
    />
  );
}
