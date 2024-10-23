document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('responseForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const formData = new FormData(form);
        const dataObject = Object.fromEntries(formData.entries());

        // faz a conversão do objeto para JSON
        const jsonData = JSON.stringify(dataObject);

        // exibe na tela as respostas do usuário!
        resultDiv.innerHTML = `
            <h2>Resposta Enviada!</h2>
            <pre>${jsonData}</pre>
        `;
    });
});
