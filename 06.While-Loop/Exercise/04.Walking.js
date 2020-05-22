function walking(input){
    cmd = input.shift()
    let total_steps = 0
    let going_home = false
    while (cmd != "Going home"){
        total_steps += Number(cmd)
        if (total_steps >= 10000){
            break;
        }
        cmd = input.shift()

    }
    if (cmd == "Going home"){
        going_home = true
    }
    if (going_home){
        total_steps += Number(input.shift())
    }
    if (total_steps >= 10000){
        console.log("Goal reached! Good job!")
    } else {
        console.log(`${10000 - total_steps} more steps to reach goal.`)
    }
}