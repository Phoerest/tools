export default function() {
	this.milliSecond = this.startTime - new Date().getTime()
	this.lapMilliSecond = this.lapTime - new Date().getTime()
	clearInterval(this?.interval)
}