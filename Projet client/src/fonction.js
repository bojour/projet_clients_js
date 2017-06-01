function ajout()
{
var nom = document.getElementById("txt").value;
var prenom = document.getElementById("txt1").value;
var table = document.getElementById("tableToModify");
var ligne = table.insertRow(-1);
ligne.id = nom+prenom;
var colonne1 = ligne.insertCell(0);
colonne1.innerHTML += nom;
var colonne2 = ligne.insertCell(1);
colonne2.innerHTML += prenom;
var select = document.getElementById("liste");
var nomC = nom + " " + prenom;
select.options[select.options.length] = new Option (nomC);


}



function change()
{
   var select = document.getElementById("liste");
var choice = select.selectedIndex;
var valeur = select.options[choice].value;
var texte = select.options[choice].text;
var spl = texte.split(" ");
document.getElementById("nomV").value = spl[0];
document.getElementById("prenomV").value = spl[1];

}




function suppr()
{
var Nom = document.getElementById("nomV").value;
var Prenom = document.getElementById("prenomV").value;
var select = document.getElementById("liste");
var NomComplet = Nom + Prenom;
var element = document.getElementById(NomComplet);

    element.parentNode.removeChild(element);
    
    
var x = document.getElementById("liste");
x.remove(x.selectedIndex);   
}

