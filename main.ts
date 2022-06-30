let item_5 = 0
let item_4 = 0
let item_3 = 0
let item_2 = 0
let item_1 = 0
let title = textsprite.create("Dungeon Crawler", 0, 2)
title.setMaxFontHeight(9)
title.setPosition(60, 30)
for (let index = 0; index < 4; index++) {
    story.printText("Loading...", 75, 60, 1, 0)
}
forever(function () {
    if (controller.A.isPressed()) {
        if (controller.B.isPressed()) {
            if (controller.up.isPressed()) {
                story.printText("Dev Mode Activated.", 75, 60, 1, 0)
                while (!(story.checkLastAnswer("Yes"))) {
                    story.printText("What do you want to do?", 75, 60, 1, 0)
                    story.showPlayerChoices("Edit Save Data", "Erase All Save Data", "Play a fun animation", "Exit Dev Mode")
                    if (story.checkLastAnswer("Edit Save Data")) {
                        story.printText("USE AT YOUR OWN RISK. YOU COULD LOSE YOUR DATA. IF YOU KNOW THE RISKS, PRESS YES", 75, 60, 1, 2)
                        story.showPlayerChoices("Yes, I know the risks.", "No")
                        while (story.checkLastAnswer("Yes, I know the risks.") || !(story.checkLastAnswer("Exit"))) {
                            story.printText("Select Sector:", 75, 60, 1, 0)
                            story.showPlayerChoices("Sector A", "Sector B", "Exit")
                            if (story.checkLastAnswer("Sector A")) {
                                while (!(story.checkLastAnswer("Back to root"))) {
                                    story.printText("Select Sub-Sector:", 75, 60, 1, 0)
                                    story.showPlayerChoices("Sub-Sector A", "Sub-Sector B", "Back to root")
                                    if (story.checkLastAnswer("Sub-Sector A")) {
                                        while (!(story.checkLastAnswer("Back to Sector A"))) {
                                            story.printText("Select Partition:", 75, 60, 1, 0)
                                            story.showPlayerChoices("Partition A", "Partition B", "Back to Sector A")
                                            if (story.checkLastAnswer("Partition A")) {
                                                while (!(story.checkLastAnswer("Back to Sub-Sector A"))) {
                                                    story.printText("Select Data To Edit:", 75, 60, 1, 0)
                                                    story.showPlayerChoices("Items", "Current Save Point", "Back to Sub-Sector A")
                                                    if (story.checkLastAnswer("Items")) {
                                                        story.printText("When prompted, put the item number you want in that slot", 75, 60, 1, 0)
                                                        item_1 = game.askForNumber("Set Item 1 To:")
                                                        item_2 = game.askForNumber("Set Item 2 To:")
                                                        item_3 = game.askForNumber("Set Item 3 To:")
                                                        item_4 = game.askForNumber("Set Item 4 To:")
                                                        item_5 = game.askForNumber("Set Item 5 To:")
                                                        blockSettings.writeNumberArray("items", [
                                                        item_1,
                                                        item_2,
                                                        item_3,
                                                        item_4,
                                                        item_5
                                                        ])
                                                    } else if (false) {
                                                    	
                                                    }
                                                }
                                            } else if (false) {
                                            	
                                            }
                                        }
                                    } else if (false) {
                                    	
                                    }
                                }
                            } else if (false) {
                            	
                            }
                        }
                    } else if (story.checkLastAnswer("Erase All Save Data")) {
                    	
                    } else if (story.checkLastAnswer("Play a fun animation")) {
                    	
                    } else if (story.checkLastAnswer("Exit Dev Mode")) {
                        story.printText("Do you want to exit Dev Mode? This will reset the game.", 75, 60, 1, 0)
                        story.showPlayerChoices("Yes", "No")
                    }
                }
                game.reset()
            }
        }
    }
})
