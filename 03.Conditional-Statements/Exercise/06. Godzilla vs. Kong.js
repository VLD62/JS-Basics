function godzillaVsKingKong(budget, statists, price_per_cloth){
    let movie_decor_price = 0.1 * Number(budget)
    let total_budget_cloths = Number(statists) * Number(price_per_cloth)
    if (Number(statists) > 150){
        total_budget_cloths = total_budget_cloths - (total_budget_cloths * 0.1)
    }
    let total_budget = movie_decor_price + total_budget_cloths
    if (total_budget > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(total_budget - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - total_budget).toFixed(2)} leva left.`)
    }
}