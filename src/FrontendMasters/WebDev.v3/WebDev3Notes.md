### HTML
Vscode comes with Emmet installed, so you can do loremX, hit tab, and generate that much lorem ipsum.
This seems to only work in .html files. 

html:5 will add this
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

### CSS
https://css-tricks.com/

# Fleurons - Pseudoelement
.chapter::after {
    content: "❦";
    font-size: 50px;
    text-align: center;
    display: block;
  }

# margin vs padding
- Margin: spacing outside the element
- Padding: spacing inside the element

# borderbox vs content-box
Border box 
https://www.paulirish.com/2012/box-sizing-border-box-ftw/

```
* {
    box-sizing: border-box;
}
```

Set this on the main css file.
border: 3px; width 100px;
total width is 100px, where context-box would be 106px

# animations
The @keyframes part allows you to define a reusable animation. We could throw spin on anything now.

```
<style>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .spinny-boi {
    animation: spin 0.5s infinite linear;
    display: inline-block;
    font-size: 30px;
  }
</style>
<div class="spinny-boi">🤢</div>
```
# easing
Adds a latency/rubberband effect to the animation, maybe acceleration?

Can be applied to other properties
```
<style>
  @keyframes rainbow {
    100%,
    0% {
      color: rgb(255, 0, 0);
    }
    8% {
      color: rgb(255, 127, 0);
    }
    16% {
      color: rgb(255, 255, 0);
    }
    25% {
      color: rgb(127, 255, 0);
    }
    33% {
      color: rgb(0, 255, 0);
    }
    41% {
      color: rgb(0, 255, 127);
    }
    50% {
      color: rgb(0, 255, 255);
    }
    58% {
      color: rgb(0, 127, 255);
    }
    66% {
      color: rgb(0, 0, 255);
    }
    75% {
      color: rgb(127, 0, 255);
    }
    83% {
      color: rgb(255, 0, 255);
    }
    91% {
      color: rgb(255, 0, 127);
    }
  }
  .rainbow-boi {
    animation: rainbow 4s infinite linear;
    font-size: 30px;
  }
</style>
<div class="rainbow-boi">Rainbow</div>
```


# async/await
promises.then
await
promise.all

