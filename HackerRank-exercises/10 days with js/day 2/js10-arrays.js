'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let maior, segundoMaior
    for (let i = 0; i < nums.length; i++) {
        const numero = nums[i];
        if (i === 0) {
            maior = segundoMaior = numero;
        }
        else {
            if (numero === maior) {
            } else {
                if (numero > maior) {
                    segundoMaior = maior;
                    maior = numero
                } else if (numero > segundoMaior) {
                    segundoMaior = numero
                }
            }
        }
    }
    return segundoMaior;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}