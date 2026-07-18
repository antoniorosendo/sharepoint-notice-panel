document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("btn-confirmar");
    const status = document.getElementById("status-leitura");
    let lido = false;

    botao.addEventListener("click", function() {
        if (!lido) {
            lido = true;
            botao.textContent = "Confirmado";
            botao.classList.add("read");
            status.textContent = "Status: Lido com sucesso!";
            status.style.color = "#107c41";
        }
    });
});