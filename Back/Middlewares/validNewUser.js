const Joi = require("joi");

const newUser = Joi.object({
	userId: Joi.number(),
	name: Joi.string().min(5).max(30).required(),
	surname: Joi.string().min(5).max(30).required(),
	gender: Joi.string(),
	otherGender: Joi.string(),
	birthDate: {
		day: Joi.number().min(1).max(31).required(),
		month: Joi.string().required(),
		year: Joi.number().min(1940).max(2012).required(),
	},
	userAddress: {
		number: Joi.number().min(1).max(3000).required(),
		street: Joi.string().min(1).max(50).required(),
		district: Joi.string().min(1).max(50).required(),
		city: Joi.string().min(1).max(50).required(),
	},
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
		.required(),
	password: Joi.string()
		.required()
		.regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
	repeatPassword: Joi.ref("password"),
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
