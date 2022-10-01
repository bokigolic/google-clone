# Install Tailwind CSS with Create React App

After creating react app, you need to install Tailwind css

## Steps


Install Tailwind via npm
Install Tailwind and its peer-dependencies using npm:

### `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`



Install and configure CRACO
Since Create React App doesn’t let you override the PostCSS configuration natively, we also need to install CRACO to be able to configure Tailwind:

### `npm install @craco/craco`


If an error occurs while installing CRACO, you can use this line of code

###  `npm install @craco/craco --save --legacy-peer-deps`


Once it’s installed, update your scripts in your package.json file to use craco instead of react-scripts for all scripts except eject:

     "start": "craco start",
     "build": "craco build",
     "test": "craco test",

# Next, create a craco.config.js at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins:// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}


### Create your configuration file
Next, generate your tailwind.config.js file:

### `npx tailwindcss-cli@latest init`

### Configure Tailwind to remove unused styles in production
In your tailwind.config.js file, configure the purge option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:

  // tailwind.config.js
  module.exports = {
   purge: [],
   ## purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'



  Make global.css file in root source component, 
  Then, include tailwind into CSS. Open the ./src/index.css replacing the original file contents:

/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

and last step is importing global.css in App.js