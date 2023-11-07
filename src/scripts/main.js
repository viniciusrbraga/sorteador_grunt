//  Aguarda todos os demais arquivos css e outros serem processados primeiro
document.addEventListener('DOMContentLoaded', function() {

    // Recupera o formulário e adiciona um evento de submit a ele
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        
        // Evita que o formulário seja recarregado, possibilitando a visualização do resultado
        evento.preventDefault();

        // Recupera o valor informado na tela
        let numeroMaximo = document.getElementById('numero-maximo').value;

        // Converte o conteúdo do campo para inteiro
        numeroMaximo = parseInt(numeroMaximo);

        // Gera um número aleatório, limitado ao valor informado na tela
        let numeroAleatorio = Math.random() * numeroMaximo;
        
        // Arredonda o valor gearado
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        // Atribui o valor calculado ao campo da tela
        document.getElementById('resultado-valor').innerText = numeroAleatorio;

        // Moda o valor do atributo para que o resultado seja exibido após a execução do MediaDeviceInfo.js
        document.querySelector('.resultado').style.display = 'block';
    }) 
})