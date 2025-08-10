/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 * */ 

function repeat(num,find){
    
    let a=0;
    for(const numbers of num){
        if(numbers===find){
            a++;
        }
    }
    return a;
}
const number=repeat([5,6,11,12,98,5],5);

console.log(number)