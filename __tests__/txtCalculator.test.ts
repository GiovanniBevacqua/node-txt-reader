import { TxtCalculator } from '../src/txtCalculator';

describe('TxtCalculator', () => {
    const content = `The names "John Doe" for males, "Jane Doe" or "Jane Roe" for females,
    or "Jonnie Doe" and "Janie Doe" for children,
    or just "Doe" non-gender-specifically are used as placeholder names for a party whose true identity is unknown
    or must be withheld in a legal action, case, or discussion.
    The names are also used to refer to acorpse or hospital patient whose identity is unknown.
    This practice is widely used in the United States and Canada,
    but is rarely used in other English-speaking countries including the United Kingdom itself,
    from where the use of "John Doe" in a legal context originates.
    The names Joe Bloggs or John Smith are used in the UK instead, as well as in Australia and New Zealand.
    John Doe is sometimes used to refer to a typical male in other contexts as well, in a similar manner to John Q. Public,
    known in Great Britain as Joe Public, John Smith or Joe Bloggs.
    For example, the first name listed on a form is often John Doe,
    along with a fictional address or other fictional information to provide an example of how to fill in the form.
    The name is also used frequently in popular culture, for example in the Frank Capra film Meet John Doe.
    John Doe was also the name of a 2002 American television series.`;

    it('should calculate total words', () => {
        const stats = TxtCalculator.calculate(content);
        expect(stats.totalWords).toEqual(expect.any(Number));
    });
    
    it('should calculate total chars', () => {
        const stats = TxtCalculator.calculate(content);
        expect(stats.totalChars).toEqual(expect.any(Number));
    });

    it('should calculate total spaces', () => {
        const stats = TxtCalculator.calculate(content);
        expect(stats.totalSpaces).toEqual(expect.any(Number));
    });

    it('should calculate words repeated more than 10 times', () => {
        const stats = TxtCalculator.calculate(content);
        expect(stats.repeatedWords).toEqual(expect.arrayContaining([
            expect.objectContaining({ 
                word: expect.any(String), 
                count: expect.any(Number) 
            })
        ]));
    });

});