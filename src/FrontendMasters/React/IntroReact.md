## JSX
- .js has to use things like React.createElement
- .jsx allows you to put html directly into javascript
- Lowercase names render html, uppderCase renders components
- Can use self closing tags in jsx that wouldn't work as valid html

## React
- Avoid side effects, only keep state in hooks
```
const [location, setLocation] = useState("");
// Same as
const locationHook = useState("");
const location = locationHook[0];
const setLocation = locationHook[1];
```
- Keys - Allows react to selectively update an array, rather than rendering the whole thing

## Custom Hooks
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

## Dev tools
- StrictMode currently runs everything twice. Wrap App in Strictmode to use it.
- Look at components section in dev tools to see what's rendering, also shows props
- Use profiler to analyze performance of the app

## React Router
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



