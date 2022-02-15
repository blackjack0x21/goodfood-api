const app = require("express")();
const PORT = 8082;

app.listen(
    PORT,
    () => console.log(`running on http://localhost:${PORT}`)
)

app.get('/pizza', (req, res) => {
    res.status(200).send({
        message: "Pizza 🍕",
    })
})