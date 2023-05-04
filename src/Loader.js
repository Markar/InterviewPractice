import React, { useState, createContext } from 'react';

import { AddCommas, PhoneData, PhoneNumber, PrefixSum, LetterPhoneNumber } from "./Questions/Fundamentals";
import { SortedArrays, NGram, TwoSum, Sudoku } from './Questions/DsAlgo';
import { EmployeeChart } from './Questions/NextDoor/Recusive';
import { HtmlTable, TicTacToe, BlogPost, Refs, ToDo, Counter, Newspaper } from './Questions/React';

export const PostContext = createContext();

export function Loader() {
    const post = { title: "My Blog Post!" };

    const DsAlgo = [
        'SortedArrays',
        'NGram',
        'TwoSum',
        'Sudoku'
    ];

    const Fundamentals = [
        'AddCommas',
        'BindApply',
        'EmployeeChart',
        'LetterPhoneNumber',
        'PhoneNumber',
        'PrefixSum'
    ];

    const ReactComponents = [
        'ContextAPI',
        'Counter',
        'HtmlTable',
        'Refs',
        'TicTacToe',
        'ToDo',
        'Newspaper'
    ];    

    const [component, setComponent] = useState(null);

    function handleComponentChange(comp) {
        setComponent(comp);
    }

    function Blog() {
        return <BlogPost />
    }

    return (
        <>
            <div>
                <h3>React</h3>
                {ReactComponents.map((comp) => {
                    return (
                        <button key={comp} onClick={() => handleComponentChange(comp)}>
                            {comp}
                        </button>
                    );
                })}

                <h3>DsAlgo</h3>
                {DsAlgo.map((comp) => {
                    return (
                        <button key={comp} onClick={() => handleComponentChange(comp)}>
                            {comp}
                        </button>
                    );
                })}

                <h3>Fundamentals</h3>
                {Fundamentals.map((comp) => {
                    return (
                        <button key={comp} onClick={() => handleComponentChange(comp)}>
                            {comp}
                        </button>
                    );
                })}
            </div>
            <div>
                {component === 'PhoneNumber' ? <PhoneNumber data={PhoneData} /> : null}
                {component === 'AddCommas' ? <AddCommas /> : null}
                {component === 'HtmlTable' ? <HtmlTable /> : null}
                {component === 'SortedArrays' ? <SortedArrays /> : null}
                {component === 'NGram' ? <NGram /> : null}
                {component === 'PrefixSum' ? <PrefixSum /> : null}
                {component === 'LetterPhoneNumber' ? <LetterPhoneNumber /> : null}
                {component === 'EmployeeChart' ? <EmployeeChart /> : null}
                {component === 'TicTacToe' ? <TicTacToe /> : null}
                {component === 'ToDo' ? <ToDo /> : null}
                {component === 'TwoSum' ? <TwoSum /> : null}
                {component === 'Counter' ? <Counter /> : null}
                {component === 'Refs' ? <Refs /> : null}
                {component === 'Newspaper' ? <Newspaper /> : null}
                {component === 'ContextAPI' ?
                    <PostContext.Provider value={post}>
                        <Blog />
                    </PostContext.Provider> : null
                }
                {component === 'Sudoku' ? <Sudoku /> : null}
            </div>
        </>
    );
}