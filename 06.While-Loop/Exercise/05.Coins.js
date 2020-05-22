function coins(amount){
    amount = Number(amount) * 100
    counter = 0
    while (amount > 0){
        if (amount - 200 >= 0) {
            amount -= 200
            counter++
        } else if (amount - 100 >= 0) {
            amount -= 100
            counter++
        } else if (amount - 50 >= 0) {
            amount -= 50
            counter++
        } else if (amount - 20 >= 0) {
            amount -= 20
            counter++
        }  else if (amount - 10 >= 0) {
            amount -= 10
            counter++
        }  else if (amount - 5 >= 0) {
            amount -= 5
            counter++
        } else if (amount - 2 >= 0){
            amount -= 2
            counter++
        } else if (amount - 1 >= 0){
            amount -= 1
            counter++
        }
        amount = Math.floor(amount)
    
    }
    console.log(counter)
}

coins(0.56)