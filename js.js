document.getElementById('adicionar').addEventListener('click', function() {
    const servico = document.getElementById('servico').value;
    const dataServico = document.getElementById('data_servico').value;
    const valor = document.getElementById('valor').value;

    if (servico && dataServico && valor) {
        const historicoDiv = document.getElementById('historico');
        const novoItem = document.createElement('div');
        novoItem.classList.add('historico-item');

        const servicoP = document.createElement('p');
        servicoP.textContent = `Serviço: ${servico}`;
        const dataP = document.createElement('p');
        dataP.textContent = `Data: ${dataServico}`;
        const valorP = document.createElement('p');
        valorP.textContent = `Valor: R$ ${valor}`;
        const deletarBtn = document.createElement('button');
        deletarBtn.textContent = 'Deletar';
        deletarBtn.classList.add('deletar-btn');

        novoItem.appendChild(servicoP);
        novoItem.appendChild(dataP);
        novoItem.appendChild(valorP);
        novoItem.appendChild(deletarBtn);
        historicoDiv.appendChild(novoItem);

        // Limpar os campos após adicionar
        document.getElementById('servico').value = '';
        document.getElementById('data_servico').value = '';
        document.getElementById('valor').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('historico').addEventListener('click', function(e) {
    if (e.target.classList.contains('deletar-btn')) {
        e.target.parentElement.remove();
    }
});

document.getElementById('deletar').addEventListener('click', function() {
    window.print();
});
