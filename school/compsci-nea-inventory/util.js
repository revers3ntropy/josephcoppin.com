/**
 * Returns the time in seconds as a nice human-readable string
 * @param {Number} seconds
 * @return {string}
 */
function secondsToReadable (seconds) {
	const rawSeconds = seconds;
	let mins = seconds/60;
	let hours = mins/60;
	let days = hours/24;
	const years = days/365;

	let str = '';

	if (years >= 1) {
		str += `${Math.floor(years)} years `;
		days %= 365;
	}

	if (days >= 1 &&  rawSeconds < 31540000) {
		str += `${Math.floor(days)} days `;
		hours %= 24;
	}

	if (hours >= 1 && rawSeconds < 86400) {
		str += `${Math.floor(hours)} hours `;
		mins %= 60;
	}

	if (mins >= 1 && rawSeconds < 2600) {
		str += `${Math.floor(mins)} minutes `;
		seconds %= 60;
	}

	if (rawSeconds < 60)
		str += `${seconds} seconds`;
	return str;
}

/**
 * @param {Number} time
 * @return {string} - for example, '3 weeks'
 */
window.unixTimeAgo = (time) => {
	return secondsToReadable(
		Math.round(
			new Date().getTime() / 1000
		) - time
	);
}
