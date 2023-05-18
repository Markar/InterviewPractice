# Setup
npm install --save-dev prettier
- Remove ^'s for old projects
## Prettier
- Create .prettierrc at root
- Open vscode settings, search for format on save and enable it
- Install prettier code formatter (with 25m+ downloads)
- Back to settings, search prettier, check Prettier: Require Config

- package.json
    - "scripts": {
        "dev": "vite",
        "build": v"ite build",
        "preview": "vite preview",
        "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\""
        "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --quiet
        "test": "echo \"Error: no test specified\" && exit 1"                
    }

## Eslint
- npm i -D eslint eslint-config-prettier
- Make .eslintrc.json, prettier has to come last
    ```
     { "extends" : [
            "eslint:recommended", 
            "plugin:import/errors",
            "plugin:react/recommended",
            "plugin:jsx-a11y/recommended",
            "plugin: react-hooks/recommended",
            "prettier"
        ],
        "rules": {
            "react/prop-types": 0,
            "react/react-in-jsx-scope": 0
        },
        "plugins": [
            "react",
            "import",
            "jsx-a11y"            
        ]
        "parserOptions": {
            "ecmaVersion": 2022,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },
        "env": {
            "es6": true,
            "browser": true,
            "node": true
        },
        "settings": {
            "react": {
                "versions": "detect"
            },
            "import/resolver": {
                "node":
                {
                    "extensions": [".js", ".jsx"]
                }
            }
        }
     }
    ```
- Install ESLint extension in VSCode, add lint to package.json
    ```
    "scripts": {
        "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --quiet
    }
    ```
- Add .gitignore, copy from somewhere else and maintain it

## Vite setup (quick in French) 
- Build tool uses rollup, older versions use parcel and webpack
- npm install -D vite @vitejs/plugin-react
- config.vite.js, root needs to point to wherever the src file is
```
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: "src"
});
```
- npm i react react-dom
- npm i -D eslint-plugin-import eslint-plugin-jsx eslint-plugin-react
- npm i -D eslint-plugin-react-hooks
