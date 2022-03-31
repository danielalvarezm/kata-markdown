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
    
    it('give back bold as <b>' , () => {
        expect(markDown.convert('**prueba bold**')).toBe('<p><b>prueba bold</b></p>');
        expect(markDown.convert('** prueba bold **')).toBe('<p><b> prueba bold </b></p>');
        expect(markDown.convert('prueba **bold** en medio del texto')).toBe('<p>prueba <b>bold</b> en medio del texto</p>');
        expect(markDown.convert('prueba **bold** en ** medio ** del texto')).toBe('<p>prueba <b>bold</b> en <b> medio </b> del texto</p>');
        expect(markDown.convert('__prueba bold__')).toBe('<p><b>prueba bold</b></p>');
        expect(markDown.convert('__ prueba bold __')).toBe('<p><b> prueba bold </b></p>');
        expect(markDown.convert('prueba __bold__ en medio del texto')).toBe('<p>prueba <b>bold</b> en medio del texto</p>');
        expect(markDown.convert('prueba __bold__ en __ medio __ del texto')).toBe('<p>prueba <b>bold</b> en <b> medio </b> del texto</p>');
    });
    
    
    
    
});
