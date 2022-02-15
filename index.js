const app = require("express")();
let port = process.env.PORT || 3000;

app.listen(
    port,
    () => console.log(`running on http://localhost:${port}`)
)

app.get('/pizza', (req, res) => {
    res.status(200).send({
        message: "Pizza 🍕",
    })
})