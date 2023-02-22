# super_awesome_challenge

## React app create with Vite.js and Tailwind CSS Utility framework

## Setup

### 
```
cd mock_up_challenge
```

### Install npm packages
```
npm install
```

### Setup tailwind CSS with PostCSS
<b><i> Only</i></b> necessary if npm didn't install correct
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
This should install a postcss.config.js file

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
In your tailwind.config.js file add the following
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add the Tailwind directives to your CSS (index.css)
```
@tailwind base;
@tailwind components;
@tailwind utilities
```

Tailwind should now be installed!

## Start dev enviornment
###
```
npm run dev
```


