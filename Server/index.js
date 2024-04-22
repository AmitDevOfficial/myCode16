const connectToMongoDB = require("./db")
const express = require("express");
var cors = require('cors')

connectToMongoDB();
const app = express();
const port = 8000;


app.use(cors())

//we can use this line beacuse we have to push the data from the database and this is a middle ware and also we can get the value to push the testing api in thunder-client
app.use(express.json())


app.use("/api/auth", require('./routes/auth'));
app.use("/api/notes", require('./routes/notes'));


app.listen(port, () => {    
  console.log(`Code16-Server app listening on port`, port)
})