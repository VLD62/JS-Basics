function travel(input){
    cmd = input.shift()
    while (cmd != 'End'){
        let cost = Number(input.shift())
        let total_amount = Number(input.shift())
        while (total_amount < cost){
            total_amount += Number(input.shift())
        }
        if (cost <= total_amount){
            console.log(`Going to ${cmd}!`)
        }
        cmd = input.shift()
    }
}
travel(["Greece"
    ,1000
    ,200
    ,200
    ,300
    ,100
    ,150
    ,240
    ,"Spain"
    ,1200
    ,300
    ,500
    ,193
    ,423
    ,"End"])