function validarCadastro() {
    // Validar se as senhas coincidem
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // Validar se todos os campos estão preenchidos
    var campos = document.querySelectorAll('#cadastroForm [required]');
    for (var i = 0; i < campos.length; i++) {
        if (!campos[i].value) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
    }

    // Validar se a idade é maior que 18 anos
    var idade = document.getElementById('idade').value;
    if (idade < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar!');
        return;
    }

    // Se todas as validações passarem, você pode enviar o formulário ou executar outra ação.
    alert('Cadastro bem-sucedido!');
}

function toggleTheme(theme) {
    // Adapte esta função para alternar entre os temas dark e light
    document.body.className = theme;
}
