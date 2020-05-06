function volleyball(year_type, p, h){
    let total_games = (Number(p) * 2 / 3) + Number(h) + ((48 -(Number(h))) * 3/4)
    if (year_type == "leap") {
        total_games += 0.15 * total_games
    }
    console.log(Math.floor(total_games))
}

volleyball("normal", 11, 6)