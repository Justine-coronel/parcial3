let baseUrl = "http://localhost:8080";

/*Menu Desplegable */
function ToggleMenu() {
    const menuToggle = document.querySelector('.menutoggle')
    menuToggle.classList.toggle('active')
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('active')
}

function MenuDesplegable() {
    let doc, value, x
    fetch(baseUrl + '/datacsm?id=8')
            .then(res => res.json())
            .then(resp => {
                Object.keys(resp).forEach(function (key) {
                    doc = document.getElementById('item' + key)
                    doc.appendChild(document.createTextNode(resp[key]['titulo']))
                }); 
            })
}

function BuscarDatos() {
    let title, parraf, imag, text
    for (let i = 1; i <= 7; i++) {
        fetch(baseUrl + '/datacsm?id=' + i)
        .then(res => res.json())
        .then(resp => {
            if (i == 1) {
                title = document.getElementById('titulo1');
                parraf = document.getElementById('parrafo1')
                imag = document.getElementById('img1')
                imag.src = resp[0]['imagenes']
                text = document.createTextNode(resp[0]['titulo'])
                title.appendChild(text);
                text = document.createTextNode(resp[0]['parrafo'])
                parraf.appendChild(text)
            } else if (i == 2) {
                title = document.getElementById('titulo2');
                parraf = document.getElementById('parrafo2')
                imag = document.getElementById('img2')
                imag.src = resp[0]['imagenes']
                text = document.createTextNode(resp[0]['titulo'])
                title.appendChild(text);
                text = document.createTextNode(resp[0]['parrafo'])
                parraf.appendChild(text)
            } else if (i == 3) {
                Object.keys(resp).forEach(function (key) {
                    if (key == 0) {
                        title = document.getElementById('titlepersonaje')
                        parraf = document.getElementById('personajeparra1')
                        imag = document.getElementById('personajeimg1')
                        imag.src = resp[key]['imagenes']
                        text = document.createTextNode(resp[key]['titulo'])
                        title.appendChild(text);
                        text = document.createTextNode(resp[key]['parrafo'])
                        parraf.appendChild(text)
                    } else {
                        parraf = document.getElementById('personajeparra2')
                        imag = document.getElementById('personajeimg2')
                        imag.src = resp[key]['imagenes']
                        text = document.createTextNode(resp[key]['parrafo'])
                        parraf.appendChild(text)
                    }
                }); 
            } else if (i == 4) {
                Object.keys(resp).forEach(function (key) {
                    if (key == 0) {
                        title = document.getElementById('cazadortitle')
                        parraf = document.getElementById('cazadorparrafo')
                        imag = document.getElementById('cazador0')
                        imag.src = resp[key]['imagenes']
                        text = document.createTextNode(resp[key]['titulo'])
                        title.appendChild(text);
                        text = document.createTextNode(resp[key]['parrafo'])
                        parraf.appendChild(text)
                    } else {
                        imag = document.getElementById('cazador'+key)
                        imag.src = resp[key]['imagenes']
                    }
                }); 
            } else if (i == 5) {
                Object.keys(resp).forEach(function (key) {
                    if (key == 0) {
                        title = document.getElementById('demoniotitle0')
                        parraf = document.getElementById('demonioparra0')
                        text = document.createTextNode(resp[key]['titulo'])
                        title.appendChild(text);
                        imag = document.getElementById('demonioimg0')
                        imag.src = resp[key]['imagenes']
                        text = document.createTextNode(resp[key]['parrafo'])
                        parraf.appendChild(text)
                    } else {
                        title = document.getElementById('demoniotitle' + key)
                        parraf = document.getElementById('demonioparra'+key)
                        imag = document.getElementById('demonioimg'+key)
                        imag.src = resp[key]['imagenes']
                        text = document.createTextNode(resp[key]['titulo'])
                        title.appendChild(text);
                        text = document.createTextNode(resp[key]['parrafo'])
                        parraf.appendChild(text)
                    }
                }); 
            } else {
                title = document.getElementById('title6');
                parraf = document.getElementById('parraf6')
                imag = document.getElementById('img6')
                imag.src = resp[0]['imagenes']
                text = document.createTextNode(resp[0]['titulo'])
                title.appendChild(text);
                text = document.createTextNode(resp[0]['parrafo'])
                parraf.appendChild(text)
            } 
        })  
    }        
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
/*kobeni*/
document.addEventListener('DOMContentLoaded', function () {
    const introduccion = document.querySelector('.Introduccion');
    const imagenInic = document.querySelector('.ImagenInic');

    introduccion.style.transition = 'transform 1s ease-out';
    imagenInic.style.transition = 'transform 1s ease-out';

    function resetearPosiciones() {
        introduccion.style.transform = 'translateX(0)';
        imagenInic.style.transform = 'translateX(0)';
    }
    introduccion.style.transform = 'translateX(100%)';
    imagenInic.style.transform = 'translateX(100%)';

    setTimeout(resetearPosiciones, 100);
});

/*makima*/
document.addEventListener('DOMContentLoaded', function () {
    const imgSec2 = document.querySelector('.imgSec2');
    const textSec2 = document.querySelector('.textSec2');

    imgSec2.style.transition = 'transform 1.5s ease-out';
    textSec2.style.transition = 'transform 1.5s ease-out';

    function resetearPosiciones() {
        imgSec2.style.transform = 'translateX(0)';
        textSec2.style.transform = 'translateX(0)';
    }

    imgSec2.style.transform = 'translateX(100%)';
    textSec2.style.transform = 'translateX(100%)';

    setTimeout(resetearPosiciones, 100);
});

/*carousel*/
const demonios = document.querySelectorAll('.ContDem');
let counter = 0;

function mostrarElemento(index) {
    demonios.forEach((element, idx) => {
        if (idx === index || idx === index + 1) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

function siguiente() {
    if (counter < demonios.length - 2) {
        counter += 2;
    } else {
        counter = 0;
    }
    mostrarElemento(counter);
}

function anterior() {
    if (counter > 0) {
        counter -= 2;
    } else {
        counter = demonios.length - 2;
    }
    mostrarElemento(counter);
}

mostrarElemento(0);

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', anterior);
nextBtn.addEventListener('click', siguiente);

/*formulario*/
const formulario = document.getElementById('si');
const campos = formulario.querySelectorAll('.campo input, .campo textarea');

function cambiarColor() {
    campos.forEach((campo) => {
        campo.style.transition = 'background-color 0.5s';
        const colorAleatorio = generarColorAleatorio();
        campo.style.backgroundColor = colorAleatorio;
    });
}

function restaurarColor() {
    campos.forEach((campo) => {
        campo.style.backgroundColor = 'white';
    });
}

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

formulario.addEventListener('mouseover', cambiarColor);
formulario.addEventListener('mouseout', restaurarColor);

/*cazadores*/
const imagenes = document.querySelectorAll('.imgcont');

imagenes.forEach((imagen) => {
    imagen.addEventListener('mouseenter', () => {
        imagen.style.transition = 'transform 0.5s'; // Agrega una transición suave
        imagen.style.transform = 'rotateY(180deg)'; // Rota la imagen 180 grados sobre el eje Y al pasar el mouse
    });

    imagen.addEventListener('mouseleave', () => {
        imagen.style.transform = 'rotateY(0)'; // Devuelve la imagen a su posición original al sacar el mouse
    });
});



/*************************************************************************/
// Evitar el desplazamiento de la página al presionar las teclas de flecha
window.addEventListener('keydown', function (e) {
    // Verificar si se está presionando una tecla de flecha dentro del juego de la serpiente
    const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (arrowKeys.includes(e.key)) {
        e.preventDefault(); // Evitar el comportamiento predeterminado (desplazamiento de la página)
    }
});

// Restablecer el desplazamiento de la página cuando se sale del juego
document.addEventListener('keyup', function (e) {
    // Verificar si la tecla de flecha se ha soltado
    const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (arrowKeys.includes(e.key)) {
        e.preventDefault(); // Evitar el comportamiento predeterminado (desplazamiento de la página)
    }
});

const tablero = document.querySelector(".tablero")
const puntuacionActual = document.querySelector(".puntuacion")


let comidaX, comidaY;
let serpX = 5, serpY = 10;
let cuerpoSerp = [];
let velocidadX = 0, velocidadY = 0;
let finJuego = false;
let setIntervalId;
let pumtuacion = 0;

const cambiarPosicionComida = () => {
    //Colocar la comida en una posicion random de 0 a 30 que es el espacio del tablero
    comidaX = Math.floor(Math.random() * 30) + 1;
    comidaY = Math.floor(Math.random() * 30) + 1;
}

const controlFinJuego = () => {
    clearInterval(setIntervalId);
    alert("Fin del juego");
    location.reload()
}

const cambiarDireccion = (e) => {
    if (e.key === "ArrowUp" && velocidadY !== 1) {
        velocidadX = 0;
        velocidadY = -1;
    } else if (e.key === "ArrowDown" && velocidadY !== -1) {
        velocidadX = 0;
        velocidadY = 1;
    } else if (e.key === "ArrowLeft" && velocidadX !== 1) {
        velocidadX = -1;
        velocidadY = 0;
    } else if (e.key === "ArrowRight" && velocidadX !== -1) {
        velocidadX = 1;
        velocidadY = 0;
    }
}

const iniciarJuego = () => {
    if (finJuego) return controlFinJuego();
    let htmlMarkup = `<div class="comida" style="grid-area: ${comidaY} / ${comidaX}"></div>`;

    //Verificacion para ver si la serpiente pasa por la comida
    if (serpX === comidaX && serpY === comidaY) {
        cambiarPosicionComida();
        cuerpoSerp.push({ comidaX, comidaY });
        pumtuacion++;

        puntuacionActual.innerText = `Puntuacion: ${pumtuacion}`
    }

    for (let i = cuerpoSerp.length - 1; i > 0; i--) {
        cuerpoSerp[i] = cuerpoSerp[i - 1]
    }

    cuerpoSerp[0] = [serpX, serpY];

    serpX += velocidadX;
    serpY += velocidadY


    //Verificacion de que la serpiente salio del tablero
    if (serpX <= 0 || serpX > 30 || serpY <= 0 || serpY > 30) {
        finJuego = true;
    }


    for (let i = 0; i < cuerpoSerp.length; i++) {
        htmlMarkup += `<div class="cabeza" style="grid-area: ${cuerpoSerp[i][1]} / ${cuerpoSerp[i][0]}"></div>`;

        //Verificacion para que la serpiente no toque su propio cuerpo
        if (i !== 0 && cuerpoSerp[0][1] === cuerpoSerp[i][1] && cuerpoSerp[0][0] === cuerpoSerp[i][0])
            finJuego = true;
    }


    tablero.innerHTML = htmlMarkup;
}

cambiarPosicionComida()
setIntervalId = setInterval(iniciarJuego, 125)
document.addEventListener("keydown", cambiarDireccion)
//**********************************************************************************************************************************/

// Función para imprimir los títulos en los elementos con id "contenedorT"
function imprimirDatosTitulos() {
    // Obtener todos los elementos con id "contenedorT"
    let contenedores = document.querySelectorAll("#contenedorT");
    
    contenedores.forEach((contenedor, index) => {
        // Verificar que haya un dato correspondiente al índice actual
        if (datos[6]) {
            contenedor.innerHTML = `<h1>${datos[6]}</h1>`;
        }
    });
}


// Llamada a la función para obtener los datos al cargar la página
function start() {
    BuscarDatos()
    MenuDesplegable()
}