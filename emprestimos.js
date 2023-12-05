//voltar para o menu
function back(){
    window.location.href="menu-bibliotecario.html"
}
// função emprestar livro ,onde esta todas as informações
function emprestarLivro() {
    //constante fixo somente na leitura,o elemento atribuito Id que foi especificado
    const livro = document.getElementById('livro').value;
    const pessoa = document.getElementById('pessoa').value;
    const data_emprestimo = document.getElementById('data_emprestimo').value;
    const data_devolucao = document.getElementById('data_devolucao').value;

    const listaEmprestimos = document.getElementById('lista-emprestimos');
    const novoEmprestimo = document.createElement('li');

    novoEmprestimo.innerHTML = `
        <strong>Livro:</strong> ${livro}<br>
        <strong>Pessoa:</strong> ${pessoa}<br>
        <strong>Data de Empréstimo:</strong> ${data_emprestimo}<br>
        <strong>Data de Devolução:</strong> ${data_devolucao}
    `;

    //definir um novo conteúdo para ele 
    listaEmprestimos.appendChild(novoEmprestimo);
    // definir um novo conteúdo para ele ,move o elemento para área visível do navegador ,para facilitar a rolagem
    listaEmprestimos.scrollIntoView({ behavior: 'smooth' });
  
}
// Função para armazenar dados no Local Storage
function saveLocalStorage() {
    localStorage.setItem('library', JSON.stringify(library));
}
  
// Função para carregar dados do Local Storage
function loadLocalStorage() {
    const savedLibrary = localStorage.getItem('library');
    if (savedLibrary) {
      library = JSON.parse(savedLibrary);
      atualizarListaLivros();
    }
}

    // Redireciona para a seção de empréstimos

    // Função para excluir emprestimos
function excluirlivros() {
    //obtendo a lista de emprestimos
    const listaEmprestimos = document.getElementById('lista-emprestimos');

    //verificando se há algum intem na lista 
    if (listaEmprestimos.children.length > 0) {
        //removendo o ultimo item da lista (o emprestimo mais recente)
        
        listaEmprestimos.removeChild(listaEmprestimos.lastChild);
    
    }
}
// Carregar os livros do Local Storage ao carregar a página
loadLocalStorage();


