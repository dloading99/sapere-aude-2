export const blocksOptions = [
  { id: 'capire', label: 'Capire i testi complessi' },
  { id: 'organizzare', label: 'Organizzare tempo e studio' },
  { id: 'verifiche', label: 'Preparare verifiche / esami' },
  { id: 'scrivere', label: 'Scrivere in modo chiaro (temi, saggi, tesi)' }
];

const labelsById = blocksOptions.reduce((acc, item) => {
  acc[item.id] = item.label;
  return acc;
}, {});

export const blocksInfoSingles = {
  capire: {
    titleParent: 'Fa fatica a capire davvero quello che legge',
    titleStudent: 'Fai fatica a capire davvero quello che leggi',
    symptomsParent: [
      'Legge, ma non riesce a spiegare con parole sue cosa ha appena letto.',
      'Si perde nei passaggi importanti e fatica a distinguere idee centrali da dettagli.',
      'Arriva in fondo al paragrafo con la sensazione di non aver capito quasi nulla.'
    ],
    symptomsStudent: [
      'Leggi, ma fai fatica a spiegare con parole tue cosa hai appena letto.',
      'Ti perdi nei passaggi importanti e non distingui più cosa è centrale e cosa è dettaglio.',
      'Arrivi alla fine del paragrafo con la sensazione di non aver davvero afferrato il senso.'
    ],
    solutionParent:
      'Lavoriamo sul modo in cui affronta i testi: impariamo a smontarli, trovare i nodi centrali e ricostruire il discorso in modo semplice e chiaro.',
    solutionStudent:
      'Lavoriamo su come affronti i testi: impari a smontarli, trovare i punti centrali e ricostruire il discorso in modo più semplice e chiaro.'
  },
  organizzare: {
    titleParent: 'Studia tanto, ma senza una vera organizzazione',
    titleStudent: 'Studi tanto, ma senza una vera organizzazione',
    symptomsParent: [
      'Passa molte ore sui libri, ma con risultati altalenanti.',
      'Si riduce spesso all’ultimo momento, con sprint di studio poco sostenibili.',
      'Non ha un piano chiaro: alterna giornate di super-sforzo a giornate di rinuncia.'
    ],
    symptomsStudent: [
      'Passi tante ore sui libri, ma i risultati non sono proporzionati alla fatica.',
      'Ti riduci spesso all’ultimo momento, con maratone di studio che non puoi reggere a lungo.',
      'Non hai un piano chiaro: alterni giornate in cui ti massacri a giornate in cui molli del tutto.'
    ],
    solutionParent:
      'Costruiamo un metodo organizzativo concreto: tempi realistici, priorità chiare e un ritmo di studio che non dipende solo dall’urgenza della prossima prova.',
    solutionStudent:
      'Costruiamo un metodo organizzativo concreto: tempi realistici, priorità chiare e un ritmo di studio che non dipende solo dall’ansia della prossima prova.'
  },
  verifiche: {
    titleParent: 'Sembra preparato, ma davanti alla prova si blocca',
    titleStudent: 'Ti senti preparato, ma davanti alla prova ti blocchi',
    symptomsParent: [
      'A casa sembra sapere le cose, ma al momento della prova va in tilt.',
      'L’ansia lo porta a dimenticare proprio ciò che aveva ripassato più volte.',
      'Dopo ogni prova esce con la sensazione di non essere riuscito a mostrare quello che sapeva.'
    ],
    symptomsStudent: [
      'A casa ti sembra di sapere, ma al momento della prova ti blocchi.',
      'L’ansia ti fa dimenticare proprio gli argomenti che avevi ripassato di più.',
      'Dopo ogni prova hai la sensazione di non aver mostrato davvero ciò che avevi in testa.'
    ],
    solutionParent:
      'Simuliamo le prove in un contesto protetto: impariamo a gestire tempo, domande e tensione, così il giorno della prova non è la prima volta che affronta quella situazione.',
    solutionStudent:
      'Simuliamo le prove in modo strutturato: impari a gestire tempo, tipo di domande e tensione, così il giorno della prova non è mai una sorpresa totale.'
  },
  scrivere: {
    titleParent: 'Quando deve scrivere, si blocca o si perde',
    titleStudent: 'Quando devi scrivere, ti blocchi o ti perdi',
    symptomsParent: [
      'Davanti al foglio fatica a iniziare: non sa da dove cominciare.',
      'Le frasi risultano lunghe, contorte o poco chiare.',
      'Fa fatica a passare dalle idee in testa a un testo ordinato e leggibile.'
    ],
    symptomsStudent: [
      'Davanti al foglio fai fatica a iniziare: non sai da dove cominciare.',
      'Le frasi diventano lunghe, contorte, e ti sembra di non dire davvero ciò che pensi.',
      'Fai fatica a trasformare le idee che hai in testa in un testo ordinato e leggibile.'
    ],
    solutionParent:
      'Partiamo dalla struttura: prima costruiamo la scaletta logica, poi la trasformiamo in testo. Così la scrittura non è più un salto nel vuoto.',
    solutionStudent:
      'Partiamo dalla struttura: prima costruiamo una scaletta logica, poi la trasformiamo in testo. In questo modo la scrittura non è più un salto nel vuoto.'
  }
};

export const blocksInfoCombos = {
  capire_organizzare: {
    titleParent: 'Studia tanto, capisce poco e si perde nel caos',
    titleStudent: 'Studi tanto, capisci poco e ti perdi nel caos',
    symptomsParent: [
      'Quando prova a studiare da solo, si blocca già sui testi e questo rallenta tutto.',
      'Più tempo impiega a capire, meno ne resta per organizzare il resto dello studio.',
      'Ne deriva un ciclo: fatica, confusione, ritardo e senso di frustrazione.'
    ],
    symptomsStudent: [
      'Quando studi da solo ti blocchi già sui testi e questo rallenta tutto il resto.',
      'Più tempo impieghi a capire, meno ne hai per organizzare lo studio in modo sensato.',
      'Finisci spesso in un ciclo di fatica, confusione, ritardo e frustrazione.'
    ],
    solutionParent:
      'Interveniamo sia sul modo di leggere che sull’organizzazione: da una parte rendiamo i testi più gestibili, dall’altra costruiamo un piano che non crolla alla prima difficoltà.',
    solutionStudent:
      'Interveniamo sia sul modo in cui affronti i testi sia sulla tua organizzazione: rendiamo la lettura più gestibile e lo studio meno caotico, con un piano che regge nel tempo.'
  },
  capire_verifiche: {
    titleParent: 'Capisce “a metà” e alle prove questo si vede',
    titleStudent: 'Capisci “a metà” e alle prove questo si vede',
    symptomsParent: [
      'Durante lo studio sembra aver capito, ma alla prova emergono zone d’ombra.',
      'Si concentra su dettagli secondari e trascura le strutture principali.',
      'I risultati oscillano molto, proprio perché la comprensione non è davvero solida.'
    ],
    symptomsStudent: [
      'Mentre studi ti sembra di capire, ma alle prove emergono punti poco chiari.',
      'Ti ritrovi spesso a ricordare esempi o frasi, ma non la struttura del discorso.',
      'I risultati oscillano: alcune prove vanno bene, altre crollano senza che tu ne capisca il motivo.'
    ],
    solutionParent:
      'Rendiamo più solida la comprensione prima delle prove: lavoriamo su mappe, domande chiave e collegamenti, così le prove non si basano su una comprensione fragile.',
    solutionStudent:
      'Rendiamo più solida la comprensione prima delle prove: lavoriamo su mappe, domande chiave e collegamenti, così le prove non si basano più su una comprensione “a metà”.'
  },
  capire_scrivere: {
    titleParent: 'Capire è faticoso, scrivere diventa quasi impossibile',
    titleStudent: 'Capire è faticoso, scrivere diventa quasi impossibile',
    symptomsParent: [
      'Se già capire richiede molta energia, quando deve scrivere arriva esausto.',
      'Fa fatica a mettere in ordine le idee: il testo risulta frammentato.',
      'La scrittura non restituisce davvero ciò che ha capito, e questo pesa sui risultati.'
    ],
    symptomsStudent: [
      'Se capire ti costa tanta energia, quando devi scrivere arrivi già stanco.',
      'Ti sembra di avere idee sparse, ma non riesci a metterle in ordine sulla pagina.',
      'Quello che scrivi non rende davvero ciò che hai capito, e questo si riflette sui risultati.'
    ],
    solutionParent:
      'Prima alleggeriamo il momento della comprensione, poi costruiamo una struttura di scrittura chiara. Così la scrittura non è più un “secondo ostacolo” dopo la fatica di capire.',
    solutionStudent:
      'Prima rendiamo più gestibile la comprensione, poi costruiamo una struttura di scrittura chiara. In questo modo scrivere smette di essere il “secondo muro” dopo la lettura.'
  },
  organizzare_verifiche: {
    titleParent: 'Arriva sempre alle prove con il fiato corto',
    titleStudent: 'Arrivi sempre alle prove con il fiato corto',
    symptomsParent: [
      'Sa che ci sono prove in arrivo, ma inizia a prepararsi troppo tardi.',
      'Concentra lo sforzo a ridosso della prova, aumentando ansia e stanchezza.',
      'Anche quando va bene, la sensazione è di aver “sopravvissuto”, non di aver gestito.'
    ],
    symptomsStudent: [
      'Sai che le prove stanno arrivando, ma inizi a prepararti quando sei già in ritardo.',
      'Concentri lo sforzo negli ultimi giorni, con ansia alta e poca lucidità.',
      'Anche quando ti va bene, hai la sensazione di aver retto per miracolo, non di aver gestito davvero.'
    ],
    solutionParent:
      'Costruiamo una pianificazione che tiene conto delle prove future in modo realistico, così non dipende tutto dagli ultimi giorni.',
    solutionStudent:
      'Costruiamo una pianificazione che tenga conto delle prove e del resto della tua vita, così non arrivi più sempre “all’ultimo”.'
  },
  organizzare_scrivere: {
    titleParent: 'Rinvia scrittura e studio finché non è troppo tardi',
    titleStudent: 'Rinvi studio e scrittura finché è troppo tardi',
    symptomsParent: [
      'Procrastina i compiti scritti perché richiedono più energia mentale.',
      'Si ritrova spesso con più consegne e prove ravvicinate, gestite tutte in emergenza.',
      'Questo crea un circolo vizioso: più ritarda, più l’ansia cresce.'
    ],
    symptomsStudent: [
      'Rinvi i compiti scritti perché sai che richiedono più energia mentale.',
      'Ti ritrovi spesso con più consegne e prove ravvicinate da gestire tutte insieme.',
      'Più rimandi, più cresce l’ansia, e più è difficile iniziare davvero.'
    ],
    solutionParent:
      'Smontiamo i compiti scritti in micro-passaggi e li distribuiamo nel tempo, così non diventano più una “montagna” da scalare tutta in una volta.',
    solutionStudent:
      'Smontiamo i compiti scritti in passi piccoli e li distribuiamo nel tempo, così non diventano più una montagna unica e ingestibile.'
  },
  verifiche_scrivere: {
    titleParent: 'Paura delle prove e blocco davanti al testo',
    titleStudent: 'Paura delle prove e blocco davanti al testo',
    symptomsParent: [
      'Le prove orali o scritte lo mettono in forte agitazione.',
      'Davanti a un compito scritto si irrigidisce, come se non sapesse da dove partire.',
      'Questo mix di ansia e blocco pesa molto sulla sua autostima.'
    ],
    symptomsStudent: [
      'Le prove orali o scritte ti mettono in forte agitazione.',
      'Davanti a un compito scritto ti blocchi, come se non sapessi da dove partire.',
      'Questo mix di ansia e blocco finisce per buttare giù anche la tua autostima.'
    ],
    solutionParent:
      'Alleniamo il modo di affrontare sia le prove sia la scrittura: preparazione concreta, simulazioni e focus sulla costruzione di sicurezza, non solo sul voto.',
    solutionStudent:
      'Alleniamo il modo in cui affronti sia le prove sia la scrittura: preparazione concreta, simulazioni e lavoro mirato sulla sicurezza, non solo sul risultato finale.'
  },
  capire_organizzare_verifiche: {
    titleParent: 'Comprensione fragile, caos organizzativo e prove vissute come minacce',
    titleStudent: 'Comprensione fragile, caos organizzativo e prove vissute come minacce',
    symptomsParent: [
      'Fa fatica a capire, si organizza in ritardo e vive ogni prova come un salto nel vuoto.',
      'Il tempo non basta mai, perché parte in ritardo e con contenuti poco solidi.',
      'Ogni prova negativa conferma l’idea di “non essere portato”, minando la motivazione.'
    ],
    symptomsStudent: [
      'Fai fatica a capire, ti organizzi tardi e vivi ogni prova come un salto nel vuoto.',
      'Hai spesso la sensazione che il tempo non basti mai e che tu parta sempre in svantaggio.',
      'Ogni prova che va male sembra confermare che “non sei portato”, e questo pesa sulla motivazione.'
    ],
    solutionParent:
      'Lavoriamo su tre fronti: come capire, come organizzarsi e come preparare le prove. L’obiettivo non è solo “andare meglio”, ma cambiare il modo in cui vive lo studio.',
    solutionStudent:
      'Lavoriamo in parallelo su come capire, come organizzarti e come preparare le prove. Non si tratta solo di “andare meglio”, ma di cambiare il modo in cui vivi lo studio.'
  },
  capire_organizzare_scrivere: {
    titleParent: 'Capire costa energia, organizzarsi è difficile, scrivere diventa l’ultimo problema',
    titleStudent: 'Capire costa energia, organizzarti è difficile, scrivere è l’ultimo ostacolo',
    symptomsParent: [
      'Si stanca già nella fase di studio e non resta energia per scrivere con calma.',
      'Rinvia la scrittura finché non è sotto scadenza.',
      'Il risultato è un lavoro che non rispecchia il suo reale potenziale.'
    ],
    symptomsStudent: [
      'Ti stanchi già nella fase di studio e arrivi alla scrittura con poca lucidità.',
      'Rinvi spesso la parte scritta finché non sei a ridosso della consegna.',
      'Sai di poter fare meglio, ma il risultato finale non rende il tuo potenziale.'
    ],
    solutionParent:
      'Ridisegniamo il flusso: prima costruiamo un modo più leggero di capire, poi un’organizzazione sostenibile e infine una struttura chiara per la scrittura.',
    solutionStudent:
      'Ridisegniamo il flusso di studio: rendiamo più gestibile la comprensione, organizziamo meglio il tempo e diamo una struttura chiara alla parte scritta.'
  },
  capire_verifiche_scrivere: {
    titleParent: 'Fatica a capire, paura delle prove e blocco davanti al testo',
    titleStudent: 'Fatica a capire, paura delle prove e blocco davanti al testo',
    symptomsParent: [
      'I testi risultano pesanti e faticosi da affrontare.',
      'Le prove generano ansia perché non si sente mai davvero pronto.',
      'Quando deve scrivere, il blocco aumenta: teme di non riuscire a mettere in ordine ciò che ha in testa.'
    ],
    symptomsStudent: [
      'I testi ti sembrano pesanti e difficili da afferrare.',
      'Le prove ti mettono in agitazione perché non ti senti mai davvero pronto.',
      'Quando devi scrivere, il blocco cresce: temi di non riuscire a mettere in ordine ciò che hai in testa.'
    ],
    solutionParent:
      'Procediamo per passi: prima alleggeriamo la comprensione, poi lavoriamo su come arrivare alle prove, infine diamo una struttura concreta alla scrittura.',
    solutionStudent:
      'Procediamo per passi: prima rendiamo più gestibile la comprensione, poi lavoriamo su come prepararti alle prove e infine costruiamo una struttura chiara per la scrittura.'
  },
  organizzare_verifiche_scrivere: {
    titleParent: 'Procrastina, arriva in emergenza e la scrittura ne paga il prezzo',
    titleStudent: 'Procrastini, arrivi in emergenza e la scrittura ne paga il prezzo',
    symptomsParent: [
      'Rimanda studio e scrittura finché non è troppo vicino alla prova.',
      'Si ritrova a improvvisare sia sui contenuti sia sulla forma.',
      'Questo crea un loop di fatica, risultati altalenanti e senso di inadeguatezza.'
    ],
    symptomsStudent: [
      'Rimandi studio e scrittura finché non sei troppo vicino alla prova.',
      'Ti ritrovi a improvvisare sia sui contenuti sia sul modo di esporli.',
      'Questo alimenta un ciclo di fatica, risultati altalenanti e frustrazione.'
    ],
    solutionParent:
      'Introduciamo una struttura di lavoro a blocchi piccoli e distribuiti nel tempo, in cui studio e scrittura non arrivano mai tutti insieme all’ultimo.',
    solutionStudent:
      'Introduciamo una struttura di lavoro più distribuita, in cui studio e scrittura non esplodono tutti insieme negli ultimi giorni.'
  },
  capire_organizzare_verifiche_scrivere: {
    titleParent: 'Sistema di studio frammentato: tanta fatica, poca resa',
    titleStudent: 'Sistema di studio frammentato: tanta fatica, poca resa',
    symptomsParent: [
      'Fatica a capire i testi, quindi ha bisogno di più tempo di quanto ne ha davvero.',
      'Non avendo un metodo, si ritrova sempre in affanno tra studio, prove e consegne scritte.',
      'Ogni prova diventa una piccola emergenza e lo studio non costruisce basi solide nel tempo.'
    ],
    symptomsStudent: [
      'Ti sembra che ogni testo sia una salita ripida, e questo ti ruba tempo ed energia.',
      'Senza un metodo chiaro, rincorri studio, prove e consegne scritte senza mai sentirti davvero in controllo.',
      'Ogni prova diventa un’emergenza e hai la sensazione di faticare tantissimo senza costruire fondamenta stabili.'
    ],
    solutionParent:
      'Ricostruiamo l’intero sistema di studio: comprensione, organizzazione, preparazione alle prove e scrittura. Non si tratta di “mettere più impegno”, ma di cambiare l’architettura del suo modo di studiare.',
    solutionStudent:
      'Ricostruiamo l’intero sistema di studio: comprensione, organizzazione, preparazione alle prove e scrittura. Non si tratta di “metterci più forza di volontà”, ma di cambiare la struttura con cui studi.'
  }
};

export const blocksRegistry = {
  options: blocksOptions,
  singles: blocksInfoSingles,
  combos: blocksInfoCombos,
  labelsById
};
