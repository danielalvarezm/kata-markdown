import { MarkDown }  from '../src/markdown';

describe('Markdown should', () => {
    const markDown = new MarkDown();
    
    it('give back text as <p>' , () => {
        expect(markDown.convert('prueba 1, esto funciona')).toBe('<p>prueba 1, esto funciona</p>');
    });

    it('give back header as <h#>' , () => {
        expect(markDown.convert('# prueba h1')).toBe('<h1>prueba h1</h1>');
        expect(markDown.convert('## prueba h2')).toBe('<h2>prueba h2</h2>');
    });
});
