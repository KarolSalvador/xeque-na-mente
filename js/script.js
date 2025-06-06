const voltarAoTopo = document.getElementById('voltarAoTopo');

window.addEventListener('scroll', function() {
    console.log(window.scrollY);

    if(window.scrollY >= 870) {
        voltarAoTopo.classList.add('mostrarBotao');

    } else {
        voltarAoTopo.classList.remove('mostrarBotao');
    }
});

document.getElementById('enviarBtn').addEventListener('click', validaFormulario);

const dadosUsuario = [];

function validaFormulario(event) {
    event.preventDefault();
    if(document.getElementById('nome-do-usuario').value != "" && document.getElementById('email-do-usuario').value != "") {
        alert("Prontinho! Obrigada pelo seu cadastro.");
        
        let nomeDigitado = document.getElementById('nome-do-usuario').value;
        let emailDigitado = document.getElementById('email-do-usuario').value;

        let dadosDoFormulario = {
            nome: nomeDigitado,
            email: emailDigitado
        };

        dadosUsuario.push(dadosDoFormulario);
        console.log(dadosUsuario);

    } else {
        alert("Preencha os dados para envio do formulário.");
    }

}
