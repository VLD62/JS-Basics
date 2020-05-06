function onTimeForExam(exam_hour, exam_minute, arrive_hour, arrive_minute){
    exam_hour = Number(exam_hour)
    exam_minute = Number(exam_minute)
    arrive_hour = Number(arrive_hour)
    arrive_minute = Number(arrive_minute)
    if (arrive_hour == exam_hour && arrive_minute == exam_minute) {
        console.log("On time")
    } else if (arrive_hour == exam_hour && exam_minute > arrive_minute){
        console.log("On time")
        console.log(`${exam_minute - arrive_minute} minutes before the start`)
    } else if(exam_hour - arrive_hour >= 1){
        let total_minutes = exam_minute + (60 * (exam_hour - arrive_hour)) - arrive_minute
        if (total_minutes <= 30) {
            console.log("On time")
            console.log(`${60 - arrive_minute} minutes before the start`)
        } else {
            console.log("Early")
            if (total_minutes < 60) {
                console.log(`${exam_minute + 60 - arrive_minute} minutes before the start`)
            } else {
                let hours = Math.floor(total_minutes / 60);
                let minutes = total_minutes % 60;
                if (minutes < 10){
                    console.log(`${hours}:0${minutes} hours before the start`)
                } else {
                    console.log(`${hours}:${minutes} hours before the start`)
                }
            }
        }
    } else if (arrive_hour == exam_hour && exam_minute < arrive_minute){
        console.log("Late")
        console.log(`${arrive_minute - exam_minute} minutes after the start`)
    } else {
        let total_minutes = arrive_minute + (60 * (arrive_hour - exam_hour)) - exam_minute
        console.log("Late")
        if (total_minutes < 60) {
            console.log(`${arrive_minute + 60 - exam_minute} minutes after the start`)
        } else {
            let hours = Math.floor(total_minutes / 60);
            let minutes = total_minutes % 60;
            if (minutes < 10){
                console.log(`${hours}:0${minutes} hours after the start`)
            } else {
                console.log(`${hours}:${minutes} hours after the start`)
            }
        }
    }
}

onTimeForExam(11,
    30,
    10,
    55)