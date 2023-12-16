function passvalidation(){
    var a=document.getElementById("password");
    var b=document.getElementById("confirmation");
    if(a==b){
        alert("les mots de passes correspondent");
    }
    else alert ("les mots de passent ne correspondent pas");
}
function controle(){
    var b=document.getElementById("Lastname");

    var c=document.getElementById("Phonenumber");
    var d=document.getElementById("password");
    var e=document.getElementById("confirmation");
    if (b.lentgh<=3){
        document.getElemdocument.getElementById("last").ineerHTML="le prenom doit comporter a moins 4 caracteres";
    }
    if(/\d/.test(c)!=1){
        document.getElemdocument.getElementById("num").ineerHTML="ceci doit comporter que des chiffres";

    }
    if(/[A-Z]/.test(d)!=1 || /[a-z]/.test(d)!=1 || /\d/.test(d)!=1 || /[[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+]/.test(d)!=1 ){
        document.getElemdocument.getElementById("pas").ineerHTML="ceci doit comporter des chiffres des caracteres majuscules et minuscules et des symboles";

    }
    if(/[A-Z]/.test(e)!=1 || /[a-z]/.test(e)!=1 || /\d/.test(e)!=1 || /[[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+]/.test(d)!=1 ){
        document.getElemdocument.getElementById("con").ineerHTML="ceci doit comporter des chiffres des caracteres majuscules et minuscules et des symboles";

    }
} 
function controle2(){
    var b=document.getElementById("firstname");
    if (b.lentgh<3 || /[[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+]/.test(b) || /\d/.test(b)){
        document.getElemdocument.getElementById("f").ineerHTML="le prenom doit comporter a moins 3 caracteres pas de chiffres ou de symbboles";
    }
    else
    document.getElemdocument.getElementById("first").ineerHTML="correcte";
 
}
function nameValidation1() {
    var nomInput = document.getElementById("firstname");
    var nom = nomInput.value;
    var nomMessage = document.getElementById("f");
  
    if (/^[a-zA-Z]{3,}$/.test(nom)) {
      nomMessage.style.color = "green";
      nomMessage.innerHTML = "Mot correct";
    } else {
      nomMessage.style.color = "red";
      nomMessage.innerHTML = "Erreur ";
    }
  }
  function nameValidation2() {
    var nomInput = document.getElementById("Lastname");
    var nom = nomInput.value;
    var nomMessage = document.getElementById("l");
  
    if (/^[a-zA-Z]{3,}$/.test(nom)) {
      nomMessage.style.color = "green";
      nomMessage.innerHTML = "Mot correct";
    } else {
      nomMessage.style.color = "red";
      nomMessage.innerHTML = "Erreur ";
    }
  }


  var button = document.getElementById('submit');
  button.addEventListener('click', function() {
   
    window.location.href = 'index.html';
  });
