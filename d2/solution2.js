import fs from 'fs';
function solve() {
    fs.readFile("input.txt", 'utf8', (data) => {
        const ids = data.split(',').filter(line => line.trim() !== '')
        let sum = 0;
        let times = []
        ids.forEach((id) => {
            const idRange = id.split('-');
            const min = idRange[0]
            const max = idRange[1]
            for (var i = parseInt(min); i <= parseInt(max); i++) {
                const str = i.toString();
                const len = str.length;
                for (let base_len = 1; base_len <= Math.floor(len / 2); base_len++) {
                    const base = str.slice(0, base_len);
                    const repeats = len / base_len;
                    const built = base.repeat(repeats)
                    if (built == str && !times.includes(i)) {
                        sum += i;
                        times.push(i)
                    }
                }
            }
        });
        console.log(sum);
    });
}
solve()