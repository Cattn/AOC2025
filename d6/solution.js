import fs from 'fs';
function solve() {
    const data = fs.readFileSync('input.txt', 'utf8');
    const rows = data.split("\n").filter(line => line.length > 0);
    const symbols = rows[rows.length - 1].split(" ").filter(line => line.trim() !== '');
    let numArray = [];
    for (var i = 0; i < rows.length - 1; i++) {
        const numbers = rows[i].split(" ").filter(line => line.trim() !== '');
        numArray.push(numbers);
    }
    let total = 0;
    for (var i = 0; i < numArray[0].length; i++) {
        let symbol = symbols[i]
        let temp = []
        numArray.forEach(array => {
            temp.push(array[i])
        });
        if (symbol == "*") {
            const sum = temp.reduce((accumulator, currentValue) => parseInt(accumulator) * parseInt(currentValue), 1);
            total += sum;
        } else if (symbol == "+") {
            const sum = temp.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue), 0);
            total += sum;
        }
    }
    console.log(total)
}
solve();