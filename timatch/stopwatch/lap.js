import parse from '../utils/parse.js'

export default function() {
	const duration = new Date().getTime() - this.lapTime

	if (this?.format == 'milliseconds')
		this.laps.push(duration)
	else this.laps.push(parse.toObj(duration))
}