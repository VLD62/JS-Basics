function vacation(input){
    let total_cost = Number(input.shift())
    let budget = Number(input.shift())
    let spend_count = 0
    let days = 0
    while (total_cost > budget){
        cmd = input.shift()
        money = Number(input.shift())
        days += 1
        if (cmd == "spend"){
            spend_count += 1
            budget -= money
        } else {
            spend_count = 0 
            budget += money
        }
        if (spend_count == 5){
            console.log("You can't save the money.")
            console.log(days)
            break;
        }
        if(budget < 0) {
            budget = 0
        }
    }
    if(spend_count < 5){
        console.log(`You saved the money for ${days} days.`)
    }

}

vacation([2000, 1000, "spend", 1200,  "save", 2000])