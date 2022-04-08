const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

async function verifyIp(req, res, next) {
	const ip = await Postgres.query("SELECT * FROM ip_blacklist WHERE ip_blacklist.ip_adresse = $1", [req.ip]);
	try {
		if (ip) {
			res.sendStatut(403);
		} else {
			res.sendStatus(200);
		}
	} catch (err) {}

	next();
}

module.exports = verifyIp;
