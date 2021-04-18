function insertCategory() {
  let newCategory = {
    name: document.getElementById('nameCategory').value,
    description: document.getElementById('descriptionCategory').value,
    image: document.getElementById('imageCategory').value,
  }

  fetch(API_URL + 'categories.json', {
    method: 'POST',
    body: JSON.stringify(newCategory),
  })

  alert('cadastrado com sucesso');
};

function addCategory() {

  const categoryForm = () => {
    return `
      <form onsubmit="insertCategory()" action="#" method="post" id="formCategory">
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
