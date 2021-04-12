function login() {
  const formLogin = () => {
    return `
      <div class="card card-body">
        <form method="post" action="?p=dashboard">
          <span class="h3">Identifique-se</span>
          <hr>
          <input type="text" class="form-control mt-2" placeholder="E-mail">
          <input type="text" class="form-control mt-2" placeholder="Senha">

          <button class="btn btn-dark btn-block mt-3">Entrar</button>
        </form>

        <div class="text-center mt-2">
          <a href="#">Esqueci a senha</a>
        </div>
      </div>
    `
  }

  const welcome = () => {
    return `
      <div class="jumbotron bg-dark text-white">
        <h1>Bem vindo</h1>
        <h4>Ambiente de Administração do catalogo digital</h4>

        <hr class="login">

        <ul>
          <li>Gerenciamento de Regiões/Bairros</li>
          <li>Gerenciamento de Categorias</li>
          <li>Gerenciamento de Estabelecimantos e Lojas</li>
        </ul>
      </div>
    `
  }

  return `
    <div class="row mt-5">
      <div class="col-md-7 offset-md-1">${welcome()}</div>
      <div class="col-md-3">${formLogin()}</div>
    </div>
  `
}