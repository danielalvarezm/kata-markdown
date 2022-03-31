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
    {
        notation: '```',
        expression: /^```(.*?)$/gm,
        type: 'code',
        tag: 'code'
    },
    {
        notation: '`',
        expression: /\`(.*?)\`/g,
        type: 'code',
        tag: 'code'
    },
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

//Dicitionary of titles markdown syntax
const styleTitleDictionary = [
    {
        notation: '#',
        expression: /^#(.*?)$/gm,
        type: 'h1',
        tag: 'h1'
    },
    {
        notation: '##',
        expression: /^##(.*?)$/gm,
        type: 'h2',
        tag: 'h2'
    },
    {
        notation: '###',
        expression: /^###(.*?)$/gm,
        type: 'h3',
        tag: 'h3'
    },
    {
        notation: '####',
        expression: /^####(.*?)$/gm,
        type: 'h4',
        tag: 'h4'
    },
    {
        notation: '#####',
        expression: /^#####(.*?)$/gm,
        type: 'h5',
        tag: 'h5'
    },
    {
        notation: '######',
        expression: /^######(.*?)$/gm,
        type: 'h6',
        tag: 'h6'
    },
];

//Dictionary of link markdown syntax
const linkDictionary = [
    {
        notation: '[',
        expression: /\[(.*?)\]\((.*?)\)/g,
        type: 'link',
        tag: 'a'
    },
];

//Dictionary of image markdown syntax
const imageDictionary = [
    {
        notation: '![',
        expression: /\!\[(.*?)\]\((.*?)\)/g,
        type: 'image',
        tag: 'img'
    },
];

//Dictionary of list markdown syntax
const listDictionary = [
    {
        notation: '*',
        expression: /^\*(.*?)$/gm,
        type: 'list',
        tag: 'li'
    },
    {
        notation: '-',
        expression: /^\-(.*?)$/gm,
        type: 'list',
        tag: 'li'
    }
];

//Dictionary of blockquote markdown syntax
const blockquoteDictionary = [
    {
        notation: '>',
        expression: /^\>(.*?)$/gm,
        type: 'blockquote',
        tag: 'blockquote'
    },
];

//Dictionary of code markdown syntax
const codeDictionary = [
    {
        notation: '```',
        expression: /^```(.*?)$/gm,
        type: 'code',
        tag: 'code'
    },
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

    private changeStylesTitle(content:string): string {
        styleTitleDictionary.forEach(style=> {
            content = content.replace(
                style.expression ,
                (content) =>
                    `<${style.tag}>` +
                        content.slice(style.notation.length, content.length) +
                    `</${style.tag}>`
            );
        });
        return content;
    }
}
