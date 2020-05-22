function building(input){
    let floors = Number(input.shift())
    let rooms = Number(input.shift())
    for (let f = floors; f > 0; f--){
        let room_type = "A"
        let single_floor = ""
        if (f % 2 == 0){
            room_type = "O" 
        }
        if (f == floors){
            room_type = "L"
        }
        for (r = 0; r < rooms; r++){
            single_floor += room_type + f + r 
        }
        console.log(single_floor)
    }
}