function totalFine( fare ) {
    
    if(fare<=0 || typeof fare!=="number"){
        return  "Invalid";
    }
    let fine=fare+(fare*(20/100))+30;
    return fine;
}


