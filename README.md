
# Remazing Challenge

Web application built as a code challenge provided by Remazing Team.
Demo credentials email: nicolasleivab@gmail.com, password: remazing1

<br  />

<p align="center"><a  href="https://remazing-challenge.herokuapp.com/">Live</a></p>


## Built With

  

-  [React](https://reactjs.org/): For creating the different reusable components. React Context API is used for user authentication state management and modal display.

- [Sass](https://sass-lang.com/): For creating custom SCSS styling and using styling variables across the different components.

-  [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/): For the server setup and creating the user and brand routes to interact with the API.

-  [MongoDB](https://www.mongodb.com/cloud/atlas): For storing and getting mock up data to display in the app.

  

## Versioning

  

-  [Git](https://git-scm.com) is used for version control.

 
---

 
#### How to run this app locally


1. Clone this repository

2. Install server dependencies from root folder with `npm install`

3. Install client dependencies from the root folder with `npm run clientinstall`

4. Insert in the config folder the default.json with the required credentials to connect with the MongoDB cloud cluster

5. Run `npm run dev` which will start both server and client with concurrently. After successfully starting the app open [localhost:3000](http://localhost:3000/) in the browser and login with demo credentials email: nicolasleivab@gmail.com and password: remazing1
