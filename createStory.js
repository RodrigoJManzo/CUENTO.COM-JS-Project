//variables
    let areaCuento = document.querySelector('#cuento');
    let boton = document.querySelector('#createCuento');
    let botonSave = document.querySelector('#save');
    let botonLoad = document.querySelector('#load');
    let botonPrint = document.querySelector('#print');

//array para el storage
const cuento = []

//funcion para crear el cuento

boton.addEventListener("click", crear)

function crear ()  {
    let titulo = document.querySelector('#titulo').value.toUpperCase();
    let title = document.createElement("h2");
    title.innerHTML = `<h2 id="titulex"> ${titulo} </h2> `;
    console.log(title)
    
    let comienzo = document.querySelector('#comienzo').value;
    let start = document.createElement('p');
    start.innerHTML = `<p id="textStory1"> ${comienzo} </p>`;
    console.log(start)

    let historia = document.querySelector('#history').value;
    let history = document.createElement('p');
    history.innerHTML = `<p id="textStory2"> ${historia} </p>`;
    console.log(history)

    let cuerpo = document.querySelector('#cuerpo').value;
    let body = document.createElement('p');
    body.innerHTML = `<p id="textStory3"> ${cuerpo} </p>`;
    console.log(body)

    let desenlace = document.querySelector('#desenlace').value;
    let end = document.createElement('p');
    end.innerHTML = `<p id="textStory4"> ${desenlace} </p>`;
    console.log(end)

    let reflexion = document.querySelector('#reflexion').value;
    let reflex = document.createElement('p');
    reflex.innerHTML = `<p id="textStory5"> ${reflexion} </p>`
    console.log(reflex)

    areaCuento.appendChild(title)
    areaCuento.appendChild(start)
    areaCuento.appendChild(history)
    areaCuento.appendChild(body)
    areaCuento.appendChild(end)
    areaCuento.appendChild(reflex) 
}

// funcion para salvar el cuento

//creo la clase para los cuentos
class CuentoHecho{
    constructor(titulex, textStory1, textStory2, textStory3, textStory4, textStory5){
        this.titulex = titulex;
        this.textStory1 = textStory1;
        this.textStory2 = textStory2;
        this.textStory3 = textStory3;
        this.textStory4 = textStory4;
        this.textStory5 = textStory5;
    }
}

const elCuento = () =>{
    let titulex = document.querySelector('#titulex');
    let textStory1 = document.querySelector('#textStory1');
    let textStory2 = document.querySelector('#textStory2');
    let textStory3 = document.querySelector('#textStory3');
    let textStory4 = document.querySelector('#textStory4');
    let textStory5 = document.querySelector('#textStory5');
}

let nuevoCuento = new CuentoHecho (titulex, textStory1, textStory2, textStory3, textStory4, textStory5);

if(localStorage.getItem("nuevoCuento") == null){
    cuento.push(nuevoCuento);
    localStorage.setItem("nuevoCuento", JSON.stringify(cuento))
}else{
    const newCuento = JSON.parse(localStorage.getItem(nuevoCuento))
    newCuento.push(nuevoCuento)
    localStorage.setItem("nuevoCuento", JSON.stringify(newCuento))
}

//creo el evento para salvar

botonSave.addEventListener('click', elCuento)
