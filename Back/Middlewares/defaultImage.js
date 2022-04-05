function defaultImage(_res, req, next) {
	if (req.body.gender === "male") {
		return (req.defaultImage = "/public/images/he.webp");
	}

	if (req.body.gender === "female") {
		return (req.defaultImage = "/public/images/she.webp");
	}

	if (req.body.gender === "other") {
		return (req.defaultImage = "/public/images/yelle.webp");
	}
	next();
}

module.exports = defaultImage;
