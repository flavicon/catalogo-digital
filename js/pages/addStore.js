function insertStore() {
  let newStore = {
    name: document.getElementById('nameStore').value,
    email: document.getElementById('emailStore').value,
    phone: document.getElementById('phoneStore').value,
    image: document.getElementById('imageStore').value,
    address: document.getElementById('addressStore').value,
  }

  fetch(API_URL + 'stories.json', {
    method: 'POST',
    body: JSON.stringify(newStore),
  })

  alert('cadastrado com sucesso');
};

function addStore() {

  fetch(API_URL+'regions.json')
    .then(response => response.json())
    .then(response => {
      for (const id in response) {
        let region = response[id];

        document.getElementById('regionStore').innerHTML += `
        <option>${region.name}</option>
        `
      }
    });

    fetch(API_URL+'categories.json')
    .then(response => response.json())
    .then(response => {
      for (const id in response) {
        let category = response[id];

        document.getElementById('categoryStore').innerHTML += `
        <option>${category.name}</option>
        `
      }
    });


  const storeForm = () => {
    return `
      <form onsubmit="insertStore()" action="#" method="post" id="formStore">
        <div class="form-group mt-5">
          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="text" class="form-control" id="nameStore" placeholder="Nome">
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="email" class="form-control" id="emailStore" placeholder="email">
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="number" class="form-control" id="phoneStore" placeholder="Telefone">
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="text" class="form-control" id="imageStore" placeholder="Insira a URL da imagem">
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <textarea type="text" placeholder="Endereco" class="form-control" id="addressStore" rows="5"></textarea>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <select class="form-control" id="regionStore">
                <option>---selecione o bairro---</option>
              </select>
            </div>
          </div>

          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <select class="form-control" id="categoryStore">
                <option>---selecione o categoria---</option>
              </select>
            </div>
          </div>

        </div>

        <div class="form-row justify-content-center mb-4">
          <button class="btn btn-warning btn-lg" id="liveToastBtn">Enviar</button>
        </div>
      </form>
    `
  };

  const toastStore = () => {
    return `
      <div class="toast" role="alert" data-delay="3500" id="alert" style="position: absolute; top: 0; right: 0;">
        <div class="toast-header">
          <strong class="mr-auto">Catálogo Digital</strong>
          <small>Agora</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          Regiao cadastrada com sucesso.
        </div>
      </div>
    `
  };

  return `
    ${navbar()}
    ${toastStore()}

    <div class="row justify-content-between mt-3 p-3" id="pageStore">
      <div class="col-4">
        <div class="justy">
          <img src="img/store.svg" style="width: 120%" class="align-center" alt="Menina sentada sobre mapa">
        </div>
      </div>

      <div class="col-6 offset-1 justify-content-center" style="background: #fff">
        <h1 class="mt-3 text-center">Cadastrar loja</h1>
        ${storeForm()}
      </div>
    </div>
  `
}