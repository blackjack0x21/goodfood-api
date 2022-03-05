import express from 'express';
import bodyParser from 'body-parser';

import usersRoute from './routes/user.js'

let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoute)

app.listen(
    port,
    () => console.log(`running on http://localhost:${port}`)
)

app.get('/pizza', (req, res) => {
    res.status(200).send({
        message: "Pizza 🍕",
    })
})