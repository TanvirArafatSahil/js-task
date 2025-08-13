function  resultReport( marks ) {
    if(!Array.isArray(marks)){
        return "Invalid"
    }

    if(marks.length==0){
        return { finalScore: 0 , pass: 0, fail: 0 };
    }

    let totalNum=0;
    let passes=0;
    let fails=0;
    for(const num of marks){
        totalNum=totalNum+num;
        if(num<40){
            fails++;
        }
        else{
            passes++;
        } 
    }

    const avg=Math.round(totalNum/marks.length)

    return {
         finalScore: avg, pass: passes, fail: fails 
    }
}

console.log(resultReport(100))

