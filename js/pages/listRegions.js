function deleteRegion(id) {
  let confirmRemoveRegion = confirm('Deseja realmente excluir essa regiao?')

  if (confirmRemoveRegion === true) {
    fetch(API_URL + `regions/${id}.json`, {
      method: 'DELETE'
    })

    alert('Regiao excluida com sucesso.')

    document.location.reload(true);
  }
  
}

function listRegions() {

  fetch(API_URL + "regions.json")
    .then(response => response.json())
    .then(response => {
      for (let id in response) {
        const region = response[id]
        
        document.getElementById('tableRegion').innerHTML += `
          <tr>
            <td>${region.name}</td>
            <td>${region.cep}</td>
            <td>
              <button class="btn btn-warning">Editar</button>
              <button class="btn btn-danger" onclick="deleteRegion('${id}')">Excluir</button>
            </td>
          </tr>
        `
      }
    })

  return `
    ${navbar()}
    <section class="searchRegion mb-3">
      <h1 class="text-center">Consultar Regiao</h1>
      <div class="mt-5">
        <div class="input-group justify-content-center">
          <div class="input-group-prepend">
            <span class="input-group-text material-icons">
              search
            </span>
          </div>
          <input type="text" class="col-8 inputSearchRegion">
          <button class="btn btn-warning">Buscar</button>
        </div>
      </div>
    </section>

    <section class="resultSearchRegion mt-5">
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody id="tableRegion">
        </tbody>
      </table>
    </section>
  `
}
