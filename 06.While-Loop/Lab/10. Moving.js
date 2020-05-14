function moving(input){
    let width = Number(input.shift())
    let lenght = Number(input.shift())
    let height = Number(input.shift())
    let total_cubic_area = width * lenght * height
    let cmd = input.shift()
    let total_boxes = 0
    while (cmd != "Done"){
        total_boxes += Number(cmd)
        if (total_boxes > total_cubic_area){
            break;
        }
        cmd = input.shift()
    }
    if (total_boxes > total_cubic_area){
        console.log(`No more free space! You need ${total_boxes - total_cubic_area} Cubic meters more.`)
    } else {
        console.log(`${total_cubic_area - total_boxes} Cubic meters left.`)
    }
}
moving([10,
    1,
    2,
    4,
    6,
    "Done"])