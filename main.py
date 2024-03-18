def on_button_pressed_a():
    global Rainfall
    Rainfall = pins.analog_read_pin(AnalogPin.P1)
    microIoT.microIoT_clear()
    microIoT.microIoT_showUserText(0, "Rainfall value: " + str(Rainfall))
    if Rainfall > 300:
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0x65471f)
    elif Rainfall > 200:
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0xff0000)
    elif Rainfall > 100:
        microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0xffff00)
    else:
        microIoT.microIoT_ledBlank(PIN.P15)
input.on_button_pressed(Button.A, on_button_pressed_a)

Rainfall = 0
basic.show_number(0)
Rainfall = 0
microIoT.microIoT_initDisplay()
basic.show_number(1)
microIoT.microIoT_showUserText(0, "Ready to read rainfall value")
basic.show_number(2)