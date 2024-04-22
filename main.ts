input.onButtonPressed(Button.A, function () {
    if (count > 5) {
        microIoT.microIoT_clear()
    }
    Rainfall = pins.analogReadPin(AnalogPin.P1)
    microIoT.microIoT_showUserText(count, "Rainfall: " + ("" + Rainfall))
    count += 1
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    microIoT.microIoT_clear()
    microIoT.microIoT_ledBlank(PIN.P15)
    microIoT.microIoT_showUserText(0, "Ready!")
    count = 1
})
let count = 0
let Rainfall = 0
basic.showNumber(0)
Rainfall = 0
count = 1
microIoT.microIoT_initDisplay()
basic.showNumber(1)
microIoT.microIoT_showUserText(0, "Ready!")
basic.showNumber(2)
microIoT.microIoT_ledBlank(PIN.P15)
basic.showNumber(3)
basic.forever(function () {
    if (Rainfall > 300) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0x65471f)
    } else if (Rainfall > 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0xff0000)
    } else if (Rainfall > 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0xffff00)
    } else {
        microIoT.microIoT_ledBlank(PIN.P15)
    }
})
