import { Cartolina } from "../../components/Cartolina/Cartolina";
import { Colors } from "../../components/commons/Theme";
import { Felice } from "../../components/Felice/Felice";
import { HeadCartolina } from "../../components/Head/HeadCartolina";

export default function CartolinaFelice() {
  return (
    <>
      <HeadCartolina />
      <Cartolina
        message="Ti auguro gioia, serenità e uno splendido Natale in compagnia!"
        interactionMessage="Accarezza l'elfo per sprigionare la sua felicità!"
        backgroundColor={Colors.deepBlue}
        Elfo={Felice}
        isPageCartolina
      />
    </>
  );
}
