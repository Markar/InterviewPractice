# JSX
- .js has to use things like React.createElement
- .jsx allows you to put html directly into javascript
- Lowercase names render html, uppderCase renders components
- Can use self closing tags in jsx that wouldn't work as valid html

# React
- Avoid side effects, only keep state in hooks
```
const [location, setLocation] = useState("");
// Same as
const locationHook = useState("");
const location = locationHook[0];
const setLocation = locationHook[1];
```
- Keys - Allows react to selectively update an array, rather than rendering the whole thing

# Custom Hooks
- Custom hooks encapsulate the useEffect, which makes it testable and the original code cleaner. Best if the code may be used in more than one place, or if the code is large

```
- useBreedList.js
const localCache = {};

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal])
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animals=${animal}`
            )
            const json = await res.json();
            localCache[animal] = json.breeds || []
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    }, [animal]);

    return [breedList, status];
}
```

- Try to avoid the spread operator, be explicit with what params are passed to a component, unless it's a passthrough component.
- Do not ship the dev build to production, 4x larger. Vite handles this automatically.

# Dev tools
- StrictMode currently runs everything twice. Wrap App in Strictmode to use it.
- Look at components section in dev tools to see what's rendering, also shows props
- Use profiler to analyze performance of the app

# React Router
- By far the most popular client side router currently.
- Made by Remix folks
- npm i react-router-dom
- import {BrowserRouter, Routes, Route } into App files
- Wrap app in BrowserRoute tag
- Better to use BrwoserRouter than HashRouter, has better SEO and compatibility. Use HasRouter if required, like with Django.
- Try to use Link rather than `<a href/>` for routing. Link tags use client side caching, so it won't rerender the whole page.
- Focused on routing accessibility

```
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    return <h2>{id}</h2>;
}

export default Details; 
```

# Error boundaries
- Must be written in class components

```
- ErrorBoundary.jsx
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("ErrorBoundary component caught an error", error, info);
        // typically should sent this to third party error log like Sentry, NewRelic, TrackJS etc
    }

    render() {
        if (this.state.hasError) {
            return (
                // Return a static error message
                <h2>
                    There was an error. <Link to="/">Click here</Link>
                </h2>
                // Make a resusable component
                return (
                    this.props.errorComponent
                );
            )
        }

        return this.props.children;
    }
}

export defualt ErrorBoundary;
```
- For the component you want wrapped in the boundary, use a function inside that component

```
function DetailsErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
    // Or reusable version, pass in the error message as a component
    return (
        <ErrorBoundary errorComponent={{<h2>Error</h2>}}>
            <Details {...props} />
        </ErrorBoundary>
    );
}

export default DetailsErrorBoundary;
```
- Pass through all props here, the boundary just needs to pass everything through
- It's better to have a specific error boundary, so only write reusable versions if it makes sense
- You can wrap the whole App in an error boundary, but it won't give specific info
- No need for error boundaries on static content

# Portals

```
// This would be where you need the modal
<div id="modal"></div>

// modal.jsx is the 
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal ({ children }) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        // run right before the component unmounts
        return () => modalRoot.removeChild(elRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);    
}
export default Modal;
```
Now we can use the `<Modal>` component with our custom html as children and it will render on top of the app

# Context
- Only use context when the state requires being used in many places

```
import { createContext } from "react"l

const AdoptedPetContext = createContext();

export default AdoptedPetContext;
```

Now on App.jsx

```
import AdoptedPetContext from "./AdoptedPetContext";

//App
const adoptedPet = useState(null);

//wrap everything
<AdoptedPetContext.Provider value={adoptedPet}>
    <Routes>
    </Routes>
<AdoptedPetContext.Provider/>

// now it can be used in another component
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const [_, setAdoptedPet] = useContext(AdoptedPetContext);
...
<button onClick={() => { 
    setAdoptedPet(pet);
    navigate("/");
}}>
    Yes
</button>
```

- Best to use context for smaller pieces of state, otherwise use a library for state management



