import fs from 'fs';
function solve() {
    const data = fs.readFileSync('input.txt', 'utf8');
    const banks = data.split("\n").filter(line => line.trim() !== '');
    let largest = 0;
    const max = 12;
    for (const bank of banks) {
        const length = bank.length;
        const arr = [];
        const realArr = [];
        for (var i = 0; i < length; i++) {
            arr.push(parseInt(bank[i]));
            realArr.push(parseInt(bank[i]));
        }
        const chosen = [];
        for (let i = 0; i < length; i++) {
            const digit = realArr[i];
            while (
                chosen.length > 0 &&
                chosen[chosen.length - 1] < digit &&
                (chosen.length + (length - i) > max)
            ) {
                chosen.pop();
            }
            if (chosen.length < max) {
                chosen.push(digit);
            }
        }
        let number = 0;
        for (let k = 0; k < chosen.length; k++) {
            number = number * 10 + chosen[k];
        }
        largest += number;
    }
    console.log(largest);
}
solve();