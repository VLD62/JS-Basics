function scholarship(income, average, min_salary){
    let social_flag = false
    let excellent_flag = false
    let social_scholarship = Math.floor(0.35 * Number(min_salary))
    let excellent_scholarship = Math.floor(Number(average) * 25)
    if (Number(income) < Number(min_salary) && average > 4.5){
        social_flag = true
    }
    if (Number(average) >= 5.5) {
        excellent_flag = true
    }
    if (excellent_flag && social_flag) {
        if (social_scholarship > excellent_scholarship) {
            console.log(`You get a Social scholarship ${social_scholarship} BGN`)
        } else {
            console.log(`You get a scholarship for excellent results ${excellent_scholarship} BGN`)
        }
    } else if (excellent_flag) {
        console.log(`You get a scholarship for excellent results ${excellent_scholarship} BGN`)
    } else if (social_flag) {
        console.log(`You get a Social scholarship ${social_scholarship} BGN`)
    } else {
        console.log("You cannot get a scholarship!")
    }
}