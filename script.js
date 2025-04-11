const input = document.getElementById("input"); // pega um elemento pelo id
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");
const formulario = document.getElementById("formulario");
const imagem = document.createElement("img"); // cria um elemento
const titulo = document.getElementById("titulo");

imagem.src = "imagem.jpg"; // endereço da imagem
imagem.classList.add("imagem"); // atribui uma classe ao elemento

// função que escolhe um número aleatorio
function aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// cria a variavel e define que o numero deve ser de 1 a 100
let numeroSecreto = aleatorio(1, 100);

// cria um evento ao clicar no botão
botao.addEventListener("click", enviar);

function enviar(event) {
  event.preventDefault(); // não deixa a pagina recarregar ao enviar o formulario
  const numero = parseInt(input.value); // pega o valor desse elemento

  if (numero < 0 || numero > 100) {
    // se numero < 0 ou > 100 = numero invalido
    mensagem.innerHTML = "<p>Número inválido, tente novamente.</p>";
    input.value = "";
  } else if (numero < numeroSecreto) {
    // se numero < numeroSecreto = numero secreto é maior
    mensagem.innerHTML = "<p>O número secreto é MAIOR.</p>";
    input.value = "";
  } else if (numero > numeroSecreto) {
    // se numero > numeroSecreto = numero secreto é menor
    mensagem.innerHTML = "<p>O número secreto é MENOR.</p>";
    input.value = "";
  } else if (numero == numeroSecreto) {
    mensagem.innerHTML = "<h1>Parabéns, você acertou!</h1>";
    mensagem.appendChild(imagem);
    titulo.style.display = "none";
    formulario.style.display = "none"; // esconde os campos do formulario
  }
}
