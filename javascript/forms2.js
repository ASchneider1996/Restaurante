// VALIDAR DATOS DE FORM INFO //
let form2 = document.getElementById("form2").addEventListener("click", function(e) {
    e.preventDefault(); 
});

function accountForm() { 

let form2 = document.getElementById("form2");
let name1 = document.getElementById("name2").value; 
let lastName = document.getElementById("lastname").value; 
let user = document.getElementById("mail2").value; 
let password = document.getElementById("pw").value;  
// Regex
let emailRegex = /[\w-.]+@[\w-.]+$/g;
let emailResult = emailRegex.test(user); 
let pwRegex = /^[0-9A-Za-z].{3,20}$/g; 
let pwResult = pwRegex.test(password); 

if(name1 === "" || null) {
    alert('Debe ingresar un nombre'); 
    return false;
} 
else if(lastName === "" || null) {
    alert('Debe ingresar apellido');
    return false;
}
else if(emailResult == false) {
    alert('Debe ingresar un correo válido');
    return false;
} 
else if(pwResult == false) {
    alert('Debe ingresar una contraseña');
    return false;
}
else{
    form2.submit(alert("¡Listo!"));
    form2.reset();
}
}