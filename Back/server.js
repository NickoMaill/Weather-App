const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (_req, res) => {
	res.send("Bonjour");
});

app.get("*", (_req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => console.log("Listening on port 8000"));
