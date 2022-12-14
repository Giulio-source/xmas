import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { HeadCartolina } from "../../components/Head/HeadCartolina";
import { Odioso } from "../../components/Odioso/Odioso";

export default function CartolinaOdioso() {
  return (
    <>
      <HeadCartolina />
      <Cartolina
        message="E anche sto Natale..."
        backgroundColor={Colors.darkBlue}
        Elfo={Odioso}
      />
    </>
  );
}
