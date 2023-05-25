radio.onReceivedString(function (receivedString) {
    if (receivedString == "Open") {
        bitbot.go(BBDirection.Forward, 50)
        bitbot.setLedColor(0xFFFFFF)
    } else if (receivedString == "LEDL") {
        bitbot.rotate(BBRobotDirection.Left, 20)
        bitbot.setPixelColor(0, 0xFFFF00)
        bitbot.setPixelColor(1, 0xFFFF00)
        bitbot.setPixelColor(2, 0xFFFF00)
        bitbot.setPixelColor(3, 0xFFFF00)
        bitbot.setPixelColor(4, 0xFFFF00)
        bitbot.setPixelColor(5, 0xFFFF00)
    } else if (receivedString == "LEDR") {
        bitbot.rotate(BBRobotDirection.Right, 20)
        bitbot.setPixelColor(6, 0xFFFF00)
        bitbot.setPixelColor(7, 0xFFFF00)
        bitbot.setPixelColor(8, 0xFFFF00)
        bitbot.setPixelColor(9, 0xFFFF00)
        bitbot.setPixelColor(10, 0xFFFF00)
        bitbot.setPixelColor(11, 0xFFFF00)
    } else if (receivedString == "rainbow") {
        bitbot.ledRainbow()
        for (let index = 0; index < 5; index++) {
            music.playMelody("C D C E G A F G ", 1500)
            bitbot.rotatems(BBRobotDirection.Left, 60, 500)
            music.playMelody("C D C E G A F G ", 1500)
            bitbot.rotatems(BBRobotDirection.Right, 60, 500)
            music.playMelody("C D C E G A F G ", 1500)
        }
    } else if (receivedString == "AB") {
        bitbot.buzz(true)
        basic.pause(1000)
        bitbot.buzz(false)
    } else if (receivedString == "A") {
        bitbot.setLedColor(0x00FF00)
        bitbot.setLedColor(0x00FF00)
        bitbot.setLedColor(0x00FF00)
        music.playMelody("D F A C5 A C5 A C5 ", 220)
    } else if (receivedString == "B") {
        for (let index = 0; index < 3; index++) {
            basic.pause(100)
            bitbot.setLedColor(0xFFFFFF)
        }
    } else if (receivedString == "Close") {
        bitbot.go(BBDirection.Reverse, 50)
        bitbot.setLedColor(0xFF0000)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.setLedColor(0xFFFFFF)
    } else if (name == "B") {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.setLedColor(0xFF0000)
    } else if (name == "L") {
        bitbot.rotate(BBRobotDirection.Left, 50)
        bitbot.setPixelColor(0, 0xFFFF00)
        bitbot.setPixelColor(1, 0xFFFF00)
        bitbot.setPixelColor(2, 0xFFFF00)
        bitbot.setPixelColor(3, 0xFFFF00)
        bitbot.setPixelColor(4, 0xFFFF00)
        bitbot.setPixelColor(5, 0xFFFF00)
    } else if (name == "R") {
        bitbot.rotate(BBRobotDirection.Right, 50)
        bitbot.setPixelColor(6, 0xFFFF00)
        bitbot.setPixelColor(7, 0xFFFF00)
        bitbot.setPixelColor(8, 0xFFFF00)
        bitbot.setPixelColor(9, 0xFFFF00)
        bitbot.setPixelColor(10, 0xFFFF00)
        bitbot.setPixelColor(11, 0xFFFF00)
    } else if (name == "S") {
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    }
})
radio.setGroup(2)
bitbot.select_model(BBModel.XL)
bitbot.ledBrightness(20)
music.setVolume(255)
basic.showLeds(`
    . . . . .
    # # . # #
    # # . # #
    . . . . .
    . . . . .
    `)
