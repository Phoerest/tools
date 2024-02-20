# Timatch

A timing module with integrated timer, stopwatch and additional funcionalities.

# Usage example

## Timer

```
import timatch from './timatch.js'

const tm = new timatch.timer();

tm.updateInterval = 1000
tm.format = 'milliseconds'
tm.onUpdate = (time) =>
	console.log(time)
tm.onFinish = (time) =>
	console.log(time)

tm.start({
	hours: 0,
	minutes: 1,
	seconds: 30
})
setTimeout(() => tm.stop(), 5000)
setTimeout(() => tm.resume(), 10000)
setTimeout(() => tm.stop(), 15000)
setTimeout(() => tm.start(
	{ hours: 0, minutes: 0, seconds: 10 }),
	20000)
```
## Stopwatch

```
import timatch from './timatch.js'

const tm = new timatch.stopwatch();

tm.updateInterval = 1000
tm.onUpdate = (time, lapTime) =>
	console.log(time, lapTime, tm.laps)

tm.start()
setTimeout(() => tm.stop(), 5000)
setTimeout(() => tm.resume(), 10000)
setTimeout(() => tm.lap(), 15000)
setTimeout(() => tm.lap(), 25000)
setTimeout(() => tm.stop(), 30000)
tm.start()
setTimeout(() => tm.stop(), 5000)
```