## Compared to functional components

### Hard to use hooks with class components. We would have to wrap the hook in another component, and then pass that component into the class based component. 

### No hooks inside class based components
- Use state to handle things:
 const {active} = this.state;
- Functions have to use anonymous functions to maintain the scope of the curent component.

```
    import { Component } from 'react';

    class Carousel extends Component {
        state = {
            active: 0
        }

        handleIndexClick = (e) => {
            this.setState({
                active: +event.target.dataset.index
                // the + converts it to a number
            })
        }

        static defaultProps = {
            images: ["url/pets/none.jpg"]
        }

        render() {
            const { active } = this.state
            const { images } = this.props

        }

        return (
            <div className='carousel'>
                <img src={images[active]} alt="animal hero" />
                <div className='carousel-smaller'>
                    {images.map((photo, index) => (
                    // eslint-disable-next-line
                    <img
                        data-index={index}
                        key={photo}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                    />
                ))}
                </div>
            </div>
        );
    }       
```

### Lifecycle methods
Hooks breaks all of this down to useEffect
- componentWillUnmount
- componentDidMount
- useful for errors
- Can be used alongside hook based components, but can't use hooks inside. 

