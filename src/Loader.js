import React, { useState } from 'react';

import { phoneData, PhoneNumber } from "./Questions/PhoneNumber";
import { AddCommas } from './Questions/Fundamentals/AddCommas';
import { HtmlTable } from './Questions/React/HtmlTable';
import { SortedArrays } from './Questions/DsAlgo/SortedArrays';
import { NGram } from './Questions/DsAlgo/NGram';
import { TwoSum } from './Questions/DsAlgo/TwoSum';
import { PrefixSum } from './Questions/NextDoor/PrefixSum';
import { LetterPhoneNumber } from './Questions/NextDoor/LetterPhoneNumber';
import { EmployeeChart } from './Questions/NextDoor/Recusive';
import { TicTacToe } from './Questions/React/TicTacToe';
import { ToDo } from './Questions/React/Todo';
import { Counter } from './Questions/React/Counter';

export function Loader() {
    const components = [
       'PhoneNumber',
       'AddCommas', 
       'HtmlTable',
       'SortedArrays',
       'NGram', 
       'TwoSum',
       'PrefixSum',
       'LetterPhoneNumber',
       'EmployeeChart',
       'TicTacToe',
       'ToDo',
       'Counter'
    ];

    const [component, setComponent] = useState('PhoneNumber');

    function handleComponentChange(comp) {
        setComponent(comp);
    }
 
    return (
        <>
            <div>
                {components.map((comp) => {
                    return (
                        <button key={comp} onClick={() => handleComponentChange(comp)}>
                            {comp}
                        </button>
                    );
                })}
                
            </div>
            <div>            
                { component === 'PhoneNumber' ? <PhoneNumber data={phoneData} /> : null }
                { component === 'AddCommas' ? <AddCommas /> : null }
                { component === 'HtmlTable' ? <HtmlTable /> : null }
                { component === 'SortedArrays' ? <SortedArrays /> : null }
                { component === 'NGram' ? <NGram /> : null }
                { component === 'PrefixSum' ? <PrefixSum /> : null }
                { component === 'LetterPhoneNumber' ? <LetterPhoneNumber /> : null }
                { component === 'EmployeeChart' ? <EmployeeChart /> : null }
                { component === 'TicTacToe' ? <TicTacToe /> : null }
                { component === 'ToDo' ? <ToDo /> : null }
                { component === 'TwoSum' ? <TwoSum /> : null }
                { component === 'Counter' ? <Counter /> : null }
            </div>        
        </>
    );
}