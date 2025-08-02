let i = 'brtc';
let isVowelHave = false;
const vowel= ['a','e','i','o','u'];
for (const vowels  of vowel){
    i=i.toLowerCase();
    if(i.includes(vowels))
        isVowelHave=true;
    
}

console.log(isVowelHave);