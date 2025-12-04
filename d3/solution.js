import fs from 'fs';
function solve() {
    const data = fs.readFileSync('input.txt', 'utf8');
    const banks = data.split("\n").filter(line => line.trim() !== '')
    let largest = 0;
    for (const bank of banks) {
        const length = bank.length;
        const arr = []
        const realArr = []
        for (var i = 0; i < length; i++) {
           arr.push(parseInt(bank[i]))
           realArr.push(parseInt(bank[i]))
        }
        arr.sort(function(a, b) {
            return a - b;
        });
        const index1 = realArr.indexOf(arr[arr.length - 1])
        const index2 = realArr.indexOf(arr[arr.length - 2])
        const number1 = realArr[index1];
        const number2 = realArr[index2];
        let number = 0;
        function removeAllBefore(array, number) { 
            if(number !== -1) {
                return array.splice(number, array.length - 1);
            }
            return array;
        }
        if (index1 < index2 || number1 == number2) {
            number = (number1 * 10 + number2)
        } else {
            const newReal = realArr.slice(0);
            console.log(newReal[index1 + 1])
            let newArr = [];
            if (index1 !== length - 1) {
                newArr = removeAllBefore(realArr, (index1 + 1))
            } else {
                newArr = realArr.splice(index1, 1)
            }
            newArr.sort(function(a, b) {
                return a - b;
            });
            number = (number1 * 10 + newArr[newArr.length - 1])
            console.log(newArr)
            console.log(arr)
            console.log(number1 + " 1 ")
            console.log(number)
            if (index1 == length - 1) {
                number = (number2 * 10 + number1)
            }
        }
        largest += number
    }
    console.log(largest)
}   
solve()