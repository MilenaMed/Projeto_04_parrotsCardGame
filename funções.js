// SELECIONAR A QUANTIDADE DE CARTAS
let quantidade = prompt("Com quantas cartas que jogar?");

const imgViradas = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    'metalparrot',
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
]
imgViradas.sort(comparador);
function comparador() { 
	return Math.random() - 0.5;
}

function QuantidadeCartas() {
    if (quantidade % 2 == 0 && quantidade >= 4 && quantidade <= 14) {
        const lista = document.querySelector("ul");
        let elementosLista = [];

        for (let i = 0; i < quantidade; i++) {
            const item = `
                 <li>
                 <div class="card" onclick="virarCarta(this)">
                    <div class="front-face face">
                        <img src="imagens/back.png" class="imagem" />
                    </div>
                    <div class="back-face face">
                    <img src="imagens/${imgViradas[Math.floor(i/2)]}.gif" class="imagem" />
                    </div>
                   </div>  
                 </li>
             `
            elementosLista.push(item);
        }

        elementosLista.sort(comparador);

        for (let j = 0; j < elementosLista.length; j++) {
            lista.innerHTML += elementosLista[j];
        }

    } else {
        quantidade = prompt("Com quantas cartas que jogar?")
        QuantidadeCartas()
    }
}
QuantidadeCartas();


let contador = 0;

function virarCarta(carta) {
    carta.classList.toggle('virada');
    contador++;

    if (contador == 2) {
        contador = 0;
        // se as cartas forem diferentes
        setTimeout(desvirar, 2000);

    }
}

function desvirar() {
    const cartas = document.querySelectorAll('.virada');
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].classList.remove('virada');
    }
}



// COLOCAR AS IMAGENS EMBARALHADAS

   // return Math.random() - 0.5;
