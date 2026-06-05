document.addEventListener("DOMContentLoaded", () => {
    // Sliders & Contadores
    const prodSlider = document.getElementById('prod-slider');
    const presSlider = document.getElementById('pres-slider');
    const prodDisplay = document.getElementById('prod-display');
    const presDisplay = document.getElementById('pres-display');
    
    // Outputs do Score
    const scoreNumber = document.getElementById('score-number');
    const statusBadge = document.getElementById('status-badge');
    const statusDesc = document.getElementById('status-desc');
    const balanceBar = document.getElementById('balance-bar');
    const scoreCircle = document.querySelector('.score-circle');

    function updateSimulation() {
        const prod = parseInt(prodSlider.value);
        const pres = parseInt(presSlider.value);

        // Atualização visual instantânea dos valores de texto
        prodDisplay.textContent = `${prod}%`;
        presDisplay.textContent = `${pres}%`;

        // Algoritmo Complexo de Score (O equilíbrio perfeito gera o maior score)
        // Penaliza discrepâncias gigantescas entre produção e preservação
        const totalMatriz = prod + pres;
        const discrepancia = Math.abs(prod - pres);
        
        // Base do Score é a média ponderada, subtraindo o fator de desequilíbrio econômico-ecológico
        let scoreFinal = Math.round((totalMatriz / 2) - (discrepancia * 0.3) + 15);
        scoreFinal = Math.min(100, Math.max(0, scoreFinal)); // Garante trava entre 0 e 100

        // Atualiza display numérico
        scoreNumber.textContent = scoreFinal;

        // Atualiza a Barra Dinâmica de Proporção
        const proporcaoProd = (prod / (prod + pres)) * 100;
        balanceBar.style.width = `${proporcaoProd}%`;

        // Máquina de Estados Gráficos e Analíticos
        if (prod >= 75 && pres < 45) {
            // Alta produção agressiva
            statusBadge.textContent = "Modelo Predatório";
            statusBadge.className = "status-badge status-danger";
            statusDesc.textContent = "Alerta Crítico: O esgotamento do solo e multas ambientais comprometerão o lucro em médio prazo.";
            scoreCircle.style.borderColor = "#dc2626";
            balanceBar.style.backgroundColor = "#dc2626";
        } 
        else if (prod < 45 && pres >= 75) {
            // Muita reserva, pouca viabilidade de mercado
            statusBadge.textContent = "Sub-aproveitado";
            statusBadge.className = "status-badge status-warning";
            statusDesc.textContent = "Excelente proteção ambiental, mas a escassez produtiva ameaça a segurança alimentar e a solidez do negócio.";
            scoreCircle.style.borderColor = "#d97706";
            balanceBar.style.backgroundColor = "#d97706";
        } 
        else if (prod >= 70 && pres >= 70) {
            // O ápice do Agro Forte e Sustentável
            statusBadge.textContent = "Sustentabilidade Máxima";
            statusBadge.className = "status-badge status-success";
            statusDesc.textContent = "Perfeito! Alta tecnologia gerando safras recordes com pegada de carbono neutra e preservação ativa.";
            scoreCircle.style.borderColor = "#2d6a4f";
            balanceBar.style.backgroundColor = "#2d6a4f";
        } 
        else {
            // Zonas intermediárias normais
            statusBadge.textContent = "Equilíbrio Estável";
            statusBadge.className = "status-badge status-success";
            statusDesc.textContent = "Sua operação é segura, mas pode escalar produtividade adotando tecnologias de precisão.";
            scoreCircle.style.borderColor = "#1b4d3e";
            balanceBar.style.backgroundColor = "#1b4d3e";
        }
    }

    // Animação numérica progressiva para a seção do Manifesto
    function animateCounters() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let count = 0;
            const speed = target / 50; // Velocidade da animação

            const updateCount = () => {
                if(count < target) {
                    count += Math.ceil(speed);
                    stat.textContent = count > target ? target : count;
                    setTimeout(updateCount, 30);
                }
            };
            updateCount();
        });
    }

    // Event listeners de movimentação em tempo real
    prodSlider.addEventListener('input', updateSimulation);
    presSlider.addEventListener('input', updateSimulation);

    // Inicialização do ecossistema e disparo dos contadores
    updateSimulation();
    animateCounters();
});