import React, { useState } from 'react';
// implement a react component that takes in the following phone numbers and outputs them in standard (xxx) xxx-xxxx format

export const phoneData = [
    "(408) 345-9256",
    "(213) 639-2633",
    "(415) 876-5539",
    "415-876-5539",
    "4158765539",
    "408-345-9256",
    "<415_trolley>",
    "212.867.5309",
    "213-NEW-CODE",
    "--<<415^troll^39>>--",
  ];
  
export function PhoneNumber(props) {    
    const [number, setNumber] = useState();
    const [formattedData, setFormattedData] = useState(props.data || []);
    

    function strip(num) {
        let result = "";
        for (let i = 0; i < num.length; i++) {
            let char = Number.parseInt(num[i]);
            if (char > -1 && char < 10) {
                result += char;                
            }
        }
        return result;
    }

    function formatString(str) {
        let format = strip(str);
        console.log('format', format);

        let result = "(";
        for (let i = 0; i < format.length; i++) {
            let char = format[i];
            result += char;

            if (i === 2) {
                result += ") ";
            }
            if (i === 5) {
                result += "-";
            }
        }

        if (result.length === 14) {
            return result;
        } else {
            return "Invalid";
        }        
    }

    function renderData() {
        return formattedData.map(row => {
            return (
                <div>{formatString(row)}</div>
            );
        });        
    }

    return (
        <div>
            <h3>Phone Numbers:</h3>
            {renderData()}
        </div>    
    );
}