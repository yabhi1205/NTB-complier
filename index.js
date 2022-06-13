const express = require('express');
const app = express()
const port = 5000
app.use(express.json())
// Available Routes
app.use('/api/c',require('./routes/c'))
app.use('/api/encrypt',require('./routes/encrypt'))
app.use('/api/python',require('./routes/python'))
app.use('/api/java',require('./routes/java'))
app.listen(port,()=>{
    console.log(`We are listening at the localhost:${port}`);
})