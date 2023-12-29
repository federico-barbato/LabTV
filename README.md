# Progetto – LabTV

## OBIETTIVO
L’obiettivo del progetto era quello di creare un portale al cui interno fossero mostrati i film e i telefilm paginati e ricercabili, sfruttando delle API esterne. Facendo click sul singolo elemento doveva essere possibile visionarne i dettagli e il relativo trailer qualora presente.

## STRUMENTI UTILIZZATI: 
-	HTML: 
Utilizzato per sviluppare una struttura di base e creare una griglia dove andare ad inserire gli elementi facendo attenzione ad evitare eventuali sovrapposizioni (testando anche eventuali ridimensionamenti della finestra del browser) 

-	SCSS:
Ho passato parecchio tempo a giocare con i vari stili un po' per studio e un po’ per cercare di ottimizzare il più possibile il codice.

-	JS:
Escluso Angular, ho utilizzato JavaScript per alcune funzionalità di base come la richiesta di caricamento di nuovi elementi una volta arrivati a fine pagina a seguito dello scroll dell’utente.

-	[ANGULAR](https://angular.io/):
Sfruttando la funzionalità dei componenti, li ho strutturati cercando di ottimizzarne il contenuto per renderli riutilizzabili. In questo modo ho evitato di dover riscrivere codice simile ed ho ottimizzato le prestazioni dell’intero progetto. Alcuni di questi componenti condivi sono: card (elemento che contiene l’immagine e il titolo del film o del telefilm), Header (è lo stesso per tutto il sito).

-	[SWIPER](https://swiperjs.com/) (11.x):
Per i caroselli ho deciso di provare ad utilizzare questo strumento perché ho notato che è uno dei più utilizzati sul web. La sfida è stata adattarlo ad Angular, l’ho quindi utilizzato:
o	Mostrare i film e i telefilm di tendenza come primo elemento nella home
o	Film e telefilm correlati all’interno della scheda di dettaglio del singolo elemento.
BACK-END DI TESTING
Per simulare un servizio di Back-End ho installato JSON-Server che ho utilizzato per effettuare la registrazione degli utenti con relativo login. Dato che era per puro scopo accademico ho sorvolato sulla sicurezza e non ho implementato un sistema di Token.

## COMPONENTI UTILIZZATI (CON COMPORTAMENTO)
### HOME
il componente HOME contiene al suo interno diversi componenti figli:
-	HEADER, questo a sua volta contiene:
o	LOGIN 
o	REGISTER 
o	CONTATTI 
-	CAROSELLO 
-	CATALOGO, questo contiene i componenti:
o	SEARCH
o	CARD
All’interno del componente Home vengono eseguite tutte le chiamate API, i valori vengono poi inviati ai componenti figli quando richiesti:
il componente Header è presente in tutte le pagine e contiene i componenti per la registrazione, il login, le informazioni dei contatti e il collegamento per tornare alla home. 
Nel componente Register, utilizzato per la registrazione, vengono eseguiti controlli sulla validità dell'email e della password. Se uno di questi controlli fallisce, verrà mostrato un alert; altrimenti, se tutti i controlli vengono superati con successo, avviene automaticamente il login. 
Per quanto riguarda il componente Login, viene verificata la presenza dei dati nel 'server'. Se l'esito è positivo, avviene il login; in caso contrario, verrà visualizzato un messaggio di alert. 
Le informazioni dei contatti sono all’interno di un componente denominato Contatti che viene visualizzato al centro della pagina e sovrasta tutti gli altri elementi.
Il componente Carosello contiene al suo interno lo strumento Swiper che viene richiamato in due altri componenti con due contenuti differenti:
-	All’interno di Home vengono mostrati i film o i telefilm di tendenza;
-	All’interno di Dettagli vengono visualizzati i film o i telefilm di genere simili a quello selezionato, questo viene riconosciuto tramite id dell’elemento.
Il componente Catalogo è costituito da due elementi principali: il componente Card e il componente Search. Il primo visualizza i dati essenziali dei film o delle serie TV, permettendo all'utente di distinguere tra queste due tipologie. Queste informazioni vengono replicate per ogni elemento contenuto nell'Array ottenuto da un'API esterna. Il secondo, il componente Search, consente la ricerca di film tramite il titolo.
Nel sopracitato componente Dettaglio, vengono visualizzati gli elementi di un determinato film, questo viene individuato tramite id e tramite un'altra API vengono visualizzati gli elementi richiesti come la trama, i generi di appartenenza e la data di pubblicazione. 

