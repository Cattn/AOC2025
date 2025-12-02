import fs from 'fs';

function solve() {
    fs.readFile("input.txt", 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const lines = data.split('\n').filter(line => line.trim() !== '')
        let sum = 0;
        let start = 50;
        for (const line of lines) {
            const direction = line[0];
            const number = parseInt(line.slice(1), 10);

                if (direction == "L") {
                    start = ((start - number) % 100);
                }
                if (direction == "R") {
                    start = ((start + number) % 100);
                }
                if (start == 0)  {
                    sum = sum + 1
                }
        }
        console.log(sum);
    });
}

solve()