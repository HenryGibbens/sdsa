function right () {
    cuteBot.moveTime(cuteBot.Direction.right, 100, 0.001)
    basic.showArrow(ArrowNames.East)
}
function left () {
    cuteBot.moveTime(cuteBot.Direction.left, 100, 1)
    basic.showArrow(ArrowNames.West)
}
function stop () {
    cuteBot.stopcar()
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        stop()
    }
    if (receivedString == "right") {
        right()
    } else if (receivedString == "forward") {
        forward()
    } else if (false) {
    	
    } else if (receivedString == "backwards") {
        backwards()
    } else if (receivedString == "left") {
        left()
    }
})
function backwards () {
    cuteBot.moveTime(cuteBot.Direction.backward, 50, 1)
    basic.showArrow(ArrowNames.South)
}
function forward () {
    basic.showArrow(ArrowNames.North)
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 2)
}
radio.setGroup(123)
