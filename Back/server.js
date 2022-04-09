//LIBRARY IMPORT
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
dotenv.config({
	path: "./config.env",
});
const handlebars = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");

//MIDDLEWARE IMPORT
const cors = require("./middlewares/cors");

//ROUTES IMPORT
const user = require("./Routes/user");
const favorites = require("./Routes/favorites");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(cookieParser());
app.use("/user", user);
app.use("/favorites", favorites);

app.get("/", (_req, res) => {
	res.send("Bonjour");
});

app.get("*", (_req, res) => {
	res.status(404).send("Page not found");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
