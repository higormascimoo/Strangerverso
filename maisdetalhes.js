// variaveis?
// dados de saída?
// dados de entrada?

const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [

    "Jane Ives (Eleven)",
    "Dustin Henderson",
    "Nancy Wheeler",
    "Lucas Sinclair",
    "Joyce Byers",
    "Jim Hopper",
    "Mike Wheeler",
    "Max Manfield",
    "Will Byers", 
    "Jonathan Byers",
]

// clicar em fazer pergunta
function fazerPergunta() {
  if(inputPergunta.value == "") {
  alert("Digite sua pergunta")
  return
}

buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar numero aleatorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
elementoResposta.style.opacity = 1;

// sumir a resposta depois de 3 segundos
setTimeout(function() {
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("disabled")
}, 3000)
}
