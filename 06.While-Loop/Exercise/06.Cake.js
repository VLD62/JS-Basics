function cake(input){
    let cake_first_side = Number(input.shift())
    let cake_second_side = Number(input.shift())
    let cake = cake_first_side * cake_second_side
    let cmd = input.shift()
    let all_pieces = 0
    while (cmd != "STOP"){
        all_pieces += Number(cmd)
        cmd = input.shift()
        if (cake - all_pieces <= 0) {
            break;
        }
    }
    if (cake - all_pieces > 0) {
        console.log(`${cake - all_pieces} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${all_pieces - cake} pieces more.`)
    }
}