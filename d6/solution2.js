import fs from 'fs';
function solve() {
    const data = fs.readFileSync('input.txt', 'utf8');
    const rows = data.split("\n").filter(line => line.length > 0);
    const numArray = rows.slice(0, -1);
    const symbolRow = rows[rows.length - 1];
    let total = 0;
    let curNums = [];
    let curSymbol = null;
    const width = Math.max(...rows.map(r => r.length));
    for (var i = 0; i < width; i++) {
        let colStr = "";
        for (let y = 0; y < numArray.length; y++) {
            const char = (numArray[y][i] || " ");
            if (char !== " ") colStr += char;
        }
        const symbol = (symbolRow[i] || " ");
        if (symbol !== " ") curSymbol = symbol;
        if (colStr.length > 0) {
            curNums.push(parseInt(colStr));
        }
        const isSeparator = (colStr.length === 0 && symbol === " ");
        if ((isSeparator || i === 0) && curNums.length > 0) {
            if (curSymbol === '*') {
                total += curNums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
            } else if (curSymbol === '+') {
                total += curNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            }
            curNums = [];
            curSymbol = null;
        }
    }
    console.log(total);
}
solve();