const myflight = require("../modules/Flight");

//console.log(myflight);

let flight1 = new myflight.Flight();

flight1.reserveTicket(100,3333,"egypt","KSA","12/11/2024");
flight1.reserveTicket(111,3333,"egypt","KSA","12/11/2024");
flight1.reserveTicket(121,3333,"egypt","KSA","12/11/2024");

//console.log(flight1.displayTickets()); 

//console.log(flight1.getTickets(100,3333));

let update_ticket = {seatNum:50,flightNum:3333,departureAirport:"egypt",arrivalAirport:"KSA",travellingDate:"13/11/2024"};

console.log(flight1.updateTicket(111,3333,update_ticket));

