let quantidade = prompt("Com quantas cartas que jogar?");

function QuantidadeCartas() {
    if (quantidade % 2 == 0 && quantidade >= 4 && quantidade <= 14) {
        for (i = 0; i < quantidade; i++) {
            const lista = document.querySelector("ul")
            console.log (lista)
            const item = `
                <li>
                    <div onclick="virar(this)" class="card">
                        <img src="imagens/back.png" class="imagem" />
                    </div>
                </li>
            `
            lista.innerHTML += item
        }
    } else {
        return quantidade = prompt("Com quantas cartas que jogar?");
    }
}