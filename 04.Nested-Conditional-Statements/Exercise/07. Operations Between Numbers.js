function operationsBetweenNumbers(num1, num2, operator){
    num1 = Number(num1)
    num2 = Number(num2)
    let result = 0
    let num_type = "odd"
    switch(operator){
        case "+":
            result = num1 + num2
            if (result % 2 == 0){
                num_type = "even"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${num_type}`)
            break;
        case "-":
            result = num1 - num2
            if (result % 2 == 0){
                num_type = "even"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${num_type}`)
            break;
        case "*":
            result = num1 * num2
            if (result % 2 == 0){
                num_type = "even"
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${num_type}`)
            break;
        case "/":
            if (num2 == 0){
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                result = num1 / num2
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`)
            }
            break;
        case "%":
            if (num2 == 0){
                console.log(`Cannot divide ${num1} by zero`)
            } else {
                result = num1 % num2
                console.log(`${num1} % ${num2} = ${result}`)
            }
            break;
    }
}