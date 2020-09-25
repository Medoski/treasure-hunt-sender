radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(1000)
    id = receivedNumber
})
let id = 0
radio.setGroup(1)
radio.setTransmitPower(1)
id = 1
basic.showNumber(id)
basic.pause(2000)
basic.forever(function () {
    radio.sendNumber(id)
    basic.pause(200)
})
