function addCategory() {
  return `
    ${navbar()}
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
    <div class="row justify-content-between mt-3 p-3" id="pageCategory">
      <div class="col-4">
        <div class="justy">
          <img src="img/pana.svg">
        </div>
      </div>

      <div class="col-6 offset-1 justify-content-center" style="background: #fff">
        <h1 class="mt-3 text-center">Cadastrar categoria</h1>
        <form onSubmit="addNewCategory()" id="formCategory">
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
                <p>Inserir logo: &nbsp;</p>
                <input type="file" class="form-control-file inputFile" id="uploadLogoCategory">
              </div>
            </div>
          </div>
          <div class="form-row justify-content-center mb-4">
            <button class="btn btn-warning btn-lg" id="liveToastBtn">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  `
}
