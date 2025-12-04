import fs from 'fs';
function solve() {
    const data = fs.readFileSync('input.txt', 'utf8');
    const rows = data.split("\n").filter(line => line.trim() !== '')
    let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(0));
    let width = rows.length;
    let length = rows[0].length;
    let diagram = Array2D(width,length);
    let rownum = 0;
    for (const row of rows) {
        const length = row.length;
        for (var i = 0; i < length; i++) {
            diagram[rownum][i] = row[i]
        }
        rownum++
    }
    const total = solvePart2(diagram, width, length);
    console.log(total);
}
function checkNeighboors(diagram, i, b, width, length) {
    let temp = 0;
    if (i + 1 < width && diagram[i + 1][b] == "@") {
        temp++;
    }
    if (i + 1 < width && b + 1 < length && diagram[i + 1][b + 1] == "@") {
        temp++;
    }
    if (b + 1 < length && diagram[i][b + 1] == "@") {
        temp++;
    }
    if (i - 1 >= 0 && diagram[i - 1][b] == "@") {
        temp++;
    }
    if (i - 1 >= 0 && b - 1 >= 0 && diagram[i - 1][b - 1] == "@") {
        temp++;
    }
    if (b - 1 >= 0 && diagram[i][b - 1] == "@") {
        temp++;
    }
    if (i + 1 < width && b - 1 >= 0 && diagram[i + 1][b - 1] == "@") {
        temp++;
    }
    if (i - 1 >= 0 && b + 1 < length && diagram[i - 1][b + 1] == "@") {
        temp++;
    }
    return temp;
}
function remove(diagram, width, length) {
    let toRemove = [];
    for (let i = 0; i < width; i++) {
        for (let b = 0; b < length; b++) {
            if (diagram[i][b] === "@") {
                let n = checkNeighboors(diagram, i, b, width, length);
                if (n < 4) {
                    toRemove.push([i, b]);
                }
            }
        }
    }
    for (let [i, b] of toRemove) {
        diagram[i][b] = ".";
    }
    return toRemove.length;
}
function solvePart2(diagram, width, length) {
    let total = 0;
    while (true) {
        let removed = remove(diagram, width, length);
        if (removed === 0) break;
        total += removed;
    }
    return total;
}
solve()