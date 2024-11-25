//Obtener Elementos DOM.
const boton = document.getElementById('boton-color');
const color = document.getElementById('color');

//Funcion Generadora Hex
function generateColor() {
    let digitos = '0123456789ABCDEF';

    let colorHex = '#';

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}

//Funcion para Evento
boton.addEventListener('click', () => {
    let colorAleatorio = generateColor();

    color.textContent = colorAleatorio;

    document.body.style.backgroundColor = colorAleatorio;
})