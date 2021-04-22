function insertRegion(newRegion) {
  
  fetch(API_URL + 'regions.json', {
    method: 'POST',
    body: JSON.stringify(newRegion),
  })

  alert('cadastrado com sucesso');

  document.getElementById('formRegion').reset()

};

function validateFormRegion() {
  event.preventDefault()

  let name = document.getElementById('nameRegion').value
  let description = document.getElementById('descriptionRegion').value

  if (name.length < 4) {
    alert('Por favor insira um noma com mais de 4 letras')
  } else if (description.length < 10) {
    alert('Por favor insira uma descricao com mais de 10 letras')
  } else {
    const newRegion = {
      name: name,
      description: description
    }

    insertRegion(newRegion)
  }
}

function addRegion() {
 
    const regionForm = () => {
      return `
        <form onsubmit="validateFormRegion()" method="POST" id="formRegion">
          <div class="form-group mt-5">
            <div class="form-row justify-content-center">
              <div class="form-group col-md-8">
                <input type="text" class="form-control" id="nameRegion" placeholder="Nome" required>
              </div>
            </div>
            <div class="form-row justify-content-center">
              <div class="form-group col-md-8">
                <textarea class="form-control" id="descriptionRegion" rows="5" placeholder="Descrição" required></textarea>
              </div>
            </div>
          </div>
          <div class="form-row justify-content-center mb-4">
            <button class="btn btn-warning btn-lg" id="liveToastBtn">Enviar</button>
          </div>
        </form>
      `
    };
  
    const toastRegion = () => {
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
      ${toastRegion()}
  
      <div class="row justify-content-between mt-3 p-3" id="pageRegion">
        <div class="col-4">
          <div class="justy">
            <img src="img/map.svg" style="width: 120%" class="align-center" alt="Menina sentada sobre mapa">
          </div>
        </div>
  
        <div class="col-6 offset-1 justify-content-center" style="background: #fff">
          <h1 class="mt-3 text-center">Cadastrar regiao</h1>
          ${regionForm()}
        </div>
      </div>
    `
}
