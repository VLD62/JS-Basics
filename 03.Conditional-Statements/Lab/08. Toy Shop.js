function toyShop(trip_price, puzzle_count, talking_dolls_count, teddy_bears_count, minions_count, trucks_count){
    let prices = {
        puzzle: 2.60,
        talking_doll: 3,
        teddy_bear: 4.10,
        minion: 8.20,
        truck: 2
    };
    let total_amount = (prices["puzzle"] * Number(puzzle_count)) + (prices["talking_doll"] * Number(talking_dolls_count)) +
                       (prices["teddy_bear"] * Number(teddy_bears_count)) + (prices["minion"] * Number(minions_count) ) +
                       (prices["truck"] * Number(trucks_count))

    if ((Number(puzzle_count) + Number(teddy_bears_count) + Number(minions_count) + Number(trucks_count) + Number(talking_dolls_count)) >= 50){
        let discount = total_amount * 0.25
        total_amount = total_amount - discount
    }
    let rent_price =  total_amount * 0.10
    total_amount = total_amount - rent_price
    if (total_amount >= Number(trip_price)){
        console.log(`Yes! ${(total_amount - Number(trip_price)).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(Number(trip_price) - total_amount).toFixed(2)} lv needed.`)
    }
}