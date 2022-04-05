const currentDate = () => {
	const newDate = new Date();

	const date = {
		year: newDate.getFullYear().toString(),
		month: newDate.toDateString().substring(4, 7),
		day: newDate.getDay().toString(),
		time: `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`,
	};
	return console.log(date);
};

module.exports = currentDate;

