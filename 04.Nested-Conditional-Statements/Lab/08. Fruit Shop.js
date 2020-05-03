function fruitShop(fruit, day, qty){
    let days_fruits = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday",
                "banana" , "apple" , "orange" , "grapefruit" , "kiwi" , "pineapple" , "grapes"];
    let week_prices = {
        "banana": 2.50,
        "apple": 1.20,
        "orange": 0.85,
        "grapefruit": 1.45,
        "kiwi": 2.70,
        "pineapple": 5.50,
        "grapes": 3.85
    }
    let weekend_prices = {
        "banana": 2.70,
        "apple": 1.25,
        "orange": 0.90,
        "grapefruit": 1.60,
        "kiwi": 3.00,
        "pineapple": 5.60,
        "grapes": 4.20
    }
    if (days_fruits.includes(day) && days_fruits.includes(fruit)) {
        if (day == "Saturday" || day == "Sunday"){
            console.log((weekend_prices[fruit] * Number(qty)).toFixed(2))
        } else {
            console.log((week_prices[fruit] * Number(qty)).toFixed(2))
        }
    } else {
        console.log("error")
    }
}