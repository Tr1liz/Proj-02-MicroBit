input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    // If no buttons are pressed, a straight-mouth face is shown on the LED grid.
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    // If no buttons are pressed, a straight-mouth face is shown on the LED grid.
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
})
// If no buttons are pressed, a straight-mouth face is shown on the LED grid.
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
