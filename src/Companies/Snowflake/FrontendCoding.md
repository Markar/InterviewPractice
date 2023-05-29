### Display a list of tickets, don't worry about the UI 
They provided a full Vite based app in CoderPad. The environment works ok, but is pinned to specific versions. Individual files had to import React directly, and the coding language was set to TypeScript.

The main part involved writing a useEffect to call an endpoint that returns a list of ticket ids, and then call getTicket(id) on each of those. Then iterate over that object to list the tickets in the UI. 

The tricky part (for live coding) is writing the useEffect, where you have to await the getTicketIds function, which returns a list of promises so you have to do:

let res = Promise.all(ids).then( (vals) => {
  return vals;
});

setTickets(res);

so you can get all of the objects into state. Then it's just a matter of doing a tickets.map and displaying the ticket properties. 