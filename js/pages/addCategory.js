function addCategory() {
  return `
    ${navbar()}
<<<<<<< HEAD

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
=======
    <div class="row justify-content-between mt-3 p-3">
      <div class="col-4">
        <div class="justy">
          <img src="img/pana.svg">
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
            <button class="btn btn-warning btn-lg">Enviar</button>
          </div>
        </form>
      </div>
>>>>>>> a49e50d6833c6a25d72a45abc159907552653235
    </div>
  `
}
