# React Dashboard Accelerator

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

**Application Name:** React Dashboard Accelerator.

**Application Description:** A Node.js template for building dashboards quickly on the React Framework.

**Prefix:** REACT_Dash.

**Authors:** Calum Bell

**Development Languages:** JavaScript (Node JS, React)

**Development Framework(s):** React, React Router, Babel, Webpack

**Development Standards:** This Accelerator comes with AirBNB Developer Standards. These standards can be found in the `.eslintrc`

------------------------------

**Prerequisites**

1. Install Webpack by running `sudo npm install webpack -g`

------------------------------

**Get Started:**

1. Clone the Repo.
2. Run `npm install` to install all the node modules locally
3. Open up another tab in your terminal or command line. In one terminal / command line run `webpack -w`. This will start Webpack and watch your React code for changes
4. In your other tab run `heroku local` (if using heroku) or `npm start` to start your server.
5. Go to localhost:5000 and your sever should be running there.

------------------------------

**Basic Usage:**

This accelerator is powered by react-router, a powerful, quick routing system for React. It is strongly recommended that you read their [documentation](https://github.com/ReactTraining/react-router#readme)

To use this flavour of the web accelerator, create your react pages under: `src/components/pages` and import them into: `src/components/router.jsx`

*Warning:* This example - and its components - uses bootstrap, to change or extend this, modify/add your dependencies insrc/public/index.html

------------------------------

**Folder Structure:**

**-src** :: *This folder contains all the server controllers, React router routes and front end files as well*

**--components** :: *This folder contains all the react components, including the react router*

**---pages** :: *React router pages go in here*

**--controllers** :: *This file contains all the server side controllers*

**--public** :: *This folder contains all the front end scss javascript and images*

**---scss** :: *SASS files*

**---css** :: *CSS files*

**---img** :: *All Images*

**---js** :: *All Client-Side JavaScript files. Browserify is ran on these files so you are able to write modular code*

------------------------------
