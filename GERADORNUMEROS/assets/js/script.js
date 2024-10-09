const button = document.getElementById('generate'); /*Aqui é criado uma variável para o botão.*/

button.addEventListener('click', function() { /*Essa linha é responsável por atribuir função ao botão quando clicado*/
    const min = parseInt( document.getElementById('min').value) /*O parseInt declara que a variável é um número inteiro*/
    const max = parseInt( document.getElementById('max').value) /*O Value declara que o conteúdo é o valor dentro do input*/

    let result = Math.floor(Math.random() * (max - min + 1)) + min; /*Formula responsável pela geração do número aleatório*/

    if (isNaN(result)) { /*Esse if demonstra a mensagem de erro caso o input não seja preenchido*/
        result = 'Valor inválido'
    }


    document.querySelector('#result > span').textContent = result; /*Essa query demonstra o resultado do cálculo dentro do span*/
});