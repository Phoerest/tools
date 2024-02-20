import parse from '../utils/parse.js'
import update from './update.js'

export default function(time) {
	clearInterval(this?.interval)
	this.endTime = parse.toMilli(time)
	update.call(this)
	this.interval = setInterval(
		update.bind(this),
		this.updateInterval)
}