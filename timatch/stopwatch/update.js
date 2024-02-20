import parse from '../utils/parse.js'

export default function() {
	const currentTime = new Date().getTime()
	this.milliSecond = currentTime - this.startTime
	this.lapMilliSecond = currentTime - this.lapTime
	if (this?.format == 'milliseconds')
		return this.onUpdate( this.milliSecond,
			this.lapMilliSecond )
	else this.onUpdate( parse.toObj(this.milliSecond),
		parse.toObj(this.lapMilliSecond) )
}