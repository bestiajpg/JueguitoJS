const letterContainer= document.getElementById("letter-container");
const optionsContainer = document.getElementById ("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText =document.getElementById("result-text");
console.log(letterContainer) //Para imprimir el contenido de letterContainer

let nombres = ["Juli","joaquin","Ignacio"];
//manejo de indices
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])

//corchetes alt+91 y alt+93
//longitud
console.log(nombres.length);
let options = {
    frutas: [
        "manzana",
        "frutilla",
        "pera",
        "sandia",
        "naranja",
        "mandarina",
        "uvas",
        "kiwi",
    ],
    animales: [
        "perro",
        "gato",
        "nutria",
        "jirafa",
        "rinoceronte",
        "leon",
        "pantera",
        "tortuga",
        "mamut",
        "hamster",
    ],
    paises: [
        "australia",
        "argentina",
        "suecia",
        "alemania",
        "chile",
        "irlanda",
        "africa",
        "españa",
        "mexico",
        "francia",
        "brasil",
        "camerun",
        "escocia",
        "inglaterra",
    ],
};
//contadores
let winCount= 0;
let counter =0;
let chosenWord = "";

//alt+96 template literal (`)
//trabajar con el display de las opciones
const displayOptions = ()=> {
    optionsContainer.innerHTML += `<h3>Por favor seleccione una opcion</h3>`;
    //innerHTML nos sirve para poder ingresar codigo html en js
    let buttonCon = document.createElement("div");
    for (let value in options){
        buttonCon.innerHTML += `<button class="options" onClick="generateWord"('${value}')">${value}</button>`;
    }
    //appendChild es agregar al ultimo (en este caso el boton)
    optionsContainer.appendChild(buttonCon);

};
//funcion para poder bloquear todos los botones
const blocker = ()=>{
    //crear dos variables
    let optionsButton = document.querySelectorAll(".optiones");
    let letterButton = document.querySelector(".letters");

    optionesButton.forEach((button)=> {
        button.disabled = true;
    });

    letterButton.forEach((button)=>{
        button.disables = true;
    });
    //eliminar la clase de la lista de elementos (deja sin estilos)
    newGameContainer.classList.remove("hide"); //va a mostrarlo

};
//generador de palabras
const generateWord = (optionValue)=>{
    let optionesButton = document.querySelectorAll(".options");
    optionsButton.forEach ((button)=>{
        if (button.innterText.toLowerCase()=== optionValue){
            button. classList.add("active");
        }
        button.disabled=true;
    });
    //inicializamos el contenido de las letras en cero y limpiamos lo anterior

letterContainer.classList.remove("hide");
userInputSection.innerText="";

let optionArray = options[optionValue];

//elegir una palabra aleatoria
chosenWord = optionArray [Math.floor(Math.random()* optionArray.length)];
chosenWord = chosenWord.toUpperCase ();

//una vez que ya seleccione la palabra
//por cada letra vamos a reemplazarlo por un signo
let displayItem= chosenWord.replace(/./g,'<span class="dashes">_</span>');
userInputSection.innerHTML = displayItem;

};

//cuando hagamos click en el boton de "nuevo juego", se reinicie todo
const initializer = () => {
    winCount = 0;
    count = 0;

    userInputSection.innerHTML = "";
    optionesContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add ("hide");
    letterContainer.innerHTML="";

    //crear las letras //letras en mayuscula
    for (let i = 65; i <91; i++) {
        let button = document.createElement("button")
        button.classList.add("letters");
        button.innerText = String.fromCharCode (i);

        button.addEventListener("click", ()=>{
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName ("dashes");

            if (charArray.includes(button.innerText)) {
                charArray.forEach((char,index)=>{
                    if (char === button.innerText){
                        dashes [index].innerText = char;
                        winCount +=1;
                        if (winCount === charArray.length){
                            resultText.innerHTML = `<h2 class="win-msg"> Ganaste</h2>`;
                            //esta es la funcion cuando estan activados los botones
                            blocker ();
                        }
                    }
                })
            }
            
            })
        }
}   
        
        
        
    







//camelCase : la primera palabra toda en minúscula y a partir de la segunda
//palabra en adelante se pone la primera letra en Mayúscula