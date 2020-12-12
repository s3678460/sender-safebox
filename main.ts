input.onButtonPressed(Button.A, function () {
    chosenNumber += 1
    basic.showString("" + (chosenNumber))
})
input.onGesture(Gesture.ScreenDown, function () {
    if (isMatched == 1) {
        radio.sendNumber(0)
        basic.showString("Sent!")
        isMatched = 0
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (password.length != 3) {
        basic.showIcon(IconNames.Sad)
        chosenNumber = 0
        basic.clearScreen()
    } else {
        // for (let value of password) {
        // }
        if (password.join() == realPassword.join()) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
            isMatched = 1
            password = []
            stringPassword = ""
        } else {
            basic.showIcon(IconNames.Sad)
            password = []
            stringPassword = ""
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (password.length == 3) {
        basic.showIcon(IconNames.No)
    } else {
        password.push(chosenNumber)
    }
    basic.clearScreen()
    chosenNumber = 0
})
input.onGesture(Gesture.Shake, function () {
    if (isMatched == 1) {
        radio.sendNumber(1)
        basic.showString("Sent!")
        isMatched = 0
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
let stringPassword = ""
let isMatched = 0
let chosenNumber = 0
let option = 0
let password: number[] = []
let realPassword = [1, 2, 4]
radio.setGroup(62)
