function listCategories() {

  return `
    ${navbar()}
    <section class="searchCategory">
      <h1 class="text-center">Consultar categoria</h1>
      <div class="mt-5">
        <div class="input-group justify-content-center">
          <div class="input-group-prepend">
            <span class="input-group-text material-icons">
              search
            </span>
          </div>
          <input type="text" class="col-8 inputSearchCategory">
          <button class="btn btn-warning">Buscar</button>
        </div>
      </div>
    </section>

    <section class="resultSearchCategory">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Logo</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody id="tableCategory">
        </tbody>
      </table>
    </section>
  `
}
