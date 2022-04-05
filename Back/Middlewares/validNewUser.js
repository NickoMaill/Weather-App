const Joi = require("joi");

const newUser = Joi.object({
	name: Joi.string().min(1).max(50).required(),
	surname: Joi.string().min(1).max(50).required(),
	gender: Joi.string().min(1).max(50),
	birthDate: {
		day: Joi.number().min(1).max(31).required(),
		month: Joi.string().required(),
		year: Joi.number().min(1940).max(2012).required(),
	},
	userAddress: {
		street: Joi.string().min(1).max(100).required(),
		district: Joi.string().min(1).max(50).required(),
		city: Joi.string().min(1).max(50).required(),
	},
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr", "ru"] } })
		.min(1)
		.max(50)
		.required(),
	password: Joi.string()
		.min(1)
		.max(1000)
		.required()
		.regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
});

function validNewUser(req, res, next) {
	const validation = newUser.validate(req.body);

	if (validation.error) {
		return res.status(400).json({
			message: "Error 400",
			description: validation.error.details[0].message,
		});
	}

	next();
}

module.exports = validNewUser;
