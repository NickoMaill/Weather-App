const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

async function verifyEmail(req, res, next) {
	const users = await Postgres.query("SELECT * FROM users");
	const usersArray = users.rows;

	const verifyEmail = usersArray.find((user) => {
		return user.email === req.body.email;
	});

	if (verifyEmail !== undefined) {
		return res.status(400).json({
			message: "An error happened. this mail address is already used.",
		});
	}
	next();
}

module.exports = verifyEmail;
