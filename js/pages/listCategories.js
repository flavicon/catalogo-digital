function deleteCategory(id) {
  let removeCategory = confirm('Deseja realmente excluir essa categoria?');

  if (removeCategory === true) {
    fetch(API_URL + `categories/${id}.json`, {
      method: 'DELETE',
    })
    alert('Categoria excluida com sucesso.')

    document.location.reload(true)
  }
}


function listCategories() {

  fetch(API_URL + 'categories.json')
    .then(response => response.json())
    .then(response => {
      for (const id in response) {
        let category = response[id];

        document.getElementById('tableCategory').innerHTML += `
          <tr>
            <td><img src=${category.image} width="100px"></td>
            <td>${category.name}</td>
            <td>${category.description}</td>
            <td>
              <button class="btn btn-warning">Editar</button>
              <button class="btn btn-danger" onclick="deleteCategory('${id}')">Excluir</button>
            </td>
          </tr>
        `
      }
    })

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
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Imagem</th>
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
