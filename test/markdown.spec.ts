import MarkDown  from '../src/markdown';

describe('Markdown should', () => {
    it('give back text as <p>' , () => {
        expect(MarkDown.convert('prueba 1, esto funciona')).toBe('<p>prueba 1, esto funciona</p');
    });
});
