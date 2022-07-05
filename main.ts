function menu () {
    story.showPlayerChoices("Play", "Options", "Credits")
    if (story.checkLastAnswer("Play")) {
    	
    } else if (story.checkLastAnswer("Options")) {
        storyText.destroy()
        storyText = textsprite.create("Choose Setting To Change:", 0, 1)
        storyText.setMaxFontHeight(9)
        storyText.setPosition(60, 50)
        story.showPlayerChoices("Control Scheme", "DELETE ALL SAVE DATA", "Back")
        if (story.checkLastAnswer("Control Scheme")) {
            story.printText("Sorry, this feature is not available yet.", 75, 60, 1, 0)
        } else if (story.checkLastAnswer("DELETE ALL SAVE DATA")) {
            for (let index = 0; index < 2; index++) {
                music.playMelody("C5 C5 C5 - C5 C5 C5 - ", 240)
            }
            story.printText("WARNING: THIS WILL DELETE ALL OF YOUR SAVE DATA. ARE YOU SURE?", 75, 60, 1, 2)
            story.showPlayerChoices("YES", "NO")
            if (story.checkLastAnswer("YES")) {
                for (let index = 0; index < 2; index++) {
                    music.playMelody("C5 - C5 - C5 - C5 - ", 240)
                }
                story.printText("ARE YOU ABSOLUTELY SURE?", 75, 60, 1, 2)
                story.showPlayerChoices("YES, I AM SURE", "WAIT NO KEEP IT")
                if (story.checkLastAnswer("YES, I AM SURE")) {
                    for (let index = 0; index < 2; index++) {
                        music.playMelody("C5 B C5 B C5 B C5 B ", 240)
                    }
                    story.printText("THIS IS THE LAST TIME YOU WILL BE ASKED. ARE YOU ABSOLUTELY, POSITIVELY SURE YOU WANT TO DELETE YOUR SAVE DATA?", 75, 60, 1, 2)
                    story.showPlayerChoices("DELETE IT!!!!!!!!", "DO NOT DELETE IT!!!!!!!!")
                    if (story.checkLastAnswer("DELETE IT!!!!!!!!")) {
                        for (let index = 0; index < 2; index++) {
                            music.playMelody("C5 B A G F E D C ", 240)
                        }
                        story.printText("Save data deleted. The game will now reset.", 75, 60, 1, 2)
                        game.reset()
                    } else if (story.checkLastAnswer("DO NOT DELETE IT!!!!!!!!")) {
                        menu()
                    }
                } else if (story.checkLastAnswer("WAIT NO KEEP IT")) {
                    menu()
                }
            } else if (story.checkLastAnswer("NO")) {
                menu()
            }
        } else if (story.checkLastAnswer("Back")) {
            menu()
        }
    } else if (story.checkLastAnswer("Credits")) {
        story.printText("Created By HydeZero. All Rights Reserved. Name is not copyrighted as it is a general phrase, feel free to use the name in any project.", 75, 60, 1, 0)
    }
}
let storyText: TextSprite = null
if (blockSettings.readNumber("level") == -1) {
    story.printText("There is no save data. You might have deleted it, or this is the first time you are booting up the game.", 75, 60, 1, 0)
    story.printText("When prompted, press \"Play\" to create data.", 75, 60, 1, 0)
}
let title = textsprite.create("Dungeon Crawler", 0, 2)
title.setMaxFontHeight(9)
title.setPosition(60, 30)
for (let index = 0; index < 4; index++) {
    story.printText("Loading...", 75, 60, 1, 0)
}
while (!(controller.A.isPressed())) {
    story.printText("Press Space(A) To Begin", 75, 60, 1, 0)
}
storyText = textsprite.create("Select An Option:", 0, 1)
storyText.setMaxFontHeight(9)
storyText.setPosition(60, 50)
menu()
forever(function () {
	
})
