

// constantes
const boton = document.querySelector("#creador")

// creacion del cuento

// funcion para hacer random

function randomNumber (max) {
    return Math.floor(Math.random()*max);
}

// funcion de crear el cuento
boton.addEventListener("click", crear);

function crear() {
    let titulo = document.querySelector("#title").value.toUpperCase();
    document.querySelector("#tituloCuento").textContent = titulo;
    console.log(titulo)

   fetch('data/histories.json')
    .then((res)=> res.json())
    .then((data)=>{
        document.querySelector("#history").textContent = data[randomNumber(6)]
    })

    fetch('data/starts.json')
        .then((res)=> res.json())
        .then((data)=>{
        document.querySelector("#start").textContent = data[randomNumber(5)]
        })


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
    

    let body = document.querySelectorAll(".selector").id;
    
    if (body == "triste"){
        fetch('data/sad.json')
            .then((res)=> res.json())
            .then((data)=>{
            document.querySelector("#body").textContent = data[randomNumber(6)]
        })
    } else if (body == "funny"){
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

    fetch('data/endings.json')
        .then((res)=> res.json())
        .then((data)=>{
        document.querySelector("#ending").textContent = data[randomNumber(5)]
    })
     
}

