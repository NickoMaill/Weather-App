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

route.get("/favorites", async (req, res) => {
	const userFavorite = await Postgres.query("SELECT favorite_id FROM favorites WHERE favorites.user_id = $1", [req.id]);

	try {
		userFavorite;
		res.json(userFavorite.rows);
	} catch (err) {
		console.error(err);
		res.status(400);
	}
});

route.post("/favorites/add", async (req, res) => {
	try {
		await Postgres.query("INSERT INTO favorites(favorite_id, user_id) VALUES($1, $2)", [req.body.cityID, req.id]);
		res.sendStatus(201)
	} catch (err) {
		console.error(err);
		res.status(400);
	}
});

module.exports = route;
