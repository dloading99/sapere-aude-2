export const attemptsOptions = [
  'Ripetizioni generiche',
  'Studiare più ore',
  'Schemi fai-da-te',
  'Nulla, improvvisiamo'
];

export const attemptsMap = {
  'Ripetizioni generiche': 'R',
  'Studiare più ore': 'S',
  'Schemi fai-da-te': 'H',
  'Nulla, improvvisiamo': 'N'
};

export const attemptsTexts = {
  R: {
    parent:
      'Avete già provato le ripetizioni “classiche”: qualcuno che spiega la lezione, lui o lei che ascolta e ripete. Di solito funziona un po’ all’inizio, ma il problema è che, appena finisce il percorso, il metodo di studio resta identico a prima.',
    student:
      'Hai già provato le ripetizioni “classiche”: qualcuno spiega, tu ascolti e ripeti. Funziona finché qualcuno ti tiene per mano, ma poi, quando torni da solo sui libri, il metodo resta quello di sempre.'
  },
  S: {
    parent:
      'Avete pensato che la soluzione fosse “studiare di più”: più tempo alla scrivania, più pagine, più ripetizioni. Ma se il metodo non cambia, aumentare le ore spesso aumenta solo stanchezza e frustrazione.',
    student:
      'Hai provato a risolverla “mettendoci più ore”: resti di più sui libri, ripeti di più, ti forzi di più. Se però il modo di studiare non cambia, spesso aumenta solo la fatica, non la resa.'
  },
  H: {
    parent:
      'Avete provato con schemi, evidenziatori e appunti fai-da-te. Utile, ma se non c’è una logica dietro, rischiano di diventare solo “disegni colorati” che non chiariscono davvero le idee.',
    student:
      'Hai provato con schemi, evidenziatori, appunti e colori. Utile, ma se non c’è una struttura chiara dietro, rischiano di diventare solo pagine piene di segni che non ti guidano davvero.'
  },
  RS: {
    parent:
      'Avete unito ripetizioni e più ore di studio: più spiegazioni, più tempo, più impegno. Il problema è che, se il modo di pensare i contenuti non cambia, si crea solo un aumento di carico, non di controllo.',
    student:
      'Hai sommato ripetizioni e più ore: qualcuno che spiega, tu che ci stai sopra più tempo. Se però il modo in cui organizzi e capisci non cambia, la sensazione è sempre quella di rincorrere.'
  },
  RH: {
    parent:
      'Ripetizioni + schemi fai-da-te: buona volontà c’è, ma spesso manca una regia. Ognuno aggiunge qualcosa, ma nessuno mette ordine nel quadro generale del metodo.',
    student:
      'Hai messo insieme ripetizioni e schemi: ascolti, sottolinei, fai mappe. Se però nessuno ti ha insegnato una vera strategia, rischi di moltiplicare gli strumenti senza avere più chiarezza.'
  },
  SH: {
    parent:
      'Più ore e più schemi: tanto impegno, tanta energia consumata, ma risultati che non crescono nella stessa misura. Non manca la buona volontà, manca un metodo che faccia pesare meno ogni singola ora di studio.',
    student:
      'Hai aumentato sia le ore sia il materiale: schemi, appunti, esercizi. Il problema è che, senza un metodo a monte, tutto questo rischia di aggiungere peso, non leggerezza.'
  },
  RSH: {
    parent:
      'Avete già giocato tutte le carte “classiche”: ripetizioni, più ore, schemi. Se nonostante tutto la sensazione è di non avere il controllo, significa che non serve aggiungere altro: serve cambiare il modello.',
    student:
      'Hai provato un po’ di tutto: ripetizioni, più ore, schemi di ogni tipo. Se nonostante questo ti senti ancora in affanno, il punto non è fare “di più”, ma cambiare proprio il modo in cui affronti studio e prove.'
  },
  N: {
    parent:
      'Non avete ancora provato nessuna strada strutturata: paradossalmente è una buona notizia. Possiamo costruire da subito un metodo sensato, senza dover prima “disimparare” abitudini poco utili.',
    student:
      'Finora hai improvvisato senza una vera strategia: paradossalmente è una buona notizia. Possiamo impostare un metodo da zero, senza dover prima smontare abitudini che non funzionano.'
  }
};

export const attemptsRegistry = {
  attemptsOptions,
  attemptsMap,
  attemptsTexts
};
