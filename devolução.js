function realizarDevolucao() {
    var livroSelecionado = document.getElementById("livro").value;
    var nomeUsuario = document.getElementById("nome").value;
  
    // Lógica de devolução aqui
    // Você pode enviar os dados para o servidor, atualizar o banco de dados, etc.
  
    alert("Livro devolvido com sucesso! Livro: " + livroSelecionado + ", Nome: " + nomeUsuario);
  
    // Limpar o formulário após a devolução
    document.getElementById("devolucaoForm").reset();
  }
  