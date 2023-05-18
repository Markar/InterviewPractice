# Tailwind
- Methodology for building css.
- Based on a Vite project not using CRA

### Set up
- Generate postcss.config.js and tailwind.config.js.
- `npm i -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init-p`


### Install prettier tailwind
- Remove prettier.rc, replace with prettier.config.js
- `npm install -D prettier-plugin-tailwindcss`

Install vscode Tailwind CSS Intellisense
Install tailwind prettier plugin

Add this to style.css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Add css path to tailwind.config.js content array

# Styling
- Tailwind generally divides the page into 12 chunks: `w-11/12`
- Tailwind has plugins for specific styling systems
- `npm i -D @tailwindcss/forms`
- add require("@tailwindcss/forms") into the plugins array in tailwind config

## Layers
This allows you to use tailwind in your style.css file
Each layer is deeper, so utilities beats components beats base
```
@layer @base {
    body {
        font-family: "Comic Sans MS";

    }
}
```
```
@layer components {
    .search-input {
        @apply w-60 mb-5 block;
    }
}
```