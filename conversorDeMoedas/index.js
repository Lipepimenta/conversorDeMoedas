var dolarEUA = 4.92;
var dolarAU = 3.23
var euro = 5.34;
var libra = 6.25;

function obterValorEmReais(moeda) {
    switch (moeda) {
        case 'dolarEUA':
            return dolarEUA;
        case 'dolarAU':
            return dolarAU;
        case 'euro':
            return euro;
        case 'libra':
            return libra;
        default:
            return 0;
    }
}

function atualizaLista() {
    var moedaSelecionada = document.getElementById('listaMoedas').value; // Obtém o valor selecionado no dropdown
    var valorEmReais = obterValorEmReais(moedaSelecionada); // Atualiza o valor fixo exibido na página com base na moeda selecionada
    document.getElementById('valorEmReal').value = ""; // Limpa os campos ao alterar de moeda
    document.getElementById('resultado').value = "";

    var mensagem = "1 " + moedaSelecionada + " igual a " + valorEmReais.toFixed(2) + " Real brasileiro";
    document.getElementById('mensagemConversao').innerText = mensagem;
}

function calcular() {
    var valorMoeda = parseFloat(document.getElementById('valorEmReal').value);
    var moedaSelecionada = document.getElementById('listaMoedas').value;

    var valorVariavel = eval(moedaSelecionada);
    var resultado = valorMoeda/valorVariavel;

    document.getElementById('resultado').value = resultado.toFixed(2);
}