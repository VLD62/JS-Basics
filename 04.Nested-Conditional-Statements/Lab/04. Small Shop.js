function smallShop(product, town, qty){
    let sofia_prices = {
        "coffee" : 0.50,
        "water"  : 0.80,
        "beer"   : 1.20,
        "sweets" : 1.45,
        "peanuts" : 1.60
    }

    let plovdiv_prices = {
        "coffee" : 0.40,
        "water"  : 0.70,
        "beer"   : 1.15,
        "sweets" : 1.30,
        "peanuts" : 1.50
    }

    let varna_prices = {
        "coffee" : 0.45,
        "water"  : 0.70,
        "beer"   : 1.10,
        "sweets" : 1.35,
        "peanuts" : 1.55
    }
    switch(town){
        case "Sofia":
            console.log(sofia_prices[product] * Number(qty))
            break;
        case "Plovdiv":
            console.log(plovdiv_prices[product] * Number(qty))
            break;
        case "Varna":
            console.log(varna_prices[product] * Number(qty))
            break;
    }
}

smallShop("coffee", "Varna", 2)