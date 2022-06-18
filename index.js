const express = require('express');
const connect = require('./db')
var cors = require('cors')
connect();
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())
// Available Routes
app.use('/api/c',require('./routes/c'))
app.use('/api/encrypt',require('./routes/encrypt'))
app.use('/api/python',require('./routes/python'))
app.use('/api/java',require('./routes/java'))
app.use('/api/devuser',require('./routes/user'))
app.listen(port,()=>{
    console.log(`We are listening at the localhost:${port}`);
})