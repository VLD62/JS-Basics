function fishingBoat(budget, season, fishermen){
    budget = Number(budget)
    fishermen = Number(fishermen)
    boat_rent = {
        "Spring": 3000,
        "Summer" : 4200,
        "Autumn" : 4200,
        "Winter" : 2600
    }
    let discount = 0
    if (fishermen <= 6){
        discount += 0.1
    } else if (fishermen <= 11){
        discount += 0.15
    } else {
        discount += 0.25
    }
    let boat_rent_total = boat_rent[season] - (boat_rent[season] * discount)
    if (fishermen % 2 == 0 && season != "Autumn"){
        boat_rent_total = 0.95 * boat_rent_total
    }
    if (boat_rent_total <= budget) {
        console.log(`Yes! You have ${(budget - boat_rent_total).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(boat_rent_total - budget).toFixed(2)} leva.`)
    }
}