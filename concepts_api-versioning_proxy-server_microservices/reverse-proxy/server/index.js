const express = require('express')
const app = express();

app.get('/', async (req, res) => {
   res.send('Hello from backend server GET api !')
})

app.listen(process.env.SERVER_PORT, () => {
   console.log(`Server is running on the port ${process.env.SERVER_PORT} !`);
})