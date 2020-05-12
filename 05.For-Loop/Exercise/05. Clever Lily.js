function cleverLily(age, washing_machine_price, toy_price){
    age = Number(age)
    washing_machine_price = Number(washing_machine_price)
    toy_price = Number(toy_price)
    let toys_count = 0
    let total_amount = 0
    for (let i = 1; i <= age; i++){
        if (i % 2 == 0){
            total_amount += i * 5
            total_amount -= 1
        } else {
            toys_count += 1
        }
    }
    total_amount += toys_count * toy_price
    if (total_amount >= washing_machine_price) {
        console.log(`Yes! ${(total_amount - washing_machine_price).toFixed(2)}`)
    } else {
        console.log(`No! ${(washing_machine_price - total_amount).toFixed(2)}`)
    }
}