import parse from '../utils/parse.js'

export default function() {
	this.milliSecond = this.endTime - new Date().getTime()
	const output = this?.format == 'milliseconds' ?
		this.milliSecond : parse.toObj(this.milliSecond)
	if (this.milliSecond < 0) {
		clearInterval(this?.interval)
		return this.onFinish(output)
	}
	this.onUpdate(output)
}