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
    checkNeighboors(diagram, width, length);
}   
function checkNeighboors(diagram, width, length) {
    let total = 0;
    for (var i = 0; i < width; i++) {
        for (var b = 0; b < length; b++) {
            if (diagram[i][b] == "@") {
                    let temp = 0;
                    if (i + 1 < width && diagram[i + 1][b] == "@") {
                        temp++
                    }
                    if (i + 1 < width && b + 1 < length && diagram[i + 1][b + 1] == "@") {
                        temp++
                    }
                    if (b + 1 < length && diagram[i][b + 1] == "@") {
                        temp++
                    }
                    if (i - 1 >= 0 && diagram[i - 1][b] == "@") {
                        temp++
                    }
                    if (i - 1 >= 0 && b - 1 >= 0 && diagram[i - 1][b - 1] == "@") {
                        temp++
                    }
                    if (b - 1 >= 0 && diagram[i][b - 1] == "@") {
                        temp++
                    }
                    if (i + 1 < width && b - 1 >= 0 && diagram[i + 1][b - 1] == "@") {
                        temp++
                    }
                    if (b + 1 < length && i - 1 >= 0 && diagram[i - 1][b + 1] == "@") {
                        temp++
                    }
                    if (temp < 4) {
                        total++
                        temp = 0;
                    }
            }
        }
    }
    console.log(total);
}
solve()