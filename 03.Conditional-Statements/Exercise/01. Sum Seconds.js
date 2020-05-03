function sumSeconds(timeFirst, timeSecond, timeThird){
    let totalTime = Number(timeFirst) + Number(timeSecond) + Number(timeThird)
    let minutes =  Math.floor(totalTime / 60);
    let seconds = totalTime - minutes * 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}