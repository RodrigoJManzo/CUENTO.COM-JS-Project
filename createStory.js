//variables
    let areaCuento = document.querySelector('#cuento');
    let boton = document.querySelector('#createCuento');
    let botonSave = document.querySelector('#save');
    let botonPrint = document.querySelector('#print');
    let botonReload = document.querySelector('#reload')

//array para el storage
const cuento = [];

//funcion para crear el cuento

boton.addEventListener("click", crear);

function crear ()  {
    let titulo = document.querySelector('#titulo').value.toUpperCase();
    let title = document.createElement("h2");
    title.innerHTML = titulo;
    title.setAttribute('id','textStory0');
    console.log(title);
    
    let comienzo = document.querySelector('#comienzo').value;
    let start = document.createElement('p');
    start.innerHTML = comienzo;
    start.setAttribute('id','textStory1');
    console.log(start);

    let historia = document.querySelector('#history').value;
    let history = document.createElement('p');
    history.innerHTML = historia;
    history.setAttribute('id', 'textStory2');
    console.log(history);

    let cuerpo = document.querySelector('#cuerpo').value;
    let body = document.createElement('p');
    body.innerHTML = cuerpo;
    body.setAttribute('id', 'textStory3');
    console.log(body);

    let desenlace = document.querySelector('#desenlace').value;
    let end = document.createElement('p');
    end.innerHTML = desenlace;
    end.setAttribute('id', 'textStory4');
    console.log(end);

    let reflexion = document.querySelector('#reflexion').value;
    let reflex = document.createElement('p');
    reflex.innerHTML = reflexion;
    reflex.setAttribute('id', 'textStory5');
    console.log(reflex);

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
    constructor(textStory0, textStory1, textStory2, textStory3, textStory4, textStory5){
        this.textStory0 = textStory0;
        this.textStory1 = textStory1;
        this.textStory2 = textStory2;
        this.textStory3 = textStory3;
        this.textStory4 = textStory4;
        this.textStory5 = textStory5;
    }
}

const elCuento = () =>{
    let textStory0 = document.getElementById('textStory0').textContent;
    let textStory1 = document.getElementById('textStory1').textContent;
    let textStory2 = document.getElementById('textStory2').textContent;
    let textStory3 = document.getElementById('textStory3').textContent;
    let textStory4 = document.getElementById('textStory4').textContent;
    let textStory5 = document.getElementById('textStory5').textContent;

    let nuevoCuento = new CuentoHecho (textStory0, textStory1, textStory2, textStory3, textStory4, textStory5);

    console.log(nuevoCuento)

    if(localStorage.getItem("nuevoCuento") == null){
        cuento.push(nuevoCuento);
        localStorage.setItem("nuevoCuento", JSON.stringify(cuento));
    }else{
        const newCuento = JSON.parse(localStorage.getItem('nuevoCuento'));
        newCuento.push(nuevoCuento);
        localStorage.setItem("nuevoCuento", JSON.stringify(newCuento));
    }
}
//creo el evento para salvar
botonSave.addEventListener('click', elCuento)

//creo el evento de imprimir el cuento

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

//creo el evento de reload

botonReload.addEventListener('click', reloadPage)

function reloadPage(){
    window.location.reload(true);
}
