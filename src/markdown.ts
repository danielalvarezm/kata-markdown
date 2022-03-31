export class MarkDown {    
    public convert(content:string): string {
        const splittedString:string[] = content.split(' ');
        if(splittedString[0].includes('#')){
            const size:number = splittedString[0].length;
            return `<h${size}>`+ splittedString.slice(1).join(' ') + `</h${size}>`;
        }

        return '<p>' + content + '</p>';
    }
}



