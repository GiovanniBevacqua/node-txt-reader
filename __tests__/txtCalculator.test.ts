import { TxtCalculator } from '../src/txtCalculator';

describe('TxtCalculator', () => {
    const content = 'Userbot Test!';

    it('should calculate total words', () => {
        const stats = TxtCalculator.calculate(content);
        expect(stats.totalWords).toBe(3);
    });

});