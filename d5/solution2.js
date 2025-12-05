import fs from 'fs';
function solve() {
    const data = fs.readFileSync('input.txt', 'utf8');
    const ids = data.split("\n").filter(line => line.trim() !== '');
    const ranges = ids.map(id => {
        const parts = id.split('-');
        if (parts.length < 2) return null;
        return [parseInt(parts[0]), parseInt(parts[1])];
    }).filter(r => r !== null);
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [];
    if (ranges.length > 0) {
        merged.push(ranges[0]);
        for (let i = 1; i < ranges.length; i++) {
            const current = ranges[i];
            const last = merged[merged.length - 1];
            if (current[0] <= last[1]) { 
                last[1] = Math.max(last[1], current[1]);
            } else {
                merged.push(current);
            }
        }
    }
    let total = 0;
    for (const range of merged) {
        total += (range[1] - range[0]) + 1; 
    }
    console.log(total);
}
solve();