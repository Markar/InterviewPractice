# Context API

```
import { createContext, useContext } from 'react';

const PostContext = createContext()

function App() {
  const post = { title: "My Blog Post!" };

  return (
    <PostContext.Provider value={post}>
      <Blog />
    </PostContext.Provider>
  );
}

function Blog() {
  return <BlogPost />
}

function BlogPost() {
  const post = useContext(PostContext)

  return <h1>{post.title}</h1>
}
```

# Ref example
Refs are often referred to as an "escape hatch" to be able to work with a DOM element directly. They allow us to do certain operations that can't be done through React otherwise, such as clearing or focusing an input.

```
import { useRef } from 'react'

function MyComponent() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current) // reference to div element
  }, [])

  return <div ref={ref} />
}
```

# Context API vs Redux
When do you use React Context vs Redux?

Redux is probably the most commonly used third-party global state library for React, but you can replace the word "Redux" with any global state library for React.
React context is a way to provide and consume data throughout our application without using props.

React context helps us prevent the problem of "props drilling", which is when you are passing data with props through components that don't need it.

Instead, with context we can consume the data exactly in the component that needs it.

While we only use Context to get or "read" values globally in our application, Redux and other third-party state libraries allow us to both read and update state.

Context is not a replacement for a third-party state library like Redux because it is not built for state updates. This is because any time the value provided on Context changes, all of its children will re-render, which can hurt performance.

# Recoil
Recoil is similar to the context api, but allows for writing easily as well. Experimental by FB, matches the React pattern well. 

# What are the useCallback & useMemo hooks used for?
The useCallback and useMemo hooks exist to improve our components' performance.

useCallback is to prevent functions that are declared within the body of function components from being recreated on every render.

This can lead to unnecessary performance issues, especially for callback functions that are passed down to child components.

useMemo, on the other hand, memoizes an expensive operation that we give it.

Memoization is a technical term for functions that are able to "remember" past values they have computed if their arguments have not changed. If so, the function returns the "remembered" value.

In other words, we may have a calculation that takes a significant amount of computing resources and we want it to be performed as sparingly as possible.

# What are synthetic events in React?
Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.

The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.

# Explain the lifecycle methods of components.
getInitialState(): This is executed before the creation of the component.

componentDidMount(): Is executed when the component gets rendered and placed on the DOM.

shouldComponentUpdate(): Is invoked when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.

componentDidUpdate(): Is invoked immediately after rendering takes place.

componentWillUnmount(): Is invoked immediately before a component is destroyed and unmounted permanently.

# What is new in React 18
Automatic Batching (outside of event handlers)
Transitions 
Suspense on server for lazy-loading on the server
