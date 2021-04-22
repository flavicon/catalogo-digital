function insertStore(newStore) {
  event.preventDefault()

  fetch(API_URL + 'stores.json', {
    method: 'POST',
    body: JSON.stringify(newStore),
  })
  
  alert('cadastrado com sucesso');

  document.getElementById('formStore').reset()

}

function validateFormStore() {
  event.preventDefault()

  let name = document.getElementById('nameStore').value
  let email = document.getElementById('emailStore').value
  let phone = document.getElementById('phoneStore').value
  let image = document.getElementById('imageStore').value
  let address = document.getElementById('addressStore').value
  let region = document.getElementById('regionStore').selectedOptions[0].value
  let category = document.getElementById('categoryStore').selectedOptions[0].value

  if (name.length < 4) {
    alert('Por favor preencha um nome com mais de 4 letras')
  } else if (email.length < 5) {
    alert('Por favor preencha um email valido')
  } else if (phone.length < 9) {
    alert('Por favor preencha um numero de telefone valido')
  } else if (image === '') {
    alert('Por favor insira uma imagem')
  } else if (address.length < 10) {
    alert('Por favor insira um endereco valido')
  } else if (region === '') {
    alert('Por favor selecione um bairro')
  } else if (category === '') {
    alert('Por favor selecione uma categoria')
  } else {
    const newStore = {
      name: name,
      email: email,
      phone: phone,
      image: image,
      address: address,
      region: region,
      category: category
    }
    
    insertStore(newStore)
  }
}

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
      <form onsubmit="validateFormStore()"  method="post" id="formStore">
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
