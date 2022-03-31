import { MarkDown }  from '../src/markdown';

describe('Markdown should', () => {
    const markDown = new MarkDown();
    it('give back text as <p>' , () => {
        expect(markDown.convert('prueba 1, esto funciona')).toBe('<p>prueba 1, esto funciona</p>');
    });
});
