// CRIAR CARTA E SELECIONAR QUANTIDADE DE CARTAS
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
                 <div class="carta" onclick="virarCarta(this)">
                    <div class="frente-face face">
                        <img src="imagens/back.png" class="imagem" />
                    </div>
                    <div class="costas-face face">
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

// VIRAR E VERIFICAR SE AS CARTAS SÃO IGUAIS

let cartasViradas = []
let indice = 0

function virarCarta(carta) {
    carta.classList.toggle('virada');
     indice += 1;
     cartasViradas.push(carta)
     if (indice === 2) {
        verificaMatch()
         indice = 0;
     }
}

console.log(verificaMatch())

function desvirar(var1, var2) {
        var1.classList.remove("virada");
        var2.classList.remove("virada");
    }

function verificaMatch() {
    let carta1 = cartasViradas[0].innerHTML;
    let carta2 = cartasViradas[1].innerHTML;
     if (carta1 === carta2) {
     } else {
        setTimeout(desvirar, 2000, cartasViradas[0], cartasViradas[1]);
     }
     cartasViradas = [];
 }

//  FINALIZAR JOGO
//  function finalizarJogo(){
    
//  }