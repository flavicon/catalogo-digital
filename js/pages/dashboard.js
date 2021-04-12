function dashboard() {
  return `
    ${navbar()}
    <div class="row justify-content-md-center">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm">
                <span class="material-icons" style="font-size: 8rem;">
                  store
                </span>
              </div>
              <div class="col-sm text-center mt-3">
                <p class="h3">Lojas</p>
                <p class="h1">30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm">
                <span class="material-icons" style="font-size: 8rem;">
                  pin_drop
                </span>
              </div>
              <div class="col-sm text-center mt-3">
                <p class="h3">Regiões</p>
                <p class="h1">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <div>
              <div>
                <span class="material-icons" style="font-size: 6rem;">
                  library_add
                </span>
              </div>
              <div>
                <p class="h4">Gerenciar catálogo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}