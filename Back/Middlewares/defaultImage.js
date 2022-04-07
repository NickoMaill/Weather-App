function defaultImage(req, _res, next) {
	console.log(req.body.gender);
  if (req.body.gender === "male") {
    req.defaultImage = "/public/images/he.webp";
  }

  if (req.body.gender === "female") {
    req.defaultImage = "/public/images/she.webp";
  }

  if (req.body.gender === "other") {
    req.defaultImage = "/public/images/yelle.webp";
  }
  console.log(req.defaultImage);
  next();
}

module.exports = defaultImage;
