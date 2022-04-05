const express = require("express");
const route = express.Router();
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });
const validNewUser = require("../middlewares/validNewUser");
const currentDate = require("../utils/getCurrentDate");


route.post("/", async (req, res) => {
	console.log(req.body);
	let users = await Postgres.query("SELECT * FROM users");
	let usersArray = users.rows;

	const verifyEmail = usersArray.find((user) => {
		return user.email === req.body.email;
	});

	if (verifyEmail !== undefined) {
		return res.status(400).json({
			message: "An error happened. this mail address is already used.",
		});
	}



	try {
		await Postgres.query(
			"INSERT INTO users(id, name, surname, gender, birth_date, adress, email, password, created_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)",
			[
				uniqueRandom(10000, 99999),
				req.body.name,
				req.body.surname,
				req.body.gender,
				req.body.birthDate,
				req.body.userAddress,
				req.body.email,
				req.body.password,
				currentDate(),
			]
		);
	} catch (err) {
		console.error(err);
		return res.status(400).json({
			message: "an error happened",
		});
	}

	console.log("user added");
	res.json({
		message: "user added",
		usersArray,
	});
});

module.exports = route;
