// Selecionando os elementos do DOM
const prodInput = document.getElementById('produtividade');
const presInput = document.getElementById('preservacao');
const prodVal = document.getElementById('prod-val');
const presVal = document.getElementById('pres-val');
const resultado = document.getElementById('resultado');

function atualizarSimulador() {
    // Pega os valores atuais dos sliders
    const prod = parseInt(prodInput.value);
    const pres = parseInt(presInput.value);

    // Atualiza o texto na tela
    prodVal.textContent = prod;
    presVal.textContent = pres;

    // Lógica de cálculo do equilíbrio sustentável
    // O cenário ideal é alta produtividade com alta preservação
    if (prod > 70 && pres < 50) {
        resultado.textContent = "Alerta: Alta produção com baixa preservação esgota os recursos do solo rapidamente.";
        resultado.className = "result-box alert-perigo";
    } else if (prod < 40 && pres > 70) {
        resultado.textContent = "Atenção: Excelente preservação, mas a produtividade está abaixo do potencial forte do agro.";
        resultado.className = "result-box alert-neutro";
    } else if (prod >= 70 && pres >= 70) {
        resultado.textContent = "Perfeito! Agro Forte e Sustentável. Máxima eficiência com respeito ao futuro.";
        resultado.className = "result-box alert-sucesso";
    } else {
        resultado.textContent = "Equilíbrio moderado. Há espaço para aplicar mais tecnologia e preservar ainda mais.";
        resultado.className = "result-box alert-neutro";
    }
}

// Escutando as mudanças nos inputs
prodInput.addEventListener('input', atualizarSimulador);
presInput.addEventListener('input', atualizarSimulador);

// Executa uma vez ao carregar a página
atualizarSimulador();