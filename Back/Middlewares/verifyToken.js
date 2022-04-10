const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

function verifyToken(req, res, next) {
	const date = new Date();

	jwt.verify(req.cookies.userCookie, SECRET, (err, decode) => {
		if (err !== null) {
			if (date >= err.expiredAt) {
				return res.status(401).send("expired token");
			} else {
				return res.status(401).send("invalid token");
			}
		}

		if (decode !== undefined) {
			return req.id = decode.id;
		}
	});

	next();
}

module.exports = verifyToken;
