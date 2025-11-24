export const levelLabels = {
  elementari: 'le scuole elementari',
  medie: 'le scuole medie',
  superiori: 'le scuole superiori',
  universita: "l'università"
};

export const levelSolutionTails = {
  universita:
    ' In pratica, colleghiamo questo lavoro direttamente a esami, appelli e tesi, così lo studio non resta astratto ma diventa risultati concreti.',
  superiori:
    ' Questo si traduce in verifiche, interrogazioni ed eventuale esame di maturità affrontati con più sicurezza e meno improvvisazione.',
  medie:
    ' Così verifiche e interrogazioni non sono più un salto nel vuoto, ma la conseguenza logica di come studia ogni settimana.',
  elementari:
    ' A questa età significa rendere compiti e piccole prove più gestibili, costruendo fiducia invece che solo paura di sbagliare.'
};

export const levelsContent = {
  elementari: {
    eyebrow: 'Elementari · basi e fiducia',
    title: 'Compiti meno conflittuali, lettura più sicura.',
    description:
      'Lavoro molto sulla comprensione del testo, sulla lettura ad alta voce e sul ridurre il conflitto quotidiano sui compiti. A questa età conta più costruire fiducia che “riempire” il pomeriggio di esercizi.',
    bullets: [
      '• Aiuto compiti in tutte le materie umanistiche.',
      '• Sviluppo delle abilità di lettura, scrittura e comprensione.',
      '• Giochi e attività per trasformare la curiosità in attenzione.'
    ]
  },
  medie: {
    eyebrow: 'Medie · dal “memorizzo” al “capisco”',
    title: 'Testi lunghi, sintesi, verifiche senza panico.',
    description:
      'Qui l’obiettivo è far passare lo studente dal ripetere a memoria al capire cosa sta leggendo. Strutturiamo metodo, mappe, domande guida e un’organizzazione realistica del tempo.',
    bullets: [
      '• Umanistiche: Italiano, Storia, Geografia, Letteratura.',
      '• Tecniche di sintesi e schemi per testi più lunghi.',
      '• Preparazione mirata a verifiche e interrogazioni.'
    ]
  },
  superiori: {
    eyebrow: 'Superiori · pensiero critico e maturità',
    title: 'Filosofia, Storia e maturità senza naufragare.',
    description:
      'Lavoriamo su Filosofia e Storia, ma soprattutto su come argomentare, collegare concetti, scrivere e preparare interrogazioni ed esami senza arrivare sempre “al limite”.',
    bullets: [
      '• Ripetizioni di Filosofia e Storia.',
      '• Preparazione a verifiche, interrogazioni ed esame di maturità.',
      '• Supporto per tesine e percorsi multidisciplinari.'
    ]
  },
  universita: {
    eyebrow: 'Università · esami, tesi, pensiero avanzato',
    title: 'Testi difficili, esami orali e scrittura di tesi.',
    description:
      'Lavoriamo su testi complessi, articoli accademici, manuali estesi e sulla capacità di trasformare tutto questo in esposizione chiara, esami sostenuti con sicurezza e tesi che hanno una struttura logica solida.',
    bullets: [
      '• Esami di Filosofia, Storia, Etica e discipline umanistiche affini.',
      '• Supporto nella lettura critica di testi e nella preparazione orale.',
      '• Accompagnamento nella stesura di tesi e tesine, dalla struttura alla revisione.'
    ]
  }
};

export const levelsRegistry = {
  levelLabels,
  levelSolutionTails,
  levelsContent
};
