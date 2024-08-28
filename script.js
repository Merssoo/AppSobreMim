//Ajusta o tema da pagina
function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('luz');

    if (html.classList.contains('luz')) {
        localStorage.setItem('theme', 'luz');
    } else {
        localStorage.setItem('theme', 'escuro');
    }
}

//Verifica o tema aplicado na pagina e muda conforme o tema salvo
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'luz') {
        document.documentElement.classList.add('luz');
    }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Pega os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe uma mensagem de confirmação
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\n\nResumo:\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

    // Redireciona para outra página
    window.location.href = "index.html";
});

applySavedTheme();
