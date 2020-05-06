function hotelRoom(month, nights){
    nights = Number(nights)
    let ap_price = 0
    let st_price = 0
    switch(month){
        case "May":
        case "October":
            ap_price = 65
            st_price = 50
            break;
        case "June":
        case "September":
            ap_price = 68.70
            st_price = 75.20
            break;
        case "July":
        case "August":
            ap_price = 77
            st_price = 76
            break;
    }
    let total_price_ap = nights * ap_price
    let total_price_st = nights * st_price
    if (nights > 14 && (month == 'May' || month == 'October')) {
        total_price_st -= 0.3 * total_price_st
    } else if (nights > 7 && (month == 'May' || month == 'October')) {
        total_price_st -= 0.05 * total_price_st
    } else if (nights > 14 && (month == 'June' || month == 'September')) {
        total_price_st -= 0.2 * total_price_st
    }
    if (nights > 14) {
        total_price_ap -= 0.1 * total_price_ap
    }
    console.log(`Apartment: ${total_price_ap.toFixed(2)} lv.`)
    console.log(`Studio: ${total_price_st.toFixed(2)} lv.`)
}