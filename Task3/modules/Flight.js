class Flight{
    #tickets= [];

    reserveTicket(seatNum,flightNum,departureAirport,arrivalAirport,travellingDate){
        this.#tickets.push({seatNum,flightNum,departureAirport,arrivalAirport,travellingDate});
    }

    displayTickets(){
        return this.#tickets;
    }

    getTickets(seatNum,flightNum){
        for(let i=0;i<this.#tickets.length;i++){
            if(this.#tickets[i].seatNum == seatNum && this.#tickets[i].flightNum ==flightNum){
                return this.#tickets[i];
            }
        }
    }

    updateTicket(seatNum,flightNum,update){
        for(let i=0;i<this.#tickets.length;i++){
            if(this.#tickets[i].seatNum == seatNum && this.#tickets[i].flightNum ==flightNum){
               this.#tickets[i]=update;
               break;
            }
        }
        return this.#tickets;
    }   
}

module.exports = {Flight};