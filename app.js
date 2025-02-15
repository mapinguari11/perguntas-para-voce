function enviar() {
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const linguagemInput = document.getElementById('linguagem');

    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const linguagem = linguagemInput.value;

    if (nome === "" || idade === "" || linguagem === "") {
        alert('Preencha todos os campos!');
        return;
    }
    
    const outputSection = document.getElementById('output');
    outputSection.classList.remove('hidden');

    document.getElementById('output-nome').textContent = nome;
    document.getElementById('output-idade').textContent = idade;
    document.getElementById('output-linguagem').textContent = linguagem;
    document.getElementById('pergunta-linguagem').textContent = linguagem;
}

function responder() {
    let resposta = document.getElementById('resposta').value;
    let linguagensResposta = document.getElementById('linguagens-resposta');
    
    linguagensResposta.classList.remove('hidden');

    if (resposta == 1) {
        document.getElementById('retorno-resposta').innerText = 'Muito bom! Continue estudando e você terá muito sucesso.'
    } else {
        document.getElementById('retorno-resposta').innerText = 'Ahh que pena... Já tentou aprender outras linguagens?'
    }
}