function cinema(type, rows, cols){
    let prices_dict = {
        "Premiere": 12.00,
        "Normal": 7.50,
        "Discount": 5.00
    }
    rows = Number(rows)
    cols = Number(cols)
    let total = rows * cols * prices_dict[type]
    console.log(`${total.toFixed(2)} leva`)
}