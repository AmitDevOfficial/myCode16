const connectToMongoDB = require("./db")
const express = require("express");
const authRouter = require("./routes/auth")
const notesRouter = require("./routes/notes")
var cors = require('cors')

connectToMongoDB();
const app = express();
const port = 8000;

app.use(cors())
app.use(express.static("./public"))
//we can use this line beacuse we have to push the data from the database and this is a middle ware and also we can get the value to push the testing api in thunder-client
app.use(express.json())

// app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);


app.listen(port, () => {    
  console.log(`Code16-Server app listening on port`, port)
})