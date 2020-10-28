const email=document.getElementById("email");
email.addEventListener("input",function(even){
if(email.validity.typeMismatch){
	email.setCustomValidity("Falta el arroba en el usuario ")	;
				}else{email.setCustomValidity(" ");}
				});
var form = document.querySelector('form');
var fname = document.getElementById('email');
var lname = document.getElementById('clave');
var submit = document.getElementById('submit');
var para = document.querySelector('p');
	form.onsubmit = function(e) {
 if (fname.value === '' || lname.value === '') {
 e.preventDefault();
 para.textContent = 'Completá ambos datos!';
 }
}

