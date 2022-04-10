const express = require("express");
const route = express.Router();
const { Pool } = require("pg");
const verifyToken = require("../Middlewares/verifyToken");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });
const fetch = require("node-fetch");

route.use(verifyToken);

route.get("/search/:cityName", async (req, res) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=${process.env.API_KEY}`
	);
	const data = await response.json();
	res.status(200).json(data);
});

route.get("/", async (req, res) => {
	const userFavorite = await Postgres.query("SELECT * FROM favorites");
});

route.post("/add-favorite", async (req, res) => {});

module.exports = route;
