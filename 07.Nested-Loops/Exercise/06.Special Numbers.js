function specialNumbers(n){
    n = Number(n);
    let allSpecialNums = "";
    for (let i = 1111; i <= 9999; i++){
        if ((n % Math.floor((i / 1) % 10) == 0) && (n % Math.floor((i / 10) % 10) == 0)
         && (n % Math.floor((i / 100) % 10) == 0) && (n % Math.floor((i / 1000) % 10) == 0)) {
             allSpecialNums += i + " "
         }
    }
    console.log(allSpecialNums);
}