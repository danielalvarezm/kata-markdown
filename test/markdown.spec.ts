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

    it('give back italic as <i>' , () => {
        expect(markDown.convert('*prueba italic*')).toBe('<p><i>prueba italic</i></p>');
        expect(markDown.convert('* prueba italic *')).toBe('<p><i> prueba italic </i></p>');
        expect(markDown.convert('prueba *italic* en medio del texto')).toBe('<p>prueba <i>italic</i> en medio del texto</p>');
        expect(markDown.convert('prueba *italic* en * medio * del texto')).toBe('<p>prueba <i>italic</i> en <i> medio </i> del texto</p>');
        expect(markDown.convert('_prueba italic_')).toBe('<p><i>prueba italic</i></p>');
        expect(markDown.convert('_ prueba italic _')).toBe('<p><i> prueba italic </i></p>');
        expect(markDown.convert('prueba _italic_ en medio del texto')).toBe('<p>prueba <i>italic</i> en medio del texto</p>');
        expect(markDown.convert('prueba _italic_ en _ medio _ del texto')).toBe('<p>prueba <i>italic</i> en <i> medio </i> del texto</p>');
    });

    it('give back bold and inside italic' , () => {
        expect(markDown.convert('__Text *prueba* test__')).toBe('<p><b>Text <i>prueba</i> test</b></p>');
        expect(markDown.convert('**Text *prueba* test**')).toBe('<p><b>Text <i>prueba</i> test</b></p>');
        expect(markDown.convert('**Text _prueba_ test**')).toBe('<p><b>Text <i>prueba</i> test</b></p>');
        expect(markDown.convert('__Text _prueba_ test__')).toBe('<p><b>Text <i>prueba</i> test</b></p>');
    });
});

