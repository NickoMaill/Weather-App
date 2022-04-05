const uniqID = require("uniqid");
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });
// console.log(uniqID());
async function userId(req, _res, next) {
	const users = await Postgres.query("SELECT * FROM users");
	const usersData = users.rows;

	function newUserId() {
		let newId = uniqID();
		const verifyUsersId = usersData.find((user) => {
			return user.user_id === newId;
		});

		if (verifyUsersId !== undefined) {
			newUserId();
		} else {
            return newId;
            
		}
	}
	newUserId();
	req.newId = newUserId();
	next();
}

module.exports = userId;
