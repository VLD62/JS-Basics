function danceHall(hall_length, hall_width, wardrobe_length){
    let hall_area = (hall_length - 0) * (hall_width - 0)
    let wardrobe_area = Math.pow((wardrobe_length - 0), 2)
    let bench_area = hall_area / 10
    let area_left = hall_area - wardrobe_area - bench_area
    console.log(Math.floor(area_left / 0.704))
}

danceHall(50, 25, 2)