export class TxtCalculator {
    static calculate(content: string) {
        const words = content.match(/\b(?:\d+(?:\.\d+)?)\b|\b(?:\w+:\/\/|www\.)\S+\b|\b\w+\b/g) || [];
        const chars = content.match(/[a-zA-Z]/g) || [];
        const spaces = content.match(/\s/g) || [];

        const wordCounts: { [key: string]: number } = {};
        for (const word of words) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }

        const repeatedWords = Object.entries(wordCounts)
            .filter(([_, count]) => count > 10)
            .map(([word, count]) => ({ word, count }));

        return {
            totalWords: words.length,
            totalChars: chars.length,
            totalSpaces: spaces.length,
            repeatedWords,
        };
    }
}