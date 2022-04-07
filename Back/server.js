//LIBRARY IMPORT
const express = require("express");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
dotenv.config({
	path: "./config.env",
});
const cookieParser = require("cookie-parser");

//MIDDLEWARE IMPORT
const cors = require("./middlewares/cors");

//ROUTES IMPORT
const user = require("./Routes/user");


app.use(express.json());
app.use(express.static("public"));
app.use(cors);
app.use(cookieParser())
app.use("/user", user);

app.get("/", (_req, res) => {
	res.send("Bonjour");
});

app.get("*", (_req, res) => {
	res.status(404).send("Page not found");
});

app.listen(PORT, () => console.log("Listening on port 8000"));
