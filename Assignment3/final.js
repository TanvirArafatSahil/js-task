/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
console.log(area/2);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money>=25000){
    console.log("Laptop")
}
else if(money>=10000 && money<25000){
    console.log("Cycle")
}
else{
    console.log("Chocolate")
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for(Day=1;Day<=lastDay;Day++){
    if(Day%3===0){
        console.log(Day + " - medicine")
    }
    else{
        console.log(Day + " - rest")
    }
}



/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.startsWith('#')|| fileName.toLowerCase().endsWith('pdf')|| fileName.toLowerCase().endsWith('docx')){
    console.log("Store");
}
else{
    console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse"  };
//write your code here
console.log(student.name.concat(student.roll,'.').concat(student.department,'@ph.ac.bd'));



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var presentSalary=startingSalary*(1+0.05)**experience;


console.log(presentSalary.toFixed(2));