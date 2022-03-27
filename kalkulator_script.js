let tall1El = document.querySelector("#tall1")
let tall2El = document.querySelector("#tall2")

let regnUtBtn = document.querySelector("#regnUt")

let hovedEl = document.querySelector("#hoved")
let resultatEl = document.querySelector("#resultat")

let verdi;

function endre(){
verdi = document.querySelector("#Regneoperasjon").value;
console.log(verdi)

regnUtBtn.addEventListener("click", beregn)

    function beregn(){
        let tall1 = Number(tall1El.value)
        let tall2 = Number(tall2El.value)

        let resultat;

        if (verdi == 2){
            console.log("add")
            resultat = tall1 + tall2
        }
        else if(verdi == 3){
            console.log("sub")
            resultat = tall1 - tall2
        }
        else if(verdi == 4){
            console.log("prod")
            resultat = tall1*tall2
        }
        else if(verdi == 5){
            console.log("div")
            resultat = tall1/tall2
        }
        else if(verdi == 6){
            console.log("pot")
            resultat = tall1**tall2
        }
        else if(verdi == 7){
            console.log("rot")
            resultat = tall1**(1/tall2)
        }

        resultat = resultat.toFixed(2)

        resultatEl.innerText = `Svaret er: ${resultat}`
    }
}