import fs from 'fs';
function solve() {
    fs.readFile("input.txt", 'utf8', (data) => {
        const ids = data.split(',').filter(line => line.trim() !== '')
        let sum = 0;
        ids.forEach((id) => {
            const idRange = id.split('-');
            const min = idRange[0]
            const max = idRange[1]
            for (var i = parseInt(min); i < parseInt(max); i++) {
                const length = i.toString().length
                if (length % 2 === 0) {
                    const numString = i.toString();
                    const halfOne = numString.slice(0, numString.length / 2)
                    const halfTwo = numString.slice(numString.length / 2, numString.length)
                    if (halfOne == halfTwo) {
                        const num = i;
                        sum += num;
                    }
                }
            }
        });
        console.log(sum);
    });
}
solve()