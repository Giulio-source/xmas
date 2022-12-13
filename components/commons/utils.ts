import { BASE_URL } from "./constants";

export const risultatiTestHandler = {
  ansioso: ["fabiano-roberto", "tiziano-tremolada", "matteo-dario"],
  scazzato: ["manuel-bosi", "antonio-bitonti"],
  felice: [
    "gabriella-gaetano",
    "marco-legramandi",
    "giulia-sciannamea",
    "federica-del-pincio",
    "alessandra-sarangelo",
    "alessandra-castiglioni",
    "serena-tassan",
    "fabrizio-costantini",
    "giulia-nappi",
    "william-quattromani",
    "cristina-turco",
    "michele-menichelli",
    "irene-fano",
    "matteo-bartolacci",
    "jessica-marangoni",
    "noemi-sgavetti",
    "michele-menichelli",
    "gabriella-gaetano",
  ],
  odioso: [
    "andrea-raggi",
    "alessio-di-matteo",
    "luigi-abbamonte",
    "paolo-ferrante",
  ],
  indifferente: [
    "davide-giacchino",
    "valentina-ferrario",
    "gabriele-di-leo",
    "marian-benchea",
    "simone-marchese",
    "mattia-maurizio",
    "pardeep-singh",
    "domenico-lupo",
    "alessio-maisano",
    "anna-sgarbi",
    "giovanni-noce",
    "andrea-labarile",
    "giulio-poggia",
    "eros-campitelli",
    "marco-faccio",
    "lovanee-ramen",
    "mariasilvia-barbero",
    "michele-forti",
    "matteo-dario",
    "fabiana-pittalis",
    "valentina-guerrera",
    "simone-tallarita",
    "matteo-spini",
    "federico-stefani",
    "davide-pastorello",
    "roberta-antonini",
  ],
  esaltato: [
    "marzia-turigliatto",
    "ester-barbato",
    "barbara-giuliani",
    "alessandra-petromilli",
  ],
};

export function getRandomNames(categoria: keyof typeof risultatiTestHandler) {
  const lengthResult = risultatiTestHandler[categoria].length;
  const randomNumberOne = Math.floor(Math.random() * lengthResult);
  let randomNumberTwo = Math.floor(Math.random() * lengthResult);

  while (randomNumberOne === randomNumberTwo) {
    randomNumberTwo = Math.floor(Math.random() * lengthResult);
  }

  return [
    risultatiTestHandler[categoria][randomNumberOne],
    risultatiTestHandler[categoria][randomNumberTwo],
  ];
}

export function handleOnCondividi(pageRoute: string, onCopied?: () => void) {
  if (navigator.share) {
    navigator
      .share({
        title: "Xmas Hinto",
        url: BASE_URL + pageRoute,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch((err) => {
        console.log("Error while using Web share API:");
        console.log(err);
      });
  } else {
    navigator.clipboard
      .writeText(BASE_URL + pageRoute)
      .then(() => {
        console.log("copied to clipboard");
        onCopied && onCopied();
      })
      .catch((err) => {
        console.log("not copied to clipboard", err);
      });
  }
}

export function isValidEmail(value: string) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(value);
}

export function wait(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
