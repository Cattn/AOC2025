import fs from 'fs';
function solve() {
    const data = fs.readFileSync('input.txt', 'utf8');
    const ids = data.split("\n").filter(line => line.trim() !== '');
    let idRanges = [];
    let total = 0;
    for (const id of ids) {
        const length = id.length;
        const idRange = id.split('-');
        const min = parseInt(idRange[0])
        const max = parseInt(idRange[1])
        const range = [min, max]
        idRanges.push(range)
        if (!id.includes("-")) {
            break;
        }
    }
    for (const id of ids) {
        const length = id.length;
        if (!id.includes("-")) {
            for(let range of idRanges){
                if (parseInt(id) >= range[0] && parseInt(id) <= range[1]) {
                    total++
                    break;
                }
            }
        }
    }
    console.log(total);
}
solve();