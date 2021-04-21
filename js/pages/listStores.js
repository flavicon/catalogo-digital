function deleteStore(id) {
  let removeStore = confirm('Deseja realmente excluir essa loja?');

  if (removeStore === true) {
    fetch(API_URL + `stores/${id}.json`, {
      method: 'DELETE',
    })
    alert('Loja excluida com sucesso.')

    document.location.reload(true)
  }
}


function listStores() {

  fetch(API_URL + "stores.json")
    .then(response => response.json())
    .then(response => {
      for (let id in response) {
        let store = response[id]
        console.log(id)
        
        document.getElementById('tableStore').innerHTML += `
          <tr>
            <td>${store.image}</td>
            <td>${store.name}</td>
            <td>${store.email}</td>
            <td>${store.phone}</td>
            <td>
              <button class="btn btn-warning">Editar</button>
              <button class="btn btn-danger" onclick="deleteStore('${id}')">Excluir</button>
            </td>
          </tr>
        ` 
      }
    })

  
  return `
    ${navbar()}
    <section class="searchStorey mb-3">
      <h1 class="text-center">Consultar Lojas</h1>
      <div class="mt-5">
        <div class="input-group justify-content-center">
          <div class="input-group-prepend">
            <span class="input-group-text material-icons">
              search
            </span>
          </div>
          <input type="text" class="col-8 inputSearchStore">
          <button class="btn btn-warning">Buscar</button>
        </div>
      </div>
    </section>

    <section class="resultSearchStore mt-5">
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Imagem</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody id="tableStore">
        </tbody>
      </table>
    </section>
  `
}
