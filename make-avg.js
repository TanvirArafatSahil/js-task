// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(average,size){
    let sum=0;
    for(const number of average){
        sum=sum+number;
        average=sum/size
    }
    return average;
}

const num=[2,4,6,8];
const size=num.length;
const average=make_avg(num,size);
console.log(average);

