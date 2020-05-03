function bonusPoints(num){
    let bonus_points = 0.0;
    if (Number(num) <= 100){
        bonus_points += 5;
    } else if (Number(num) < 1000) {
        bonus_points = 0.2 * Number(num)
    } else {
        bonus_points = 0.1 * Number(num)
    }

    if (Number(num) % 2 == 0) {
        bonus_points += 1
    }

    if (Number(num) % 10 == 5) {
        bonus_points += 2
    }
    console.log(bonus_points)
    console.log(bonus_points + Number(num))
}