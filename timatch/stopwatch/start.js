import update from './update.js'

export default function() {
	clearInterval(this?.interval)
	this.laps = []
	this.startTime = new Date().getTime()
	this.lapTime = this.startTime
	update.call(this)
	this.interval = setInterval(
		update.bind(this),
		this.updateInterval)
}