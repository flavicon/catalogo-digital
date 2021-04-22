function insertCategory(newCategory) {

  fetch(API_URL + 'categories.json', {
    method: 'POST',
    body: JSON.stringify(newCategory),
  })

  alert('categoria cadastrada com sucesso');

  document.getElementById('formCategory').reset()
};

function validateFormCategory() {
  event.preventDefault()

  let name = document.getElementById('nameCategory').value
  let description = document.getElementById('descriptionCategory').value
  let image = document.getElementById('imageCategory').value

  if (name.length < 4) {
    alert('Por favor insira um nome com mais de 4 letras')
  } else if (description.length < 10) {
    alert('Por favor insira uma descricao com no minimo 10 letras')
  } else if (image === '') {
    alert('Por favor insira uma imagem')
  } else {
    const newCategory = {
      name: name,
      description: description,
      image: image
    }

    insertCategory(newCategory)
  }
}

function addCategory() {

  const categoryForm = () => {
    return `
      <form onsubmit="validateFormCategory()" method="post" id="formCategory">
        <div class="form-group mt-5">
          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="text" class="form-control" id="nameCategory" placeholder="Nome">
            </div>
          </div>
          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <textarea class="form-control" id="descriptionCategory" rows="5" placeholder="Descrição"></textarea>
            </div>
          </div>
          <div class="form-row justify-content-center">
            <div class="form-group col-md-8">
              <input type="text" class="form-control" id="imageCategory" placeholder="Insira a URL da imagem">
            </div>
          </div>
        </div>
        <div class="form-row justify-content-center mb-4">
          <button class="btn btn-warning btn-lg" id="liveToastBtn">Enviar</button>
        </div>
      </form>
    `
  };

  const toastCategory = () => {
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
          Categoria cadastrada com sucesso.
        </div>
      </div>
    `
  };

  return `
    ${navbar()}
    ${toastCategory()}

    <div class="row justify-content-between mt-3 p-3" id="pageCategory">
      <div class="col-4">
        <div class="justy">
          <img src="img/pana.svg">
        </div>
      </div>

      <div class="col-6 offset-1 justify-content-center" style="background: #fff">
        <h1 class="mt-3 text-center">Cadastrar categoria</h1>
        ${categoryForm()}
      </div>
    </div>
  `
};
