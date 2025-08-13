function  isSame(arr1 , arr2 ) {
          if(!Array.isArray(arr1)||!Array.isArray(arr2)){
            return "Invalid";
          }
           if(arr1.length!==arr2.length){
            return "false";
          }

            let arrays=0;
          for(const array of arr1){
            if(array!==arr2[arrays]){
                return false;
            }
            arrays++;
          }
          return "true";
          
}
console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]))

