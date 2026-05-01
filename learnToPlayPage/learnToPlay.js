"use strict"

const tomb = [
    "The active player determines which permanents controlled by that player untap, then untaps all those permanents simultaneously. (The player will untap all permanents they control unless a card effect prevents this.)",
    "The upkeep step is the second step of the beginning phase. At the beginning of the upkeep step, any abilities that trigger either during the untap step or at the beginning of upkeep go on the stack. Then the active player gains priority the first time during their turn.",
    "The draw step is the third step of the beginning phase. The following events occur during this phase, in order: The active player draws a card from their library. Any abilities that trigger at the beginning of the draw step go on the stack. The active player gains priority.",
    "The main phase is both the second and fourth phases of a turn. Non-instants can usually only be played during this phase, only by the active player, and only when the stack is empty. The following events occur during the main phase: Abilities that trigger at the beginning of the main phase go onto the stack. The active player gains priority.",
    "Nope",
    "The second Main Phase - or post-combat Main Phase - takes place after the Combat Phase. It is the same as the first Main Phase, allowing the active player to play cards from their hand. Their opponents can also play instant spells and abilities as before, too. Remember that you can only play one land card per turn, so if you?ve already played one this turn, you can?t put another down. If you forgot, though, now?s the time to play it.",
    "The ending phase is the fifth and final phase of a turn. Prior to the Magic 2010 rules changes, this phase was known as simply the end phase. It consists of the following two steps. The cleanup step is the second and final step of the ending phase. Spells and abilities may be played during this step only if the conditions for any state-based actions exist or if any abilities have triggered. In that case, those state-based actions are performed and/or those abilities go on the stack and the active player gets priority and players may cast spells and activate abilities. Once all players pass priority when the stack is empty, the step repeats."
]



let nyilak = document.querySelectorAll(".arrow");

nyilak.forEach(element => {
    
    element.style.cursor = "pointer";
    element.addEventListener("click", (x) => {
        if(x.target.tagName == "DIV"){
            let block = document.getElementById("explainStep");
            x.target.style.backgroundColor = "blue";
            x.target.style.color = "white";
    
            nyilak.forEach(element =>{
                if(element != x.target){
                    element.style.backgroundColor = "rgba(173, 172, 172, 0.5)";
                    element.style.color = "black";
    
                }
            });
    
            block.innerHTML = `<div><p>${tomb[parseInt(x.target.title)]}</p></div>`;
        }

    })
})