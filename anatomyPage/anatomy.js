"use strict"

const boxes = document.querySelectorAll("#box");

const tomb= [
    "Name refers in Magic: The Gathering to the name of a card or token. It is one of the characteristics of an object. The name of a card is positioned in the title bar at the top left corner of the card and is its primary method of identification. Each English card name is unique, though some other languages have used the same name for multiple cards. Also, translated cards with super-long names have been typeset using a different font ? either the normal font compressed, or an actual smaller point size. Because of language issues, Creative tries not to change the gender when reprinting a card with new art.",
    "The type line of a Magic card is printed directly below the illustration. It contains the card's card type(s). It also contains the card's subtype(s) and supertype(s), if applicable. The type line has a set height and width. Because of this, sometimes there is no room for additional creature types, even if they would have been expected to based on flavor.[1] This most often happens with legendary creatures, especially those that are also artifacts and enchantments - a Legendary Artifact Creature can fit Sphinx as a type, but not Construct, without shrinking the font size; while Legendary Enchantment Creature can't even fit God as a type without shrinking, leaving many of them with only one type.",
    "The text box is the box that takes up most of the lower part of a Magic card. Rules text and flavor text are both printed in this box. Generally, Magic card text runs between 7.5 and 9 points in font size, and it is the editing department's job to make sure that the text is large enough to be readable, that there aren't unsightly blank spaces, and so on. There are also certain rules about separating abilities and flavor text with blank lines, which prevents awkward text layouts.",
    "Mana cost can mean the mana component of any cost, but when used technically or in card text, it means the default cost to cast a spell as defined on its card. This property of spells was formerly called and is still colloquially known as casting cost. The equivalent cost to activate an ability is an activation cost. The mana cost of an object typically determines that object's color. It also determines its mana value, although they are not the same thing.",
    "Card art gets assigned in clumps. Each of these clumps is called an art wave. Most sets have multiple art waves. Set Design works with the art director to determine which cards go in which art wave. Usually, the cards the lead set designer has the most confidence in or which have a clear visual identity (such as legendary creatures we know are in the set) regardless of mechanics go in the earlier waves. Each piece of art has a number assigned to it that's unique for that piece of art. Once the art is in and R&D changes cards in their database, they have to be aware of the art ID.",
    "The expansion symbol is a small icon found on the right side of the middle line or type line on a Magic: The Gathering card and is a characteristic of that card. If a card is copied, the copy will keep its original expansion symbol.",
    "Power is the first number printed before the slash on the lower right-hand corner of creature cards. This is the amount of damage it deals in combat to the opposing creature's toughness, the opposing player's life total, or the opposing planeswalker's loyalty. Toughness is the number printed after the slash at the bottom right corner of a creature. It is the amount of damage needed to destroy it. If the number becomes equal to or less than 0 at any time, it is put into its owner's graveyard as a state-based action."
]

boxes.forEach(element => {

    element.style.cursor = "pointer";
    element.addEventListener("click", (x) => {
        if(x.target.tagName == "DIV"){
            let block = document.getElementById("anatomyDescription");
            x.target.style.backgroundColor = "blue";
            x.target.style.color = "white";
    
            boxes.forEach(element =>{
                if(element != x.target){
                    element.style.backgroundColor = "rgba(173, 172, 172, 0.5)";
                    element.style.color = "black";
    
                }
            });
            block.innerHTML = `<p>${tomb[parseInt(x.target.title)]}</p>`;
        }
    })
})