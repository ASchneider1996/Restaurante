// VALIDAR DATOS DE FORM BOOKING//
let form1 = document.getElementById("form1").addEventListener("click", function(e) {
    e.preventDefault(); 
});

function bookingForm() { 

let form1 = document.getElementById("form1");
let names = document.getElementById("name1").value;
let email = document.getElementById("mail").value;
let tNumber = document.getElementById("number").value;
let calendar = document.getElementById("date").value;
let time = document.getElementById("time").value;
let adult = document.getElementById("adult").value;
let child = document.getElementById("child").value;
// Regex
let nameRegex = /([A-Za-z]\w+)/g; 
let nameResult = nameRegex.test(names); 
let emailRegex = /[\w-.]+@[\w-.]+$/g; 
let emailResult = emailRegex.test(email); 
let numberRegex = /\d{4}-\d{4}$/g;
let numberResult = numberRegex.test(tNumber); 

    if(nameResult == false) {
        alert('Debe ingresar un nombre');
        return false;
    }
    else if(emailResult == false) {
        alert('Debe ingresar un correo válido');
        return false; 
    } 
    else if(numberResult == false) {
        alert('Debe ingresar un número de contacto válido');
        return false;
    } 
    else if(calendar === "" || null ) {
        alert('Debe ingresar una fecha');
        return false;
    } 
    else if(time === "" || null ) {
        alert('Debe ingresar un horario'); 
        return false;
    } 
    else if(adult === "" || null ) {
        alert('Debe ingresar cantidad de adultos'); 
        return false;
    } 
    else if(child === "" || null ) {
        alert('Debe ingresar cantidad de menores');
        return false;
    }
    else { 
        form1.submit(alert("Gracias por su reserva!"));
        form1.reset();
    }
}