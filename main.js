function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let tabela = document.getElementById("tabelaContatos");
    let linhasExistentes = tabela.getElementsByTagName("tr");

    // Verifica se o nome já existe na tabela
    let nomeExiste = Array.from(linhasExistentes).some(row => row.cells[0]?.innerHTML === nome);

    if (nomeExiste) {
        alert("Erro: O nome fornecido já foi inserido.");
        return;
    }

    let novaLinha = tabela.insertRow(-1);
    let celula1 = novaLinha.insertCell(0);
    let celula2 = novaLinha.insertCell(1);

    celula1.innerHTML = nome;
    celula2.innerHTML = telefone;

    document.getElementById("formContato").reset();
}
