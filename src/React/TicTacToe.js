import React, { useState } from 'react';
import './HtmlTable.css';
  
const rowClass = {  
  fontSize: "15px",
  fontWeight: "500",  
  height: "50px",
  width: "50px",
  border: "1px",
  "&:hover": {
    backgroundColor: "gray"
  },
};

export default function TicTacToe(props) {    

  const handleClick = (cell) => {
    console.log('cell', cell);
  }

        
    return (
      <>
      <table style={{ height: "500px", width: "500px"}}>
        <tbody>
          <tr key={1}>
            <td style={{ ...rowClass }} onClick={() => handleClick(0)}>x</td>
            <td style={{ ...rowClass }}></td>
            <td style={{ ...rowClass }}>o</td>   
          </tr>
          <tr key={2}>
            <td style={{ ...rowClass }} onClick={() => handleClick(3)}></td>
            <td style={{ ...rowClass }}></td>
            <td style={{ ...rowClass }}></td>            
          </tr>
          <tr key={3}>
            <td style={{ ...rowClass }}></td>
            <td style={{ ...rowClass }}></td>
            <td style={{ ...rowClass }}></td>            
          </tr>
        </tbody>
      </table>      
      </>
  
    );
}