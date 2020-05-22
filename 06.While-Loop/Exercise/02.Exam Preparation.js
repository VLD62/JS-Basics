function examPreparation(input){
    let low_marks_limit = Number(input.shift())
    let low_marks_count = 0
    let task_count = 0
    let last_task_name = ""
    let marks = 0
    while(low_marks_count < low_marks_limit){
        let cmd = input.shift()
        let mark = Number(input.shift())
        if (mark <= 4){
            low_marks_count += 1
        }
        if (cmd == "Enough"){
            break;
        }
        task_count += 1
        last_task_name = cmd
        marks += mark
    }
    if (low_marks_count != low_marks_limit) {
        console.log(`Average score: ${(marks / task_count).toFixed(2)}`)
        console.log(`Number of problems: ${task_count}`)
	    console.log(`Last problem: ${last_task_name}`)
    } else {
        console.log(`You need a break, ${low_marks_count} poor grades.`)
    }
}

examPreparation([2, "Income", 3, "Game Info", 6, "Best Player", 4])