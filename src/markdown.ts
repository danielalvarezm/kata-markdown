/* eslint-disable no-useless-escape */

const styleTextDictionary = [
  
    {
        notation: '**',
        expression: /\*\*(.*?)\*\*/g,
        type: 'bold',
        tag: 'b'
    },
    {
        notation: '__',
        expression: /\_\_(.*?)\_\_/g,
        type: 'bold',
        tag: 'b'
    },
    {
        notation: '*',
        expression: /\*(.*?)\*/g,
        type: 'italic',
        tag: 'i'
    },
    {
        notation: '_',
        expression: /\_(.*?)\_/g,
        type: 'italic',
        tag: 'i'
    },
    {
        notation: '~~',
        expression: /\~\~(.*?)\~\~/g,
        type: 'strike',
        tag: 's'
    },
    /* {
        notation: '`',
        expression: /\`(.*?)\`/g,
        type: 'code',
        tag: 'code'
    }, */
    /* {
        notation: '__',
        expression: /\_\_(.*?)\_\_/g,
        type: 'underline',
        tag: 'u'
    }, */
    /* {
        notation: '++',
        expression: /\+\+(.*?)\+\+/g,
        type: 'big',
        tag: 'big'
    }, */

];

export class MarkDown {    
    public convert(content:string): string {
        const splittedString:string[] = content.split(' ');

        if(splittedString[0].includes('#')){
            const size:number = splittedString[0].length;
            return `<h${size}>`+ splittedString.slice(1).join(' ') + `</h${size}>`;
        }

        content = this.changeStylesText(content);
        return '<p>' + content + '</p>';
    }

    private changeStylesText(content:string): string {
        styleTextDictionary.forEach(style=> {
            content = content.replace(
                style.expression ,
                (content) =>
                    `<${style.tag}>` +
                        content.slice(style.notation.length, content.length - style.notation.length) +
                    `</${style.tag}>`
            );
        });
        return content;
    }
}
