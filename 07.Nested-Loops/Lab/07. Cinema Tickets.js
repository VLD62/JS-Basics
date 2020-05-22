function cinemaTickets(input){
    let cmd = input.shift();
    let total_tickets = 0;
    let student_tickets = 0;
    let standard_tickets = 0;
    let kid_tickets = 0;
    while (cmd != "Finish") {
        let total_places = Number(input.shift());
        let occupied_places = 0;
        let ticketType = "";
        while (occupied_places < total_places && ticketType != "End"){
            ticketType = input.shift()
            if (ticketType == "student"){
                student_tickets++;
            } else if (ticketType == "standard"){
                standard_tickets++;
            } else if (ticketType == "kid") {
                kid_tickets++;
            } else {
                break;
            }

            occupied_places++;
            total_tickets++;
        } 
        console.log(`${cmd} - ${(((occupied_places)/total_places)*100).toFixed(2)}% full.`);
        cmd = input.shift();
    }
    console.log(`Total tickets: ${total_tickets}`);
    console.log(`${((student_tickets/total_tickets)*100).toFixed(2)}% student tickets.`);
	console.log(`${((standard_tickets/total_tickets)*100).toFixed(2)}% standard tickets.`);
	console.log(`${((kid_tickets/total_tickets)*100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi"
    ,10
    ,"standard"
    ,"kid"
    ,"student"
    ,"student"
    ,"standard"
    ,"standard"
    ,"End"
    ,"Scary Movie"
    ,6
    ,"student"
    ,"student"
    ,"student"
    ,"student"
    ,"student"
    ,"student"
    ,"Finish"]
    )