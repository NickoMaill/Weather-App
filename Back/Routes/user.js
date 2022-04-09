//LIBRARY IMPORT
const express = require("express");
const route = express.Router();
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });
const multer = require("multer");
const upload = multer({ dest: "public/uploads" });
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//MIDDLEWARES IMPORT
const validNewUser = require("../middlewares/validNewUser");
const defaultImage = require("../middlewares/defaultImage");
const userId = require("../middlewares/newUserId");
const verifyFile = require("../middlewares/verifyFile");

//FUNCTION IMPORT
const currentDate = require("../utils/getCurrentDate");
const mail = require("../utils/sendEmail");

const { SECRET } = process.env;

//create new user
route.post("/register", validNewUser, userId, defaultImage, async (req, res) => {
	const hashedPassword = await bcrypt.hash(req.body.password, 12);
	const token = jwt.sign({ email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName }, process.env.SECRET, {
		expiresIn: "30m",
	});

	try {
		await Postgres.query(
			"INSERT INTO users(user_id, email, first_name, last_name, gender, birth_date, address, password, profile_picture_path, created_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
			[
				req.newId,
				req.body.email,
				req.body.firstName,
				req.body.lastName,
				req.body.gender,
				req.body.birthDate,
				req.body.userAddress,
				hashedPassword,
				req.defaultImage,
				currentDate(),
			]
		);
		mail.sendMail(req.body.email, req.body.firstName, req.body.lastName, token);
		res.sendStatus(201)
	} catch (err) {
		console.error(err);
		return res.status(400);
	}

	console.log("user added");
	// res.json({
	// 	message: "user added",
	// });
});

route.get("/confirm/:confirmationCode", async (req, res) => {
	const tokenDecode = jwt.verify(req.params.confirmationCode, SECRET);
  console.log(tokenDecode);

	try {
		tokenDecode;
		await Postgres.query("UPDATE users SET is_active = $1 WHERE users.email = $2", [true, tokenDecode.email]);
		mail.sendFinalEmail(tokenDecode.email, tokenDecode.firstName, tokenDecode.lastName);
	} catch (err) {
		console.error(err);
		res.status(400);
	}
});

route.post("/profile-picture/:id", upload.single("image"), verifyFile, async (req, res) => {
	let type = path.extname(req.file.originalname);
	let user = await Postgres.query("SELECT * FROM users WHERE users.id=$1", [req.params.id]);
	let fileName = `${user.rows[0].surname}-${user.rows[0].surname}-${currentDate("file")}${type}`;

	let updateProfilePicture = await Postgres.query("UPDATE users SET profile_picture = $1 WHERE user_id= $2", [
		`${req.file.destination}/${fileName}`,
		req.params.id,
	]);

	try {
		updateProfilePicture;
	} catch (err) {
		console.error(err);
		res.status(400);
	}

	fs.renameSync(req.file.path, path.join(req.file.destination, `${fileName}`));
	console.log(req.file.destination);
	res.json({
		message: "profile picture updated!",
	});
});

module.exports = route;
