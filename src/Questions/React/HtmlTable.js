import React, { useState } from 'react';
import './HtmlTable.css';
  
const header = {
  textAlign: "left",
  fontSize: "15px",
  fontWeight: "500",
  height: "50px",  
};

const rowClass = {
  textAlign: "left",
  fontSize: "15px",
  fontWeight: "500",  
  height: "50px"
};

export function HtmlTable(props) {    
    const [data, setData] = useState([
      {
        fn: "Tyler",
        ln: "Smith",
        email: "tsmith@fakeemail.com",
        country: "United States",
        dateLast: "12/12/12",
        dateAdded: "12/12/12"
      },
      {
        fn: "Tyler",
        ln: "Smith",
        email: "tsmith@fakeemail.com",
        country: "United States",
        dateLast: "12/12/12",
        dateAdded: "12/12/12"
      },
      {
        fn: "Tyler",
        ln: "Smith",
        email: "tsmith@fakeemail.com",
        country: "United States",
        dateLast: "12/12/12",
        dateAdded: "12/12/12"
      }
    ]);    

    function renderData() {
      let i = 0;
      const rows = data.map(row => {
        return (
          <tr key={i++}>
            <td style={{ ...rowClass }}>{row.fn}</td>
            <td style={{ ...rowClass }}>{row.ln}</td>
            <td style={{ ...rowClass }}>{row.email}</td>
            <td style={{ ...rowClass }}>{row.country}</td>
            <td style={{ ...rowClass }}>{row.dateLast}</td>
            <td style={{ ...rowClass }}>{row.dateAdded}</td>
          </tr>
        )
      });
      
      return rows;
    }
        
    return (
      <table>
        <thead>
          <tr>
            <th style={{ ...header, width: "100px" }}>
              <div>First</div>Name              
            </th>
            <th style={{ ...header, width: "100px" }}>
              <div>Last</div>Name
            </th>
            <th style={{ ...header, width: "175px" }}>
              Email Address
            </th>
            <th style={{ ...header, width: "150px" }}>
              <div>Country of</div>Residence
            </th>
            <th style={{ ...header, width: "100px" }}>
              <div>Date of Last</div>Interaction
            </th>
            <th style={{ ...header, width: "100px" }}>
              <div>Date</div>Added
            </th>
          </tr>
        </thead>
        <tbody>
        {renderData()}
        </tbody>
      </table>        
    );
}