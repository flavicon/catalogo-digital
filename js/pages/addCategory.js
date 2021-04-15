function addCategory() {
  return `
    ${navbar()}

    <div class="row justify-content-between">
      <div class="col-4 off-set-1">
        <img src="../../img/pana.svg">
      </div>
      <div class="col-6" style="background: #fff">
        <h1 class="text-center mt-3">Cadastrar categoria</h1>         
        <form>
          <div class="form-group d-flex justify-content-center">
            <input type="text" class="form-control col-8" id="inputName" placeholder="Nome">
          </div>
          <div class="mb-3 mt-3 d-flex form-group justify-content-center">
            <textarea class="form-control col-8" placeholder="Descrição" id="description" rows="3"></textarea>
          </div>
          <div class="mb-3 mt-3 d-flex form-group justify-content-center">
            <input type="file" id="uploadLogo">
          </div>
          <button type="button" class="btn btn-warning">Enviar</button>
        </form>
        </div>
    </div>
  `
}
