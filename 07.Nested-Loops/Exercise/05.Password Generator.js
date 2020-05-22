function passwordGenerator(input){
    let n = Number(input.shift());
    let l = Number(input.shift());
    let latinLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    let password = "";

    for (let sym1 = 1; sym1 < n; sym1++){
        for (let sym2 = 1; sym2 < n; sym2++){
            for (let sym3 = 0; sym3 < l; sym3++){
                for (let sym4 = 0; sym4 < l; sym4++){
                    for (let sym5 = 2; sym5 <= n; sym5++){
                        if (sym5 > sym1 && sym5 > sym2)
                        {
                            password += (`${sym1}${sym2}${latinLetters[sym3]}${latinLetters[sym4]}${sym5} `);
                        }
                    }  
                }  
            }   
        }   
    }
    console.log(password);
}