document.addEventListener("DOMContentLoaded", function() {
    // Simulando a contagem de dados
    let usersCount = 150;
    let salesCount = 320;
    let revenueCount = 12500;

    // Função para atualizar o conteúdo das métricas
    function updateDashboard() {
        document.getElementById("users-count").textContent = usersCount;
        document.getElementById("sales-count").textContent = salesCount;
        document.getElementById("revenue-count").textContent = `$${revenueCount}`;
    }

    // Simulação de incremento dos dados ao longo do tempo
    setInterval(function() {
        usersCount += Math.floor(Math.random() * 10);
        salesCount += Math.floor(Math.random() * 5);
        revenueCount += Math.floor(Math.random() * 500);
        updateDashboard();
    }, 3000);

    // Inicializando o dashboard com os valores iniciais
    updateDashboard();
});