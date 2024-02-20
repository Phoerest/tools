export default function() {
	this.milliSecond = this.endTime - new Date().getTime()
	clearInterval(this?.interval)
}