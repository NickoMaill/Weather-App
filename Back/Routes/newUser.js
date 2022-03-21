const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/uploads" });
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const validNewUser = require("../Middlewares/validNewUser");
const verifyFile = require("../Middlewares/verifyFile");
const dotenv = require("dotenv");
dotenv.config({
	path: "./config.env",
});

route.get("/", async (req, res) => {
	let users;
	try {
		users = await Postgres.query("SELECT * FROM users");
	} catch (err) {
		console.error(err);
		return res.status(400).json({
			message: "an error happened",
		});
	}
	console.log(users.rows);
});

route.post("/", validNewUser, async (req, res) => {

	// let type = path.extname(req.file.originalname);
	let users = await Postgres.query("SELECT * FROM users");
	let usersArray = users.rows;
	const currentDate = {
		year: parseInt(dayjs().format("YYYY")),
		month: dayjs().format("MMMM"),
		day: parseInt(dayjs().format("DD")),
		time: dayjs().format("HH:mm:ss")
	}

	function uniqueRandom(minRandom, maxRandom) {

		const uniqueNumber = Math.floor(Math.random() * (maxRandom - minRandom + 1) + minRandom);
		const newLengthArray = usersArray.length + minRandom;
		const findNewId = usersArray.find((findNewId) => {
			return findNewId.id === uniqueNumber;
		});
		if (newLengthArray.length === maxRandom) {
			return console.log("all value are assigned");
		} else {
			if (findNewId !== undefined) {
				uniqueRandom(maxRandom, minRandom);
			} else {
				return uniqueNumber;
			}
		}
	}

	// fs.renameSync(
	// 	req.file.path,
	// 	path.join(req.file.destination, `${req.body.name}-${dayjs().format("DD-MM-YYYY-HH:mm")}.${type}`)
	// );

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
				currentDate,
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
