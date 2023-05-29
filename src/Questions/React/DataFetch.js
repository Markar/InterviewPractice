import { useState, useEffect } from 'react'
import { getTicketIds, getTicket } from '../../data'

var card = {
  padding: '2em'
};

export function DataFetch() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function getData() {
      let ids = await getTicketIds().then(res => {
        return res;
      });

      let localTickets = [];
      for (let id of ids) {
        let ticket = await getTicket(id).then(res => {
          return res;
        });

        localTickets.push(ticket);
      }

      setTickets(localTickets);
      return ids;
    }

    getData();
  }, []);

  return (
    <>      
      <h1>Data Fetching</h1>
      <div className={card}>
        {tickets.map(ticket => {
          return (
            <div>
              ID: {ticket.id} Title: {ticket.title}
            </div>
          )
        })}
      </div>      
    </>
  )
}
