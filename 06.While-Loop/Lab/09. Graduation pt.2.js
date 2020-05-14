function graduation(input){
    let student_name = input.shift();
    let classes = 12;
    let total_counter = 0;
    let total_grade = 0;
    let bad_grades = 0
    while (classes > 0){
        let grade = Number(input.shift());
        if(grade >= 4) {
            total_counter += 1;
            classes -= 1;
            total_grade += grade
        } else {
            bad_grades +=1
        }
        if(bad_grades > 1){
            console.log(`${student_name} has been excluded at ${12 - classes + 1} grade`)
            break;
        }
    }
    if(bad_grades < 2){
        console.log(`${student_name} graduated. Average grade: ${(total_grade/total_counter).toFixed(2)}`)
    }
}