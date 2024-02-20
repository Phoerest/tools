const toMilli = (time) =>
	new Date().getTime() + (
		(time.hours * 3600) +
		(time.minutes * 60) +
		(time.seconds)
	) * 1000 + time.milliSeconds

const toObj = (milliSecond) => {
	const second = (milliSecond - (milliSecond % 1000)) / 1000,
		minute = (second - (second % 60)) / 60,
		hour = (minute - (minute % 60)) / 60;
	return { hours: hour,
			minutes: minute % 60,
			seconds: second % 60,
			milliSeconds: milliSecond % 1000 }
}

export default { toMilli, toObj }