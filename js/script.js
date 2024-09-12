var carta = Array(4).fill().map(() => Array(4).fill(0));
var repetidos = [];
var i1, i2;

// Función para generar las cartas
function generateCard() {
    let container = document.getElementById("cards-container");
    container.innerHTML = '';  // Limpiar el contenedor

    repetidos = [];
    var c = 1;

    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            let n;
            do {
                n = Math.floor(Math.random() * 54) + 1;
            } while (repetidos.includes(n));

            repetidos.push(n);
            carta[x][y] = n;

            // Crear el elemento de imagen
            let cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-3');
            let cardImg = document.createElement("img");
            cardImg.src = "../img/" + n + ".jpg";
            cardImg.alt = "Card " + c;
            cardImg.classList.add("card-img");
            cardDiv.appendChild(cardImg);

            container.appendChild(cardDiv);
            c++;
        }
    }
}

// Función para consultar y mostrar la imagen en la vista previa
function consultar() {
    i1 = document.getElementById("i1").value;
    i2 = document.getElementById("i2").value;

    if (i1 < 0 || i1 > 3 || i2 < 0 || i2 > 3) {
        alert("Por favor, elige números válidos entre 0 y 3.");
        return;
    }

    document.getElementById('preview').src = "../img/" + carta[i1][i2] + ".jpg";
    playSound();
}

// Función para reproducir el sonido asociado
function playSound() {
    let audio = new Audio("audio//b" + carta[i1][i2] + ".mp3");
    audio.play();
}

// Generar la primera carta al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    generateCard();
});
