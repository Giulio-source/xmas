export const villaggioData = {
  q1: {
    name: "q1",
    question: "Natale sta arrivando: come siamo messi?",
    answer1: {
      text: "Siamo già a dicembre?",
      next: "q2",
    },
    answer2: {
      text: "Non vedo l'ora!",
      next: "q3",
    },
  },
  q2: {
    name: "q2",
    question: "Quel profumo di panettone nell'aria...",
    answer1: {
      text: "Una delle poche gioie del Natale",
      next: "q4",
    },
    answer2: {
      text: "Buono, aiuta a creare l'atmosfera",
      next: "q5",
    },
  },
  q3: {
    name: "q3",
    question: "Mariah Carey è stata finalmente scongelata",
    answer1: {
      text: "Ho già la playlist pronta",
      next: "q6",
    },
    answer2: {
      text: "Che bello! E non dimentichiamo anche Michael Bublé e tutti gli altri!",
      next: "q7",
    },
  },
  q4: {
    name: "q4",
    question: 'È il periodo di "anche a te e famiglia"',
    answer1: {
      text: "Non se ne sentiva la mancanza",
      next: "q8",
    },
    answer2: {
      text: "Che ansia!",
      next: "q9",
    },
  },
  q5: {
    name: "q5",
    question: "Natale è occasione per rivedere vecchie facce",
    answer1: {
      text: "Ma è anche tanto altro",
      next: "q10",
    },
    answer2: {
      text: "È una bella cosa, no?",
      next: "q11",
    },
  },
  q6: {
    name: "q6",
    question: "Come ti organizzi con i regali?",
    answer1: {
      text: "Oddio, i regali!",
      next: "q11",
    },
    answer2: {
      text: "Per tempo e con liste ordinate di idee",
      next: "q12",
    },
  },
  q7: {
    name: "q7",
    question: "Quanto tempo prima pensi ai regali?",
    answer1: {
      text: "Oddio, i regali!",
      next: "q12",
    },
    answer2: {
      text: "Pensati, fatti e già incartati con anticipo",
      next: "q13",
    },
  },
  q8: {
    name: "q8",
    question: "Mariah Carey è stata finalmente scongelata",
    answer1: {
      text: "Era meglio se la lasciavano congelata",
      next: "q14",
    },
    answer2: {
      text: "Guarda, non vedevo proprio l'ora",
      next: "q15",
    },
  },
  q9: {
    name: "q9",
    question: "Coi regali come siamo messi?",
    answer1: {
      text: "Il riciclo va di moda",
      next: "q15",
    },
    answer2: {
      text: "Non farmici pensare",
      next: "q16",
    },
  },
  q10: {
    name: "q10",
    question: "L'albero si addobba",
    answer1: {
      text: "Macché, ho ancora l'ombrellone nel cofano",
      next: "q16",
    },
    answer2: {
      text: "Con la dovuta sobrietà",
      next: "q17",
    },
  },
  q11: {
    name: "q11",
    question: "L'albero si addobba",
    answer1: {
      text: "Solo davanti per praticità",
      next: "q17",
    },
    answer2: {
      text: "Pieno zeppo di lucine, pupazzetti e decorazioni",
      next: "q18",
    },
  },
  q12: {
    name: "q12",
    question: "Come siamo messi con gli addobbi?",
    answer1: {
      text: "Tutto pronto ma con sobrietà",
      next: "q17",
    },
    answer2: {
      text: "Ho pensato a tante cose proprio carine",
      next: "q18",
    },
  },
  q13: {
    name: "q13",
    question: "Come siamo messi con gli addobbi?",
    answer1: {
      text: "Mi sono impegnato per stupire tutti",
      next: "q18",
    },
    answer2: {
      text: "Luci visibili dallo spazio e festoni delle grandi occasioni",
      next: "q19",
    },
  },
  q14: {
    name: "q14",
    question: "Con chi passerai le feste?",
    answer1: {
      text: "Non intendo vedere proprio nessuno",
      next: "r1",
    },
    answer2: {
      text: "Purtroppo con tutta la combriccola di parenti",
      next: "r2",
    },
  },
  q15: {
    name: "q15",
    question: "Di solito fai il countdown a Natale?",
    answer1: {
      text: "Si, ma perché non vedo l'ora finisca tutto",
      next: "r1",
    },
    answer2: {
      text: "No, mi mette un po' angoscia",
      next: "r3",
    },
  },
  q16: {
    name: "q16",
    question: "Addobbi, regali, feste e abbuffate",
    answer1: {
      text: "Meno male che prima o poi finisce tutto questo",
      next: "r2",
    },
    answer2: {
      text: "È davvero troppo per me",
      next: "r3",
    },
  },
  q17: {
    name: "q17",
    question: "Di solito fai il countdown a Natale?",
    answer1: {
      text: "Quando arriva arriva, no stress!",
      next: "r4",
    },
    answer2: {
      text: "Sì, grazie al calendario dell'avvento",
      next: "r5",
    },
  },
  q18: {
    name: "q18",
    question: "Di solito fai il countdown a Natale?",
    answer1: {
      text: "C'è sempre qualcuno che lo fa per me",
      next: "r5",
    },
    answer2: {
      text: 'Sto già pregustando "Una poltrona per due"',
      next: "r6",
    },
  },
  q19: {
    name: "q19",
    question: "Di solito fai il countdown a Natale?",
    answer1: {
      text: "Certo, grazie al calendario dell'avvento",
      next: "r5",
    },
    answer2: {
      text: "Ovvio, so esattamente quando mancano 100 giorni a Natale",
      next: "r6",
    },
  },
};

export const resultsHandler = {
  r1: "odioso",
  r2: "triste",
  r3: "ansioso",
  r4: "indifferente",
  r5: "felice",
  r6: "esaltato",
};

export type QuestionType = {
  name: string;
  question: string;
  answer1: {
    text: string;
    next: QuestionIds | ResultsIds;
  };
  answer2: {
    text: string;
    next: QuestionIds | ResultsIds;
  };
};

export type QuestionIds = keyof typeof villaggioData 
export type ResultsIds = keyof typeof resultsHandler
