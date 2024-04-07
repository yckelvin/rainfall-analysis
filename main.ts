input.onButtonPressed(Button.A, function () {
    Rainfall = pins.analogReadPin(AnalogPin.P1)
    microIoT.microIoT_showUserText(count, "Rainfall: " + ("" + Rainfall))
    count += 1
    if (Rainfall > 250) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0x65471f)
    } else if (Rainfall > 270) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 2, 0xff0000)
    } else if (Rainfall > 0) {
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
