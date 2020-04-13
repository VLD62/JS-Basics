function alchoholMarket(whiskey_price, beer, wine, rakia, whiskey){
    let rakia_price = (whiskey_price - 0) / 2
    let wine_price = rakia_price - (0.4 * rakia_price)
    let beer_price = rakia_price - (0.8 * rakia_price)
    let total_amount = ((whiskey_price - 0) * whiskey) + (rakia_price * rakia) + (wine_price * wine) + (beer_price * beer)
    console.log(total_amount.toFixed(2))
}

alchoholMarket(50, 10, 3.5, 6.5, 1)