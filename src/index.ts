import { FileReader } from './fileReader';
import readline from 'readline';
import { TxtCalculator } from './txtCalculator';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Inserisci il percorso del file (locale o URL): ', async (filePath: string) => {
    try {
        const content = await FileReader.readFile(filePath);
        const stats = TxtCalculator.calculate(content);
        console.log('Numero totale di parole:', stats.totalWords);
        console.log('Numero totale di caratteri:', stats.totalChars);
        console.log('Numero totale di spazi:', stats.totalSpaces);
        console.log('Parole ripetute più di 10 volte:', stats.repeatedWords);
    } catch (error: any) {
        console.error('Errore nella lettura del file:', error.message);
    } finally {
        rl.close();
    }
});