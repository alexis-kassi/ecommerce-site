let bouton = document.querySelector(".btn_envoyer");
let resultat = document.getElementById("resultat_inscription");

bouton.addEventListener("click", function resultat(event) {
   event.preventDefault();
   document.getElementById("resultat_inscription").innerHTML = "Cher utilisateur, merci d'être inscrire sur notre site ecommerce"
})