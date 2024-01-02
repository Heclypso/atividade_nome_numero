function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let tabela = document.getElementById("tabelaContatos");
    let linhasExistentes = tabela.getElementsByTagName("tr");
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


function validarFormulario() {
    let telefone = document.getElementById('telefone').value.replace(/\D/g, '');

    if (telefone.length < 11 || telefone.length > 13) { // Exemplo para prefixos de 2 a 4 dígitos
        alert('Por favor, insira um número de telefone válido com prefixo.');
        return false;
    }

    adicionarContato();
    return false; // Isso previne o comportamento padrão do formulário
}

// Resto das suas funções aqui (validarNome, formatarTelefone)
function validarNome(input) {
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕçÇ\s]/g, '');
}

function validarTelefone(input) {
    let maxDigits = 13; // Ajuste conforme necessário
    input.value = input.value.replace(/[^0-9]/g, '').substring(0, maxDigits);
}


