function enviar() {
    nome = document.getElementById('nome').value;
    idade = document.getElementById('idade').value;
    linguagem = document.getElementById('linguagem').value;

    if (nome === "" || idade === "" || linguagem === "") {
        alert('Preencha todos os campos!');
        return;
    }
    
    document.getElementById('output').classList.remove('hidden');

    document.getElementById('output-nome').innerText = nome;
    document.getElementById('output-idade').innerText = idade;
    document.getElementById('output-linguagem').innerText = linguagem;
    document.getElementById('pergunta-linguagem').innerText = linguagem;
}

function responder() {
    let resposta = document.getElementById('resposta').value;
    
    document.getElementById('linguagens-resposta').classList.remove('hidden');

    if (resposta == 1) {
        document.getElementById('retorno-resposta').innerText = 'Muito bom! Continue estudando e você terá muito sucesso.'
    } else {
        document.getElementById('retorno-resposta').innerText = 'Ahh que pena... Já tentou aprender outras linguagens?'
    }
}