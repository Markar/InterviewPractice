import { useRef, useEffect, useState } from 'react'

// Refs are often referred to as an "escape hatch" to be able to work with a DOM element directly.
// They allow us to do certain operations that can't be done through React otherwise, such as clearing or focusing an input.
export default function Refs() {
    const [text, setText] = useState('');
    const ref = useRef();

    useEffect(() => {        
        setText(ref?.current?.id);
    }, [])

    return (
        <>
            <h2 ref={ref} id="Id from Ref">
                Refs Example
            </h2>
            <div>
                {text}
            </div>
        </>
    );
}