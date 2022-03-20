const Joi = require("joi");

const newUser = Joi.object({
    userId: Joi.number(),
	name: Joi.string().min(5).max(30).required(),
	surName: Joi.string().min(5).max(30).required(),
	gender: Joi.string(),
	otherGender: Joi.string(),
	birthDay: {
		birthDay: Joi.number().min(1).max(31).required(),
		birthMonth: Joi.string().required(),
		birthYear: Joi.number().min(1940).max(2012).required(),
	},
	userAddress: {
		addressNumber: Joi.number().min(1).max(3000).required(),
		streetAddress: Joi.string().min(1).max(50).required(),
		districtAddress: Joi.string().min(1).max(50).required(),
		cityAddress: Joi.string().min(1).max(50).required(),
	},
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
	password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
	repeat_password: Joi.ref("password"),
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
