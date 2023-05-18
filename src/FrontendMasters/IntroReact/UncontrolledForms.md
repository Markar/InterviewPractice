## Uncontrolled forms, with useQuery
- Remove the stateful parts from the html elements: value, onChange
- Add name, id to elements
- Add submit event to the form

```
async function fetchSearch({queryKey}) {
    const {animal, location, breed} = queryKey[1];    
    const res = await fetch(
        `url/pets?animal=${animal}&location=${location}&breed=${brred}`
    );

    if (!res.ok) {
        // useful error msg
        throw new Error(`not okay ${animal}`);
    }

    return res.json();
}

export default fetchSearch;
```

// Now this can be used in SearchParams.jsx
```
const results = useQuery(["search", requestParams], fetchSearch);
const pets = results?.data?.pets ?? [];

// Update the form
<form
    onSubmit{(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
            animal: formData.get("animal") ?? ""
        };
        setRequestParams(obj);
    }}
>
```

