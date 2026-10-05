# Tre bozze per un’impresa di ristrutturazioni interne ed esterne

## Apertura
Aprire `index.html` nella cartella principale con un browser e scegliere una proposta. In alternativa aprire `index.html` nella cartella della singola bozza. Nessuna installazione, compilazione o server necessario. Le immagini remote richiedono Internet; tipografia, struttura e interazioni funzionano localmente. In assenza di rete restano i testi alternativi e gli spazi delle fotografie.

## Cosa presentare al cliente
1. **01-solida** — Cemento/sabbia/arancio, hero affiancata alla fotografia, tono concreto e sezioni regolari. Valorizza fiducia, territorio e rapporto personale.
2. **02-moderna** — Bianco/antracite/verde, tipografia ampia e geometrica, servizi prima della storia aziendale, griglia essenziale. Valorizza chiarezza e organizzazione.
3. **03-premium** — Scuro/neutro, serif di sistema, hero fotografica a tutta larghezza e primo progetto in grande formato. Valorizza materia, finiture e collaborazione con progettisti.

Confrontare la sensazione di affidabilità, la leggibilità su telefono e il peso dato alle fotografie. I contenuti sono volutamente comparabili, così il cliente può scegliere la direzione visiva.

## Struttura e personalizzazione
Ogni cartella è autonoma e contiene `index.html`, `styles.css`, `script.js`. Il collegamento “Le tre proposte” nel footer torna alla presentazione; se si distribuisce una sola cartella, rimuovere questo collegamento.
- Modificare nome, testi, servizi, indirizzo, orari e dati societari in `index.html`. Riva Ristrutturazioni è un nome di fantasia per la demo, senza relazione dichiarata con aziende esistenti.
- Le schede progetto sono in `script.js` (array `projects`) e in `index.html` (anteprime): aggiornare entrambi, inclusi testi alternativi.
- I colori sono nelle variabili CSS e nelle classi `.modern` / `.premium`. Ogni bozza usa lo stesso insieme di regole CSS, ma composizioni e ordine delle sezioni differenti.
- Le fotografie sono placeholder remoti da Unsplash (`images.unsplash.com`), non documentano lavori dell’impresa. Sostituire ogni URL sia nell’HTML sia nel JS con fotografie autorizzate, preferibilmente locali in una cartella `assets/`. Per la pubblicazione verificare licenze e diritti sulle immagini scelti: https://unsplash.com/license.
- Il menu mobile supporta apertura/chiusura, selezione dei collegamenti, Escape e cambio di dimensione della finestra. Le schede aprono un dialogo con dettagli; i collegamenti interni portano alle sezioni. Con JavaScript disattivato rimangono visibili tutti i collegamenti del menu.
- Il modulo usa la validazione del browser e mostra un messaggio di demo. **Non invia né salva dati**. L’email con dominio `.example` e il telefono sono placeholder non operativi.

## Prima della pubblicazione definitiva
Collegare il modulo a un servizio/backend reale con gestione degli errori e risposta al cliente. Inserire recapiti reali, dati societari, informazioni privacy e ogni testo necessario al funzionamento scelto. Le bozze non usano tracker né cookie applicativi; le richieste alle immagini remote sono effettuate verso Unsplash. Rimuovere `noindex,nofollow` solo dal sito definitivo. Confermare qualsiasi dichiarazione aziendale ed evitare di usare i progetti dimostrativi come portfolio reale.

## Riferimenti di settore
Consultati per convenzioni generali (servizi espliciti, portfolio, contatto e sopralluogo), senza riprodurre layout o testi:
- https://www.godini.it/
- https://fpcostruzionisrl.it/
- https://www.lb-costruzioni.it/

## Pubblicazione su GitHub Pages
La repository include un workflow che pubblica tutte e tre le proposte a ogni aggiornamento del ramo `main`. In GitHub, aprire Settings → Pages e scegliere **GitHub Actions** come Source. Il sito sarà disponibile all’indirizzo comunicato dal workflow Pages nella scheda Actions. La home permette di navigare fra le tre bozze. Per gli account gratuiti usare una repository pubblica.
