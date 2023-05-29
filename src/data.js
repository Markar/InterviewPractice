const ticketIds = [1, 2, 3, 4];

export async function getTicketIds() {  
  return new Promise((resolve, reject) => {    
    setTimeout( () => resolve(ticketIds), 250);
  });  
}

export async function getTicket(id) {  
  let ticket = tickets.find(x => x.id === id);
  
  return new Promise((resolve, reject) => {    
    setTimeout( () => resolve(ticket), 250);
  });  
}

const tickets = [
  {
    id: 1,
    title: 'Title 1'
  },
  {
    id: 2,
    title: 'Title 2'
  },
  {
    id: 3,
    title: 'Title 3'
  },
  {
    id: 4,
    title: 'Title 4'
  },
];

