import start from './timer/start.js'
import stop from './timer/stop.js'
import resume from './timer/resume.js'

export default function() {
	this.start = start
	this.stop = stop
	this.resume = resume
	this.updateInterval = 1000
	this.onUpdate = (time) => {}
	this.onFinish = (time) => {}
}