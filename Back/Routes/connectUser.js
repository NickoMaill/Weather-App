const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/uploads" });
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const verifyFile = require("../middlewares/verifyFile");

route.get("/connection/:email/:password", async (req, res) => {
	console.log(req.params);
	const user = await Postgres.query("SELECT * FROM users WHERE email=$1 AND password=$2", [
		req.params.email,
		req.params.password,
	]);

	try {
		user;
	} catch (err) {
		console.error(err);
		return res.status(400).json({
			message: "wrong email or password",
		});
	}
	res.json(user.rows);
});

route.post("/profile-picture/:id", upload.single("image"), verifyFile, async (req, res) => {
	let type = path.extname(req.file.originalname);
	let user = await Postgres.query("SELECT * FROM users WHERE users.id=$1", [req.params.id]);
	let fileName = `${user.rows[0].surname}-${user.rows[0].surname}-${dayjs().format("DD-MM-YYYY-HH:mm")}${type}`;

	let updateProfilePicture = await Postgres.query("UPDATE users SET profile_picture = $1 WHERE id= $2", [
		`${req.file.destination}/${fileName}`,
		req.params.id,
	]);

	try {
		updateProfilePicture;
	} catch (err) {}

	fs.renameSync(req.file.path, path.join(req.file.destination, `${fileName}`));
	console.log(req.file.destination);
	res.json({
		message: "profile picture updated!",
	});
});

module.exports = route;
