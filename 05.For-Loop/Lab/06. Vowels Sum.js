function vowelsSum(text_input){
    text_input = text_input.split("");
    let total_sum = 0
    for (let i = 0; i < text_input.length ; i++) {
        switch(text_input[i]){
            case "a":
                total_sum += 1;
                break;
            case "e":
                total_sum += 2;
                break;
            case "i":
                total_sum += 3
                break;
            case "o":
                total_sum += 4;
                break;
            case "u":
                total_sum += 5;
                break;
        }
    }
    console.log(total_sum);
}