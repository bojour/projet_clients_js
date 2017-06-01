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
var arrayLignes = document.getElementById("tableToModify").rows;
var longueur = arrayLignes.length;
var arrayColonnes;
var largeur; 
var confNom = document.getElementById("nomV").value;
var select = document.getElementById("liste");
    
for(var i=0; i<=longueur; i++)
{
    arrayColonnes = arrayLignes[i].cells;
    largeur = arrayColonnes.length;   
   // alert(arrayColonnes[0].innerHTML + " " + arrayColonnes[1].innerHTML);
    var n = confNom.includes(arrayColonnes[0].innerHTML)
    if(n == true)
        {
            document.getElementById("tableToModify").deleteRow(i);
            select.remove(select.selectedIndex);
            
        }
}

}

