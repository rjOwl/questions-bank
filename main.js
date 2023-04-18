const express = require('express');

require('dotenv').config()
require("./boot/dbConnection");


const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());


const questionsRouter = require('./routes/questions');
const tagsRouter = require('./routes/tags');

/*  Routes */
app.use("/api/v1/questions", questionsRouter)
app.use("/api/v1/tags", tagsRouter)


/////////

// Application Level Middleware to trap request Info
app.use("/", (req, res) => {
    console.log(`Application Level Middleware : { Time : ${new Date()} , Method : ${req.method} , URL : ${req.url}}`);
    res.send("OK")
})


/* Start The HTTP Server */
app.listen(PORT, (err) => {
    if (err) console.log(err)
    else console.log(`Server Started On Port : ${PORT}`)
})