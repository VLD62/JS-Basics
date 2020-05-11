function lettersSum(name, controlDigit, budget){
    controlDigit = Number(controlDigit)
    budget = Number(budget)
    let vowels_list = ["a", "e", "i", "o", "u" , "y"]
    let total_sum = 0
    for (let i = 0; i < name.length ; i++) {
        if(vowels_list.includes(name[i])){
            total_sum += 3
        } else {
            total_sum += 1
        }
    }
    total_sum = total_sum * controlDigit
    if (budget < total_sum) {
        console.log(`Cannot buy ${name}. Product value: ${total_sum.toFixed(2)}`)
    } else {
        console.log(`${name} bought. Money left: ${(budget - total_sum).toFixed(2)}`)
    }
}