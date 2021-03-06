const Joi = require("joi");
const { Pool } = require("pg");
const currentDate = require("../utils/getCurrentDate");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

const newUser = Joi.object({
	firstName: Joi.string().min(1).max(50).required(),
	lastName: Joi.string().min(1).max(50).required(),
	gender: Joi.string().min(1).max(50),
	birthDate: {
		day: Joi.string().min(1).max(31).required(),
		month: Joi.string().required(),
		year: Joi.string().min(1).max(5).required(),
	},
	userAddress: {
		street: Joi.string().min(1).max(100).required(),
		district: Joi.string().min(1).max(50).required(),
		city: Joi.string().min(1).max(50).required(),
		country: Joi.string().min(1).max(50).required(),
	},
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr", "ru"] } })
		.min(1)
		.max(50)
		.required(),
	password: Joi.string()
		.min(8)
		.max(1000)
		.required()
		.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
});

function validNewUser(req, res, next) {

	const validation = newUser.validate(req.body);
	const body = req.body;
	const regex = /<script[\s\S]*?>[\s\S]*?<\/script>/;


	Object.keys(body).map((key, _i) => {
		if (body[key].toString().match(regex)) {
			console.warn("script injection detected")
			return res.sendStatus(403);
		}
	});
	
	Object.keys(body.birthDate).map((key, _i) => {
		if (body.birthDate[key].match(regex)) {
			console.warn("script injection detected")
			return res.sendStatus(403);
		}
	})

	Object.keys(body.userAddress).map((key, _i) => {
		if (body.userAddress[key].match(regex)) {
			console.warn("script injection detected")
			return res.sendStatus(403);
		}
	});

	if (validation.error) {
		return res.status(400).json({
			message: "Error 400",
			description: validation.error.details[0].message,
		});
	}
	next();
}

module.exports = validNewUser;
