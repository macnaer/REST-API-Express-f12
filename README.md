# REST-API-Express-f12
This project was based on [Node.js](https://nodejs.org/en/download/) version 14.18.2. It gives a user two options to register: as a standard user and as an adminstrator. When logged in, the former can edit their data (password, username, etc) on profile page and delete an account, whilst the latter controls the activity of the users and can see their roles.

## Start
To run this project you have to clone master's branch of [this git repository](https://github.com/macnaer/REST-API-Express-f12) to your desktop. After opening the project in [Visual Studio Code](https://code.visualstudio.com/download) run `npm install` to download all the missing back-end modules; for front-end modules you need to repeat the same action in [client-app](https://github.com/macnaer/REST-API-Express-f12/tree/master/client-app). After this, start the project by using [`concurrently`](https://www.npmjs.com/package/concurrently) module which will simultaniously run front-end and back-end.

## Data 
All the data is located in a file named ['data'](https://github.com/macnaer/REST-API-Express-f12/tree/master/data). Variable 'Config' represents the IP adress of SQL Servers's location. Variable 'Sequelize' helps with SQL database management. Variables 'Name', 'Surname', 'Email', 'Password' and 'Role' are responsible for cognominal information.

## Seeder
Seeder is a file that contains an initial set of data. The 'Name' and 'Surname' of this project's seeder are 'Admin', 'Email' is 'admin@gmail.com', 'Password' is 'Qwerty-1' and 'Role' is 'admin'.
