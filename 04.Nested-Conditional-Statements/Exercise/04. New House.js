function newHouse(flower, count, budget){
    count = Number(count);
    budget = Number(budget);
    let flower_prices = {
        "Roses": 5,
        "Dahlias": 3.80,
        "Tulips": 2.80,
        "Narcissus": 3,
        "Gladiolus": 2.50
    }
    let total_price = flower_prices[flower] * count
    if (flower == "Roses" && count > 80){
        total_price -= 0.1 * total_price
    }
    if (flower == "Dahlias" && count > 90){
        total_price -= 0.15 * total_price
    }
    if (flower == "Tulips" && count > 80){
        total_price -= 0.15 * total_price
    }
    if (flower == "Narcissus" && count < 120){
        total_price += 0.15 * total_price
    }
    if (flower == "Gladiolus" && count < 80){
        total_price += 0.2 * total_price
    }
    if (budget >= total_price){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - total_price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(total_price - budget).toFixed(2)} leva more.`)
    }
}