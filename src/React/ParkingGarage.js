import React, {useState} from "react";

export const ParkingGarage = (props) => {

    const [totalSpaces, setTotalSpaces] = useState(props.totalSpaces || 5);
    const [usedSpaces, setUsedSpaces] = useState(0);
    const [tickets, setTickets] = useState([]);    

    function issueTicket() {
        let tks = tickets;

        let ticket = {
            id: tickets.length + 1,
            time: Date.now()
        };

        tks.push(ticket);
        setTickets(tks);
        console.log('tickets', tks);
        
        return ticket;
    }

    const leaveGarage = (ticketId) => {     
        console.log('leave garage', ticketId);   
        let tks = tickets;     
        let tkt = 1; 
        if (tks.length > 0) {
            tkt = tks.find(tk => {
                return tk.id === ticketId;            
            });
        }   
        

        let elapsed = (Date.now() - tkt.time) / 1000 / 60;

        if (elapsed < 60) {
            // charge by the minute
        } else {
            // add more breakpoints
        }


        console.log('ticket lg', elapsed);

    }

    function getSpaces() {
        return totalSpaces-usedSpaces;
    }

    const parkCar = () => {
        if (totalSpaces-usedSpaces > 0) {
            // park car            
            setUsedSpaces(usedSpaces + 1);
        } else {
            console.log('not enough spaces to park');
        }
    }

    const removeCar = () => {
        if (usedSpaces > 0) {            
            setUsedSpaces(usedSpaces - 1);
        } else {
            console.log('error removing car');
        }
    }
    

    return (
        <div>
            <span>Parking Garage</span>
            <div> Spaces: {getSpaces()}</div>
            <button onClick={parkCar}>Park Car</button>
            <button onClick={removeCar}>Remove Car</button>

            <div> Ticketing </div>
            <button onClick={issueTicket}>Issue ticket</button>
            <button onClick={() => leaveGarage(1)}>Leave</button>
        </div>
    )
}