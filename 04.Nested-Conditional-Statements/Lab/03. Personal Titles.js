function personalTitles(age, gender){
    age = Number(age);
    switch(gender){
        case "m":
            if (age < 16){
                console.log("Master")
            } else {
                console.log("Mr.")
            }
            break;
        case "f":
            if (age < 16){
                console.log("Miss")
            } else {
                console.log("Ms.")
            }
            break;
    }
}