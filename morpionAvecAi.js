let p1 = document.getElementById("resultat");

let button1 = document.getElementById("case1");
let button2 = document.getElementById("case2");
let button3 = document.getElementById("case3");
let button4 = document.getElementById("case4");
let button5 = document.getElementById("case5");
let button6 = document.getElementById("case6");
let button7 = document.getElementById("case7");
let button8 = document.getElementById("case8");
let button9 = document.getElementById("case9");
let cases = [button1, button2, button3, button4, button5, button6, button7, button8, button9]

let compteurX = 0;
let compteurO = 0;
let victoireX = 0;
let victoireO = 0;
let h2 = document.getElementById("score");

let victoire = false

function jouer(button){
    //retourver bouton dans la liste : id de button ?
    let index 
    for (let i = 0; i < cases.length; i++) {
        if (button === cases[i]) {
            index = i
        }    
    }
    //action lors du tour
    button.innerHTML = "X";
    button.value = "X";
    compteurX++ ;
    p1.innerHTML="Tour des Ronds"
    button.disabled = true;
    gagner();
    h2.innerHTML = "Croix " + victoireX + " - "+victoireO + " Ronds";
    cases.splice(index, 1)
    //retirer possibilités dans comboVictoire lié au bouton supprimé
    if(victoire === false) {
        TourAI()
    }
}

function TourAI() {
    //choix 1 victoire
    //pour chaque i de cases
    //tester pour chaque bouton disponible le nombre de fois où il est present dans comboVictoire[ex : "button1, button2, button3", "button4, button5, button6"] 
    //choix 2 egalite

    //choix 3 random
    let index = (Math.floor(Math.random()*cases.length))
    let choix = cases[index];
    //action lors du tour
    choix.innerHTML = "O";
    choix.value = "O";
    compteurO++ ; 
    p1.innerHTML="Tour des Croix"
    choix.disabled = true;
    gagner();
    h2.innerHTML = "Croix " + victoireX + " - "+victoireO + " Ronds";
    cases.splice(index, 1)
    //retirer possibilités dans comboVictoire lié au bouton supprimé
}

function gagner(){
let case1 = document.getElementById("case1").value;
let case2 = document.getElementById("case2").value;
let case3 = document.getElementById("case3").value;
let case4 = document.getElementById("case4").value;
let case5 = document.getElementById("case5").value;
let case6 = document.getElementById("case6").value;
let case7 = document.getElementById("case7").value;
let case8 = document.getElementById("case8").value;
let case9 = document.getElementById("case9").value;
    if (compteurX=== 5) {
        p1.innerHTML = "Egalité!!!"
        victoire = true;
    }
    if (case1 === "X" && case2 === "X" && case3 === "X") {
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case4 === "X" && case5 === "X" && case6 === "X"){
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case7 === "X" && case8 === "X" && case9 === "X") {
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case1 === "X" && case4 === "X" && case7 === "X") {
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case2 === "X" && case5 === "X" && case8 === "X") {
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case3 === "X" && case6 === "X" && case9 === "X") {
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case1 === "X" && case5 === "X" && case9 === "X") {
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case3 === "X" && case5 === "X" && case7 === "X") {
        p1.innerHTML = "Victoire des Croix!!!"
        lockAll()
        victoireX++;
        victoire = true;
    }
    if (case1 === "O" && case2 === "O" && case3 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    if (case4 === "O" && case5 === "O" && case6 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    if (case7 === "O" && case8 === "O" && case9 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    if (case1 === "O" && case4 === "O" && case7 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    if (case2 === "O" && case5 === "O" && case8 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    if (case3 === "O" && case6 === "O" && case9 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    if (case1 === "O" && case5 === "O" && case9 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    if (case3 === "O" && case5 === "O" && case7 === "O") {
        p1.innerHTML = "Victoire des Ronds!!!"
        lockAll()
        victoireO++;
        victoire = true;
    }
    
}

function lockAll() {

    case1.disabled = true;
    case2.disabled = true;
    case3.disabled = true;
    case4.disabled = true;
    case5.disabled = true;
    case6.disabled = true;
    case7.disabled = true;
    case8.disabled = true;
    case9.disabled = true;
}
function refresh(){


    case1.disabled = false;
    case2.disabled = false;
    case3.disabled = false;
    case4.disabled = false;
    case5.disabled = false;
    case6.disabled = false;
    case7.disabled = false;
    case8.disabled = false;
    case9.disabled = false;

    compteurX = 0;
    compteurO = 0;

    case1.innerHTML = "&nbsp;";
    case1.value = "&nbsp;";
    case3.innerHTML = "&nbsp;";
    case3.value = "&nbsp;";
    case4.innerHTML = "&nbsp;";
    case4.value = "&nbsp;";
    case5.innerHTML = "&nbsp;";
    case5.value = "&nbsp;";
    case6.innerHTML = "&nbsp;";
    case6.value = "&nbsp;";
    case7.innerHTML = "&nbsp;";
    case7.value = "&nbsp;";
    case8.innerHTML = "&nbsp;";
    case8.value = "&nbsp;";
    case9.innerHTML = "&nbsp;";
    case9.value = "&nbsp;";
    case2.innerHTML = "&nbsp;";
    case2.value = "&nbsp;";

    p1.innerHTML="Tour des Croix"

    cases.splice(0, cases.length);
    cases.push(button1, button2, button3, button4, button5, button6, button7, button8, button9)

    victoire = false
}