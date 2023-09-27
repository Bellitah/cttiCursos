const resultadoNoSite = document.querySelector('#resultado')

const btnStart = document.querySelector('#start-game')
btnStart.addEventListener('click', start)

function start() {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1

  let tentativas = 0

  let numeroDoUser

  while (numeroDoUser !== numeroAleatorio) {
    numeroDoUser = prompt(`Adivinhe o número de 1 a 10:\n
    Número de tentativas: ${tentativas} \n`)

    tentativas++

    if (!numeroDoUser) {
      break
    }

    if (numeroDoUser == numeroAleatorio) {
      alert(` Parabéns, você acertou o número com ${tentativas} tentativa(s) `)
      break
    } else {
      alert(
        `Você errou! Tente novamente. Até agora você tentou: ${tentativas} vez(es)`
      )
    }
  }
}
