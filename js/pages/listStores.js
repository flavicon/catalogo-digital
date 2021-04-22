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
            <td><img src="${store.image}" alt="logo ${store.name}" width="100px"></td>
            <td class="align-middle">${store.name}</td>
            <td class="align-middle">${store.email}</td>
            <td class="align-middle">${store.phone}</td>
            <td class="align-middle">
              <button class="btn btn-warning" data-toggle="modal" data-target="#editStoreModal">Editar</button>
              <button class="btn btn-danger" onclick="deleteStore('${id}')">Excluir</button>
            </td>
          </tr>
        ` 
      }
    })

  const formEditStore = () => {

    fetch(API_URL + "stores.json")
      .then(response => response.json())
      .then(response => {
        
      })

    return `
      <form>
        <div class="form-group mt-5">
          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="text" class="form-control" id="nameStore" placeholder="Nome" required>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="email" class="form-control" id="emailStore" placeholder="E-mail" required>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="number" class="form-control" id="phoneStore" placeholder="Telefone" required>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="text" class="form-control" id="imageStore" placeholder="Insira a URL da imagem" required>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <textarea type="text" placeholder="Endereço" class="form-control" id="addressStore" rows="5" required></textarea>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <select class="form-control" id="regionStore" required>
                <option value="">---selecione o bairro---</option>
              </select>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <select class="form-control" id="categoryStore" required>
                <option value="">---selecione o categoria---</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      `
    }

  
    const modal =  () => {

    return `
      <div class="modal fade" id="editStoreModal" tabindex="-1" aria-labelledby="editStoreModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editStoreModalLabel">Editar loja</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="storeModal">
              ${formEditStore()} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-warning">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  
  return `
    ${navbar()}
    ${modal()}
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
