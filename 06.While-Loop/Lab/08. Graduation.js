function graduation(input){
    let student_name = input.shift();
    let classes = 12;
    let total_counter = 0;
    let total_grade = 0;
    while (classes > 0){
        let grade = Number(input.shift());
        if(grade >= 4) {
            total_counter += 1;
            classes -= 1;
            total_grade += grade
        }
    }
    console.log(`${student_name} graduated. Average grade: ${(total_grade/total_counter).toFixed(2)}`)
}   