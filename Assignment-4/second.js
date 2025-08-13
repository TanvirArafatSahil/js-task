function  onlyCharacter( str ) {
          if(typeof str!=="string")
            return "Invalid"
        let string=str.split(" ").join("");
        return string.toUpperCase();
}
console.log(onlyCharacter(true))

