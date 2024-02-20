import start from './stopwatch/start.js'
import stop from './stopwatch/stop.js'
import resume from './stopwatch/resume.js'
import lap from './stopwatch/lap.js'

export default function(config) {
	this.config = config
	this.start = start
	this.stop = stop
	this.resume = resume
	this.lap = lap
	this.laps = []
}