let nota1, nota2, nota3, nota4, media;

function verificar() {
    //entrada
    nota1 = Number(frmMedia.nota1.value);
    nota2 = Number(frmMedia.nota2.value);
    nota3 = Number(frmMedia.nota3.value);
    nota4 = Number(frmMedia.nota4.value);
    
    //processamento
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    //saída
    frmMedia.txtMedia.value = media.toFixed(1);
    
    // Pegando o campo de status
    let statusField = document.getElementsByName('txtStatus')[0];
    
    // Limpar classes antigas
    statusField.classList.remove('status-aprovado', 'status-reprovado');
    
    //status
    if (media < 6) {
        statusField.value = "REPROVADO";
        statusField.classList.add('status-reprovado');
        document.getElementById('status').src = "img/reprovado.png";
    } else {
        statusField.value = "APROVADO";
        statusField.classList.add('status-aprovado');
        document.getElementById('status').src = "img/aprovado.png";
    }
}

function limpar() {
    document.getElementById('status').src = "img/neutro.webp";
    // Remove as classes de status
    let statusField = document.getElementsByName('txtStatus')[0];
    statusField.classList.remove('status-aprovado', 'status-reprovado');
    statusField.value = "";
}
