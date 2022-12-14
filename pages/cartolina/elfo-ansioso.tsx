import { Ansioso } from "../../components/Ansioso/Ansioso";
import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { HeadCartolina } from "../../components/Head/HeadCartolina";

export default function CartolinaAnsioso() {
  return (
    <>
      <HeadCartolina />
      <Cartolina
        message="Buone feste a tutti!"
        backgroundColor={Colors.mintGreen}
        Elfo={Ansioso}
      />
    </>
  );
}
