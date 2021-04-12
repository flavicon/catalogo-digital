function notFound() {
  return `
    <div class="alert alert-danger mt-5">
      <h3>Ops, alguma coisa deu errado</h3><br>
      Não encontramos a página que você procurava, tente novamente.
      <hr>
      <br>
      <a href="?p=login">voltar</a>
    </div>
  `
}