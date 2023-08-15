//Fonction permettant d'éffectuer une addition
document.getElementById("somme").onclick = function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let somme = parseInt(num1) + parseInt(num2);

    document.getElementById("num3").innerText = somme;
}
//Fonction permettant d'éffectuer une soustraction
document.getElementById("difference").onclick = function(){
    let nombreSoustrer1 = document.getElementById("n1").value;
    let nombreSoustrer2 = document.getElementById("n2").value;
    let difference = parseInt(nombreSoustrer1) - parseInt(nombreSoustrer2);

    document.getElementById("n3").innerText = difference; 
}

//Fonction permettant d'éffectuer une multiplication
document.getElementById("produit").onclick = function(){
    let nombreMultiplier1 = document.getElementById("nombreM1").value;
    let nombreMultiplier2 = document.getElementById("nombreM2").value;
    let produit = parseInt(nombreMultiplier1) * parseInt(nombreMultiplier2);

    document.getElementById("nombreM3").innerText = produit; 
}
   
//Fonction permettant d'éffectuer une division
document.getElementById("division").onclick = function(){
    let nombreDiviser1 = document.getElementById("nombreD1").value;
    let nombreDiviser2 = document.getElementById("nombreD2").value;
    let division = parseInt(nombreDiviser1) / parseInt(nombreDiviser2);

    document.getElementById("nombreD3").innerText = division;
}