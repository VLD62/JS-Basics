function journey(budget, season){
    budget = Number(budget)
    let destination, holiday_type, spend_amount;
    if (budget <= 100) {
        destination = "Bulgaria"
        if (season == "summer"){
            holiday_type = "Camp"
            spend_amount = budget * 0.3
        } else {
            holiday_type = "Hotel"
            spend_amount = budget * 0.7
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season == "summer"){
            holiday_type = "Camp"
            spend_amount = budget * 0.4
        } else {
            holiday_type = "Hotel"
            spend_amount = budget * 0.8
        }
    } else {
        destination = "Europe"
        holiday_type = "Hotel"
        spend_amount = budget * 0.9
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${holiday_type} - ${spend_amount.toFixed(2)}`)
}