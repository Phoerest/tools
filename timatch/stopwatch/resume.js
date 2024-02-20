import update from "./update.js"

export default function() {
	clearInterval(this?.interval)
	this.startTime = this.milliSecond + new Date().getTime()
	this.lapTime = this.lapMilliSecond + new Date().getTime()
	update.call(this)
	this.interval = setInterval(
		update.bind(this),
		this.updateInterval)
}