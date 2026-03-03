document.getElementById('cracha-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue

    // Captura os valores do formulário
    const matricula = document.getElementById('matricula').value.trim();
    const nome = document.getElementById('nome').value.trim().toUpperCase();
    const funcao = document.getElementById('funcao').value.trim().toUpperCase();
    const via = document.getElementById('via').value;

    // Preenche os dados na área de impressão
    document.getElementById('out-matricula').textContent = matricula;
    document.getElementById('out-nome').textContent = nome;
    document.getElementById('out-funcao').textContent = funcao;
    document.getElementById('titulo-documento').textContent = `Autorização para Confecção de Crachás ${via}.`;

    // Gera a data atual por extenso
    const data = new Date();
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    const dataFormatada = `Volta Redonda, ${dia} de ${mes} de ${ano}.`;
    document.getElementById('data-atual').textContent = dataFormatada;

    // Chama a janela de impressão do sistema operacional
    window.print();
});