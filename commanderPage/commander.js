"use strict"

const survey = document.getElementById("commanderStandard");

document.getElementById("resetBtn").addEventListener("click", () => {
    if(confirm("Are you sure you want to reset the form?")){
        survey.reset();
    }
})
