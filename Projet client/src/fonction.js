function ajout()
{
    var nom = document.getElementById("txt").value;         //Récupère la valeur dans le formulaire de saisie.
    var prenom = document.getElementById("txt1").value;     //""
    var table = document.getElementById("tableToModify");   //Prend la table à partir du "tbody".
    var ligne = table.insertRow(-1);                        //Insère une ligne au bas du tableau.
    ligne.id = nom+prenom;                                  //Donne un id à la nouvelle ligne. 
    var colonne1 = ligne.insertCell(0);                     //Première nouvelle case de la ligne.
    colonne1.innerHTML += nom;                              //Insère le nom du client dans cette première case.
    var colonne2 = ligne.insertCell(1);                     //Deuxième nouvelle case de la ligne.
    colonne2.innerHTML += prenom;                           //Insère le prénom du client dans cette deuxième case.
    var select = document.getElementById("liste");
    var nomC = nom + " " + prenom;                          //Concatène nom et prénom pour l'ajouter à la liste déroulante.
    select.options[select.options.length] = new Option (nomC);
}





function change()
{
    var select = document.getElementById("liste"); 
    var choix = select.selectedIndex;                 //Récupère la valeur après avoir choisi dans la liste déroulante.
    var valeur = select.options[choix].value;
    var texte = select.options[choix].text;
    var spl = texte.split(" ");               //Sépare le nom complet en deux pour afficher nom et prénom dans des textboxs diffèrentes. 
    document.getElementById("nomV").value = spl[0];
    document.getElementById("prenomV").value = spl[1];
}





function suppr()
{
    var Nom = document.getElementById("nomV").value;            //Récupère valeurs des textboxs.
    var Prenom = document.getElementById("prenomV").value;
    var select = document.getElementById("liste");
    var NomComplet = Nom + Prenom;                               
    var element = document.getElementById(NomComplet);         //Trouve la ligne correspondante au client selectionné.

    element.parentNode.removeChild(element);                   //Supprime la ligne.
    
    
    var x = document.getElementById("liste");                 //Supprime le client aussi de la liste déroulante.
    x.remove(x.selectedIndex);   
}

