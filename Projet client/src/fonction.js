function ajout()
{
var nom = document.getElementById("txt").value;
var prenom = document.getElementById("txt1").value;
var table = document.getElementById("tableToModify");
var ligne = table.insertRow(-1);
var colonne1 = ligne.insertCell(0);
colonne1.innerHTML += nom;
var colonne2 = ligne.insertCell(1);
colonne2.innerHTML += prenom;
var select = document.getElementById("liste");
select.options[select.options.length] = new Option (nom);
}

function suppr()
{
    
}