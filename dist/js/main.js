/* codigo JS ES6*/
//Array donde estarán los perros
var aPerros = [];

var Toby = new Perro();
console.log(Toby);

//Añado el perro al array
aPerros.push(Toby);

var Milu = new Perro();
Milu.nombre = "Milu";
Milu.raza = "Fox Terrier";
Milu.chip = "9869759"
Milu.imagen = "https://goo.gl/images/bq8C9Q";

console.log(Milu);

//Añado el perro al array
aPerros.push(Milu);


//Selectores
var btn = document.querySelector("#bMostrar");
var tPerros = document.querySelector("#tPerros");


//Eventos
btn.onclick = mostrar;

function mostrar() {
    aPerros.forEach(perro => {
        tPerros.querySelector("tbody").innerHTML += ` <tr><td>${perro.nombre}</td><td>${perro.raza}</td><td>${perro.chip}</td><td><a href="${perro.imagen}">Foto</a></td></tr>  `
    })
}
