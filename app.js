const express = require("express");

// import Routes
const RegistrationRouter = require("./routes/usersRouter");

// Import Database
const db = require("./data/config/database");
db.authenticate()
.then(() => console.log("Database conected... "))
.catch(err => console.log("Connection error => ", err));

const PORT = 5000;
const app = express();

app.use((req,res, next) => {
    console.log("Request => ", new Date());
    next();
});

app.use("/api/users", RegistrationRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

