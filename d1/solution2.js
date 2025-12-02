import fs from 'fs';
function solve() {
    fs.readFile("input.txt", 'utf8', (data) => {
        const lines = data.split('\n').filter(line => line.trim() !== '')
        let signChange = 0;
        let start = 50;
        for (const line of lines) {
            const direction = line[0];
            const number = parseInt(line.slice(1), 10);
                if (direction == "L") {
                    for(var i = 0; i < number; i++) {
                        start = ((start - 1) % 100);
                        if (start == 0) {
                            signChange++
                        }
                    }
                }
                if (direction == "R") {
                   for(var i = 0; i < number; i++) {
                        start = ((start + 1) % 100);
                        if (start == 0) {
                            signChange++
                        }
                    }
                }
        }
        console.log(signChange);
    });
}
solve()