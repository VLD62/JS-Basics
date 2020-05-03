function timePlusMinutes(hours, minutes){
    let hours_new = Number(hours)
    let minutes_new = Number(minutes)
    if (minutes_new + 15 > 59) {
        if (hours_new + 1 >= 24) {
            hours_new = 0
        } else {
            hours_new += 1
        }
        minutes_new = Math.abs(60 - (Number(minutes) + 15))
    } else {
        minutes_new += 15
    }
    if (minutes_new < 10){
        console.log(`${hours_new}:0${minutes_new}`)
    } else {
        console.log(`${hours_new}:${minutes_new}`)
    }
}

timePlusMinutes(1, 46)