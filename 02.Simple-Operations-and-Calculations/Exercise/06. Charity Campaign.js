function charityCampaning(days, workers, cakes, gofrets, pancakes){
    let cakes_income_per_day = (cakes - 0) * 45 * workers
    let gofrets_income_per_day = (gofrets - 0) * 5.80 * workers
    let pancakes_income_per_day = (pancakes - 0) * 3.20 * workers
    let total_income = days * (cakes_income_per_day + gofrets_income_per_day + pancakes_income_per_day)
    total_income = total_income - 0.125 * total_income
    console.log(total_income.toFixed(2))
}

charityCampaning(20, 8, 14, 30, 16)