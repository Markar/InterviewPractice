import React, { useState } from 'react';

// Question from Nutanix
export default function Counter() {
    const [count, setCount] = useState(0);

    function handleCount(amount) {
        let counter = count; 
        counter += amount;        
        setCount(counter);
    }

    return (
        <>
            <div>
                Counter: ${count}
            </div>

            <div>
                <button onClick={() => handleCount(1)}>Increment</button>
                <button onClick={() => handleCount(-1)}>Decrement</button>
            </div>
        </>
    );    
}