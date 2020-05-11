function numberOnThirdPower(num) {
    num = Number(num)
    for (let i = 1; i <= num; i++){
        if(num % 2 == 0) {
            if(i % 2 == 0) {
                console.log(`Current number: ${i}. Cube: ${i*i*i}`)
            }
        } else {
            if(i % 2 != 0) {
                console.log(`Current number: ${i}. Cube: ${i*i*i}`)
            }
        }
    }
}