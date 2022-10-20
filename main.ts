input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let JAVIER = game.createSprite(0, 2)
let ANDREA = game.createSprite(randint(1, 4), randint(0, 4))
let ANDREA_2 = game.createSprite(randint(1, 4), randint(0, 4))
let ANDREA_3 = game.createSprite(randint(1, 4), randint(0, 4))
ANDREA.set(LedSpriteProperty.Brightness, 100)
ANDREA_2.set(LedSpriteProperty.Brightness, 100)
ANDREA_3.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        JAVIER.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        JAVIER.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    while (input.logoIsPressed()) {
        JAVIER.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        JAVIER.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (JAVIER.isTouching(ANDREA)) {
        ANDREA.delete()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        game.addScore(1)
    }
    if (JAVIER.isTouching(ANDREA_2)) {
        ANDREA_2.delete()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        game.addScore(1)
    }
    if (JAVIER.isTouching(ANDREA_3)) {
        ANDREA_3.delete()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        game.addScore(1)
    }
    if (game.score() == 3) {
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
    ANDREA.set(LedSpriteProperty.X, randint(0, 5))
    ANDREA.set(LedSpriteProperty.Y, randint(0, 5))
})
loops.everyInterval(3000, function () {
    ANDREA_2.set(LedSpriteProperty.X, randint(0, 5))
    ANDREA_2.set(LedSpriteProperty.Y, randint(0, 5))
})
loops.everyInterval(3000, function () {
    ANDREA_3.set(LedSpriteProperty.X, randint(0, 5))
    ANDREA_3.set(LedSpriteProperty.Y, randint(0, 5))
})
