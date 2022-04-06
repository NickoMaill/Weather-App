const currentDate = (type) => {
	const newDate = new Date();

	const date = {
		year: newDate.getFullYear().toString(),
		month: newDate.toDateString().substring(4, 7),
		day: newDate.getDay().toString(),
		time: `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`,
	};

	if (type === "file") {
		return `${date.day}-${date.month}-${date.year}-${date.time}`
	} else {
		return date;

	}
};

module.exports = currentDate;

