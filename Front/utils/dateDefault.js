export const currentSelectedDate = (type) => {
	const date = new Date();

	if (type !== "day" && type !== "month" && type !== "year") {
		console.error("wrong type of value");
	}

	if (type === "day") {
		if (date.getDay() < 10) {
			return "0" + date.getDay();
		} else {
			return date.getDay().toString();
		}
	}

	if (type === "month") {
		if (date.getMonth() < 10) {
			return "0" + date.getMonth();
		} else {
			return date.getMonth();
		}
	}

	if (type === "year") {
		return date.getFullYear().toString();
	}
};

export const formatMonth = (stringValue) => {
	switch (stringValue) {
		case "Janvier":
			return "01";
		case "Février":
			return "02";
		case "Mars":
			return "03";
		case "Avril":
			return "04";
		case "Mai":
			return "05";
		case "Juin":
			return "06";
		case "Juillet":
			return "07";
		case "Août":
			return "08";
		case "Septembre":
			return "09";
		case "Octobre":
			return "10";
		case "Novembre":
			return "11";
		case "Décembre":
			return "12";
		default:
			break;
	}
};
