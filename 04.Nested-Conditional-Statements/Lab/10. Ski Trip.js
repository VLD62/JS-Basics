function skiTrip(days, room_type, feedback) {
    days = Number(days);
    let prices_dict = {
        "room for one person": 18.00,
        "apartment": 25.00,
        "president apartment": 35.00
    }
    let total_price = prices_dict[room_type] * (days - 1)
    if (days < 10) {
        switch(room_type){
            case "apartment":
                total_price -= 0.3 * total_price
                break;
            case "president apartment":
                total_price -= 0.1 * total_price
                break;
            default:
                break;
        }
    } else if (days < 16) {
        switch(room_type){
            case "apartment":
                total_price -= 0.35 * total_price
                break;
            case "president apartment":
                total_price -= 0.15 * total_price
                break;
            default:
                break;
        }
    } else {
        switch(room_type){
            case "apartment":
                total_price -= 0.5 * total_price
                break;
            case "president apartment":
                total_price -= 0.2 * total_price
                break;
            default:
                break;
        }
    }
    if (feedback == "positive"){
        total_price += total_price * 0.25
    } else {
        total_price -= total_price * 0.10
    }

    console.log(total_price.toFixed(2))
}

