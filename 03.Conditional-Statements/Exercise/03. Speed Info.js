function speedInfo(speed) {
    if (Number(speed) <= 10) {
        console.log("slow")
    } else if (Number(speed) <= 50) {
        console.log("average")
    } else if (Number(speed) <= 150) {
        console.log("fast")
    } else if (Number(speed) <= 1000) {
        console.log("ultra fast")
    } else {
        console.log("extremely fast")
    }
}