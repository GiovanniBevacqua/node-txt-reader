# Node.js File Reader

Questa è un'applicazione Node.js che legge un file da un percorso inserito dall'utente (locale o URL) e fornisce le seguenti statistiche:
   - Numero totale di parole nel file (url e versioni - es. 1.0 - vengono conteggiate come 1 parola)
   - Numero totale di lettere nel file
   - Numero totale di spazi nel file
   - Parole che si ripetono più di 10 volte e il numero di volte in cui si ripetono

## Configurazione del Progetto

1. Clona il repository:
   git clone https://github.com/GiovanniBevacqua/node-txt-reader.git
   cd node-txt-reader

2. Installa le dipendenze:
   npm install

## Utilizzo

1. Avvia l'applicazione:
   npm start

2. Segui le istruzioni per inserire il percorso del file (locale o URL).

3. Visualizza le statistiche fornite dall'applicazione:
   - Numero totale di parole nel file (url e versioni - es. 1.0 - vengono conteggiate come 1 parola)
   - Numero totale di lettere nel file
   - Numero totale di spazi nel file
   - Parole che si ripetono più di 10 volte e il numero di volte in cui si ripetono

## Architettura del Progetto

1. Struttura del progetto:
   node-txt-reader/
   ├── src/
   │   ├── config.ts
   │   ├── fileReader.ts
   │   ├── index.ts
   │   └── txtCalculator.ts
   ├── __tests__/
   │   ├── fileReader.test.ts
   │   └── txtCalculator.test.ts
   ├── __mocks__/
   │   └── axios.ts
   ├── public/
   │   └── example.txt
   ├── jest.config.js
   ├── package.json
   ├── tsconfig.json
   └── README.md

2. Componenti Principali:
   2. 1. src/fileReader.ts: Contiene la classe FileReader responsabile della lettura dei file da percorsi locali o URL.
   2. 2. src/txtCalculator.ts: Contiene la classe TxtCalculator responsabile del calcolo delle statistiche dal contenuto del file.
   2. 3. src/index.ts: Punto di ingresso dell'applicazione che gestisce l'input dell'utente e visualizza le statistiche.

## Dettagli delle Implementazioni

## Classe FileReader

1. Metodi:
   static async readFile(filePath: string): Promise<string>: Legge il contenuto di un file da un percorso locale o URL e lo restituisce come stringa.

## Classe TxtCalculator

1. Metodi:
   static calculate(content: string): Stats: Prende come input il contenuto di un file e restituisce un oggetto con le statistiche calcolate.

## Test

## Esecuzione dei Test

1. Per eseguire i test unitari, eseguire il seguente comando:
   npm test

## Strumenti di Test

1. Jest: Utilizzato per scrivere ed eseguire i test.

## Verifica dei File di Testo

1. Il test verifica che il file o l'URL forniti siano file di testo. Questo viene verificato utilizzando l'aspettativa expect.any(String) per assicurarsi che il contenuto letto sia una stringa, indicando che il file è di testo.

2. Il test verifica che il totale delle parole restituito sia un numero. Questo viene verificato utilizzando l'aspettativa expect.any(Number) per assicurarsi che il totale restituito sia un numero.

3. Il test verifica che il totale dei caratteri restituito sia un numero. Questo viene verificato utilizzando l'aspettativa expect.any(Number) per assicurarsi che il totale restituito sia un numero.

4. Il test verifica che il totale degli spazi restituito sia un numero. Questo viene verificato utilizzando l'aspettativa expect.any(Number) per assicurarsi che il totale restituito sia un numero.

5. Il test verifica che il risultato delle parole ripetute più di 10 volte restituito sia un Array di oggetti composto dalle proprietà word: string e count: number. Questo viene verificato utilizzando l'aspettativa expect.arrayContaining() che controlla che l'array contenga almeno uno degli elementi specificati. All'interno di expect.arrayContaining(), utilizziamo expect.objectContaining() per verificare che ogni elemento dell'array sia un oggetto che contiene le proprietà 'word' e 'count'. La proprietà 'word' dovrebbe essere una stringa che rappresenta la parola ripetuta, mentre la proprietà 'count' dovrebbe essere un numero che indica quante volte la parola è stata ripetuta. L'esempio fornito mostra un array di oggetti che corrispondono a questa struttura.
   Es: [
      { word: 'John', count: 14 },
      { word: 'Doe', count: 22 },
      { word: 'or', count: 13 },
      { word: 'in', count: 15 },
      { word: 'to', count: 12 },
      { word: 'the', count: 13 }
   ]
