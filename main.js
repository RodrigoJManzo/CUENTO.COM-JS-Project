
// constantes
const boton = document.querySelector("#creador")

// creacion del cuento

// funcion para hacer random

function randomNumber (max) {
    return Math.floor(Math.random()*max);
}

// agrego el evento de escuchar al Boton
boton.addEventListener("click", crear);

function crear() {
    //saco el titulo escrito en el DOM
    let titulo = document.querySelector("#title").value.toUpperCase();
    document.querySelector("#tituloCuento").textContent = titulo;
    console.log(titulo)

    // traigo la historia desde el .json de manera random, utilizando el randomNumber para variar el elemento del array
   fetch('data/histories.json')
    .then((res)=> res.json())
    .then((data)=>{
        document.querySelector("#history").textContent = data[randomNumber(6)]
    })

    // traigo los starts desde el .json de manera random, utilizando el randomNumber para variar el elemento del array
    fetch('data/starts.json')
        .then((res)=> res.json())
        .then((data)=>{
        document.querySelector("#start").textContent = data[randomNumber(5)]
        })

    // traigo los un nombre Random de protagonista utilizando la API randomuser | despues, mediante un IF, lo agrego al DOM utilizando append, pero primero borro el contenido del Div, si es que ya fue presionado el boton con anterioridad.
    fetch("https://randomuser.me/api/?inc=name")
        .then((resp)=> resp.json())
        .then((data)=>{
            let nombrePersonaje = document.querySelector("#nombrePersonaje");
            if (nombrePersonaje.innerHTML = ""){
                nombrePersonaje.removeChild()
            }else{
                let nombre = document.createElement('p');
                let persona = data.results[0]
                let names = persona.name
                let primer = names.first
                let segundo = names.last
                nombre.innerHTML = primer
                console.log(nombre)
                nombrePersonaje.append(nombre)
            } 
        })
    
    // usando querySelectorAll, traigo a JS todos los elementos Radio del Formulario, luego comparo si esta checkeado para mostrar el contenido 
    let sad = document.querySelector("#sad").checked
    let funny = document.querySelector("#funny").checked
    let tragedy = document.querySelector("#tragedy").checked
    
    if (sad = true){
        fetch('data/sad.json')
            .then((res)=> res.json())
            .then((data)=>{
            document.querySelector("#body").textContent = data[randomNumber(6)]
        })
    } else if (funny = true){
        fetch('data/funny.json')
            .then((res)=> res.json())
            .then((data)=>{
            document.querySelector("#body").textContent = data[randomNumber(6)]
        })
    } else {
        fetch('data/tragedy.json')
            .then((res)=> res.json())
            .then((data)=>{
            document.querySelector("#body").textContent = data[randomNumber(6)]
        })
    }
    // traigo los ends desde el .json de manera random, utilizando el randomNumber para variar el elemento del array
    fetch('data/endings.json')
        .then((res)=> res.json())
        .then((data)=>{
        document.querySelector("#ending").textContent = data[randomNumber(5)]
    })

    
     
}

//creo el evento de imprimir el cuento
botonPrint = document.querySelector('#print')
botonPrint.addEventListener('click', printPageArea)

function printPageArea (cuento){
    let printContent = document.getElementById('cuento')
    let winPrint = window.open('','','width=900, height=650');
    winPrint.document.write(printContent.innerHTML);
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
    winPrint.close();
}