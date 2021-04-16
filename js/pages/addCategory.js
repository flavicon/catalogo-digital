function addCategory() {
  return `
    ${navbar()}
    <div class="row justify-content-between mt-3 p-3">
      <div class="col-4">
        <div class="justy">
          <img src="../../img/pana.svg">
        </div>
      </div>

      <div class="col-6 offset-1 justify-content-center" style="background: #fff">
        <h1 class="mt-3 text-center">Cadastrar categoria</h1>
        <form>
          <div class="form-group mt-5">
            <div class="form-row justify-content-center">
              <div class="form-group col-md-8">
                <input type="text" class="form-control" id="inputNameCategory" placeholder="Nome">
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
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  `
}
