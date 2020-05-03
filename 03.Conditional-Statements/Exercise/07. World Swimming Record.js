function worldSwimmingRecord(record_in_seconds, distance, time){
    let total_seconds = (Number(time) * Number(distance)) + (Math.floor((Number(distance)/15)) * 12.5)
    if (total_seconds < record_in_seconds) {
        console.log(`Yes, he succeeded! The new world record is ${total_seconds.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(total_seconds - record_in_seconds).toFixed(2)} seconds slower.`)
    }
}
