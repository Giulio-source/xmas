import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { HeadCartolina } from "../../components/Head/HeadCartolina";
import { Scazzato } from "../../components/Scazzato/Scazzato";

export default function CartolinaScazzato() {
  return (
    <>
      <HeadCartolina />
      <Cartolina
        message="Anche a te e famiglia!"
        interactionMessage="Tocca l'elfo per provare a infastidirlo un po'!"
        backgroundColor={Colors.violet}
        Elfo={Scazzato}
        isPageCartolina
      />
    </>
  );
}
