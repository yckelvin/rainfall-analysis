input.onButtonPressed(Button.A, function () {
    Rainfall = pins.analogReadPin(AnalogPin.P1)
    microIoT.microIoT_clear()
    microIoT.microIoT_showUserText(0, "Rainfall value: " + ("" + Rainfall))
    if (Rainfall > 300) {
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0x65471f)
    } else if (Rainfall > 200) {
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0xff0000)
    } else if (Rainfall > 100) {
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0xffff00)
    } else {
        microIoT.microIoT_ledBlank(PIN.P15)
    }
})
let Rainfall = 0
basic.showNumber(0)
Rainfall = 0
microIoT.microIoT_initDisplay()
basic.showNumber(1)
microIoT.microIoT_showUserText(0, "Ready to read rainfall value")
basic.showNumber(2)
