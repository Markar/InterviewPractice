# Hooks

## useRef
- This hook allows you to work directly with dom nodes. Useful in this case for bringing a non-react library into react. 90% of use cases are for accessing the dom directly.

- Refs also allow you to keep track of a specific node. React can destroy/create elements at any time, so if you need object equality like obj === obj2, you need to use a ref.

## memo - import {memo} from 'react'
- Memo also makes sure that as long as the props don't change, the component won't rerender. This is beneficial for performance, but also for maintaining the state of an object

- Do not map everything in memo, should be a rare usage.

- Have to use a ref (in this case, the div rendering three.js) passed to memo to make sure the object is ===.

## useReducer
- Takes in state and an action, returns new state.
- Helps with testability, no side effects
- The reducer is basically a switch statement that you dispatch to
- Basically redux without the library. Still call dispatch and have things like increment/decrement

## useMemo
- `const value = useMemo(() => expensive(count), [count]);`
- Only recalculate when count is different
- Improves performance for expensive calculations

## useCallback
- `const memoizedCallback = useCallback(aUsefulCallback, []);`
- Used with the memo function
- Used when you don't want something to rerender ever
- Mostly recreates the useMemo hook, probably best to avoid
- Use minimally, when you really need a performance bump

## useLayoutEffect
- Allows you to get one rerender
- Only useful when you need something after it has already been rendered
- Similar to class based didMount, so this can be useful for converting class -> hooks
- Useful for animations
```
useLayoutEffect(() => {
    setWidth(x);
    setHeight(y);
});
```
## useID
- Useful for design systems
- Associate an input and a label
- Returns a unique identifier that will be consistent within a function, and consistent across multiple renders
- For reusing the id, do not set a second id to useID() directly.
```
const id = useId();
const id2 = id + '-two';
```
- Not for use in map, loops, etc - this is a hook, and you can not use hooks in render functions

# useImperativeHandle
- Mostly for library authors
- Exposes a child to the parent

# useDebugValue
- Mostly for library authors
- This is for exposing errors in the react dev tools in custom hooks

# useDeferredValue
- high vs low priority loading
- not really useful for most applications


# useTransition

# useSyncExternalStore
- For library authors

# useInsertionEffect
- For library authors
- Mostly for CSS-in-JS libraries (Emotion, styled-components)

# Code Splitting (Performance gains)
- This should only be used for large enough chunks, or it will slow down the app. Measure the kbs, 10s of kb.
- bundlephobia.com to check bundle size
- We should have a bundle size target
- import lazy, Suspense
- const Details = lazy(() => import("./Details"));
- Wrap app.jsx components in `<Suspense>` block
- Remix does this for you

# Server Side Rendering
- Nextjs does this for you
- Works worse for web crawlers, so conditionally do this based on crawler searching
- Add ClientApp.jsx
- Anything that only happens in the browser, like analytics, goes here
- index.html has to load ClientApp
- Also need to add ServerApp.jsx
``` 
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

hydrateRoot(
    document.getElementById("root"),
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```
# Testing
- Mock fetch requests, don't want to hammer our apis with testing.
- Shallow rendering works better for snapshot testing, but generally snapshot testing not recommended
- Snapshot tests best used for verifying json responses haven't changed.
### Coverage
- Add coverage to scripts in package.json, test:coverage, vitest --coverage
- npm run test:coverage, will ask for install, confirm
- This will let you examine files to see what isn't covered, and you can determine what's important to cover
- Compiled with node, but uses Istanbul for visual coverage report
- Vitest vscode extension, add test:watch allows you to watch the test





