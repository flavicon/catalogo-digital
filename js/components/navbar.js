function navbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <a class="navbar-brand" href="?p=dashboard">Catalogo Digital</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="?p=dashboard">Dashboard <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Visualizar catalogo</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorias
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="?p=nova-categoria">Nova categoria</a>
              <a class="dropdown-item" href="?p=categorias">Listar categorias</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Regiões
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="?p=nova-regiao">Nova região</a>
              <a class="dropdown-item" href="?p=regioes">Listar regiões</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Lojas
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="?p=nova-loja">Nova Loja</a>
              <a class="dropdown-item" href="?p=lojas">Listar Lojas</a>
            </div>
          </li>

        </ul>
        <form class="form-inline my-2 my-lg-0">
          <span class="text-white mr-2">Bem vindo, <strong>usuário</strong></span>
          <a class="btn btn-outline-warning my-2 my-sm-0" href="/">Sair</a>
        </form>
      </div>
    </nav>
  `;
}
