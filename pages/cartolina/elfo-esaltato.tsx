import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { Esaltato } from "../../components/Esaltato/Esaltato";
import { Lucine } from "../../components/Lucine/Lucine";

export default function CartolinaEsaltato() {
  return (
    <>
      <Lucine />
      <Cartolina
        message="Ti auguro un Natale splendente e un meraviglioso anno nuovo ricco di gioia!"
        backgroundColor={Colors.darkGreen}
        Elfo={Esaltato}
      />
    </>
  );
}
