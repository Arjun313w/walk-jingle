basic.forever(function () {
    pins.servoWritePin(AnalogPin.P8, 0)
    pins.servoWritePin(AnalogPin.P2, 45)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P2, 90)
    pins.servoWritePin(AnalogPin.P8, 45)
    basic.pause(500)
})
