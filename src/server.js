require('dotenv/config');

const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port ", process.env.PORT);
});