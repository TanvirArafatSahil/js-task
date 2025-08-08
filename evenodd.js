// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(a){
    let result;
    if(a%2===1){
        result = a*2
    }
    else{
        result= a/2;
    }
    return result;
}
const result=number(46);
console.log(result);