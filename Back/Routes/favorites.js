const express = require("express");
const route = express.Router();
const { Pool } = require("pg");
const verifyToken = require("../Middlewares/verifyToken");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

route.use(verifyToken);

route.get("/", (req, res) => {
	res.send("favorites");
});

module.exports = route;
