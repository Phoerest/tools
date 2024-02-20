import update from "./update.js"

export default function() {
	clearInterval(this?.interval)
	this.endTime = this.milliSecond + new Date().getTime()
	update.call(this)
	this.interval = setInterval(
		update.bind(this),
		this.updateInterval)
}