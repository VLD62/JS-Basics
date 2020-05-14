function readText(input){
    let command = input.shift();
    while (command !== "Stop") {
        command = input.shift();
    }
}