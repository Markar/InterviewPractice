import { useRef, useEffect, useState } from 'react'

export function Refs() {
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