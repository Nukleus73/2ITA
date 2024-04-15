function formatString(inputString, text) {
    let outputString = '';

    let indentLevel = 0;
    const indentTextUnit = '\t';
    const indentHTMLUnit = '&#9;&#9;&#9;&#9;';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];

        if (char === '{') {
            if (text) {
                outputString += '{\n';
            }
            else {
                outputString += '{<br>';
            }
        }
        else if (char === '}') {
            if (text) {
                outputString += '\n}';
            }
            else {
                outputString += '<br>}';
            }
        }
        else if (char === '|' || char === ';') {
            if (text) {
                outputString += '\n';
            } else {
                outputString += '<br>';
            }
        }
        else {
            outputString += char;
        }
    }

    return outputString;
}