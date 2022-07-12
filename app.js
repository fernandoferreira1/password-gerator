let senhaFinal = document.querySelector('#senha')
const btn = document.querySelector('#btnGerarSenha')
const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let senha = '' , intervalo

const gerarSenha = () => {

    for (let i = 1; i <= 12; i++) {
        senha += caracteres[Math.floor(Math.random() * caracteres.length)]
    }

    senhaFinal.textContent = senha

    senha = ''
}

const efeitoGerarSenha = (btn, loop, tempo) => {
    intervalo = setInterval(() => {
        gerarSenha()
    }, 12);

    setTimeout(() => {
        clearInterval(intervalo)
    }, 12 * 50)

}

btn.onclick = () => {
    efeitoGerarSenha()
}
 

senhaFinal.onclick = () => {
    navigator.clipboard.writeText(senhaFinal.textContent)

    senhaFinal.classList.add('copiado')

    setTimeout(() => {
        senhaFinal.classList.remove('copiado')
    }, 2000)
}