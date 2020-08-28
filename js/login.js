function validarCadastro() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    var caixaEmail = document.getElementById('email')
    var caixaSenha = document.getElementById('senha')

    if (email == "" || senha == "") {
        caixaEmail.classList.add('erro')
        caixaSenha.classList.add('erro')

    }
}