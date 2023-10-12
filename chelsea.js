const prompt = require("prompt-sync")({sigint:true});


// let name = prompt("What is your name ?");


function nameChange(named) {
    let thename = named.toLowerCase();

    return thename;
};

console.log(nameChange("DISASI"));