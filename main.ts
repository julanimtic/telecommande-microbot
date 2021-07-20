input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    radio.sendNumber(3)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
