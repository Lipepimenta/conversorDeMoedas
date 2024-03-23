// Função para fazer a requisição AJAX
function fetchCotacoes() {
    return fetch("https://economia.awesomeapi.com.br/json/all")
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro! O site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
        }
        return response.json();
      });
  }
  
  // Função para formatar a data
  function formatarData(data) {
    const date = new Date(data);
    return date.toLocaleString('pt-BR');
  }
  
  // Função para calcular e exibir o resultado
  function calcularResultado(valorMoeda, codigoMoeda, numeroDigitado) {
    const calculo = numeroDigitado * valorMoeda;
    const numeroFormatado = new Intl.NumberFormat('en-US', { style: 'currency', currency: codigoMoeda }).format(numeroDigitado);
    const calculoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculo);
    const dataAtualizacao = formatarData(resultado[codigoMoeda].create_date);
  
    const saida = document.querySelector("#valor-destino");
    saida.innerHTML = `Resultado: ${numeroFormatado} = ${calculoFormatado}`;
    
    const atualizacao = document.querySelector("#atualizacao");
    atualizacao.innerHTML = `Cotação atualizada em ${dataAtualizacao}`;
  }
  
  // Função para lidar com o evento de conversão
  function converter() {
    const numeroDigitado = parseFloat(document.querySelector("#valor-origem").value);
    const selecionado = document.querySelector("#tipo-origem").value;
  
    if (isNaN(numeroDigitado) || numeroDigitado <= 0 || selecionado === "NULL") {
      alert("Digite um valor válido e escolha uma moeda!");
      return;
    }
  
    fetchCotacoes()
      .then(data => {
        resultado = data;
  
        const cotacao = resultado[selecionado]?.bid;
        if (!isNaN(cotacao)) {
          calcularResultado(cotacao, selecionado, numeroDigitado);
        } else {
          throw new Error(`Não foi possível obter a cotação para ${selecionado}`);
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }
  