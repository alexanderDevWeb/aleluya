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
Milu.imagen = "http://media.2oceansvibe.com/wp-content/uploads/2012/02/pitbullterrier.jpg";

console.log(Milu);

//Añado el perro al array
aPerros.push(Milu);


//Selectores
var btn = document.querySelector("#bMostrar");
var bAlta = document.querySelector("#bAlta");
var tPerros = document.querySelector("#tPerros");
//var linkFoto = document.querySelector(".foto");  Aun no existe niguna
var dDog = document.querySelector("#dDog");


//Eventos
btn.onclick = mostrar;
bAlta.onclick = alta;
//linkFoto.onclick = muestraFoto; //Aún no existe ninguna

function mostrar() {
    //Primero limpio la tabla para qu eno se acumulen los resultados
    tPerros.querySelector("tbody").innerHTML = "";

    aPerros.forEach(perro => {

        tPerros.querySelector("tbody").innerHTML += `<tr><td>${perro.nombre}</td><td>${perro.raza}</td><td>${perro.chip}</td><td><a class="foto" href="${perro.imagen}">Foto</a></td></tr>`

        tPerros.querySelectorAll("tbody .foto").forEach(enlace => {
            console.log(enlace);
            enlace.onclick = muestraFoto;
        })

    })


}

function alta() {
    event.preventDefault();
    let nombre = fAlta.querySelector("#nombre").value;
    let raza = fAlta.querySelector("#raza").value;
    let chip = fAlta.querySelector("#chip").value;
    let imagen = fAlta.querySelector("#url").value;

    let doggo = new Perro();
    doggo.nombre = nombre;
    doggo.raza = raza;
    doggo.chip = chip;
    doggo.imagen = imagen;

    console.log("%o", doggo);

    //Añado el nuevo perro al array, y los muestro
    aPerros.push(doggo);
    mostrar();

    fAlta.reset();
}


function muestraFoto() {
    //Para que no abra el enlace
    event.preventDefault();

    //Recojo la dirección del enlace
    let enlace = this.href;

//    console.log(this)

    //añado una imagen con la dirección en la capa #bMostrar.
    //Primero la limpio
    dDog.innerHTML = "";
    dDog.innerHTML = `<img src="${enlace}" />`;

}
