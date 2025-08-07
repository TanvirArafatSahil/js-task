// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']



const color=["red","blue","green","yellow","orange"];
const result=[];
for(let i=color.length-1;i>=0;i--){
    
    result.push(color[i]);
}
console.log(result);