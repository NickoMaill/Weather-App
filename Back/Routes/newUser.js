const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/uploads" });
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const validNewUser = require("../Middlewares/validNewUser");
const verifyFile = require("../Middlewares/verifyFile");

route.get("/", cors, (_req, _res) => {});

route.post("/", upload.single("image"), validNewUser, verifyFile, (req, res) => {
	let type = path.extname(req.file.originalname);
	/**code for put newUsersData in dataBase*
	 *
	 *
	 *
	 */

	fs.renameSync(
		req.file.path,
		path.join(req.file.destination, `${req.body.name}-${dayjs().format("DD-MM-YYYY-HH:mm")}.${type}`)
	);
    console.log("user added");
});

module.exports = route;