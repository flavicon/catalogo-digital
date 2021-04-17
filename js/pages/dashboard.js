function dashboard() {
  return `
    ${navbar()}
      <div class="row justify-content-md-center">
        <div class="col-4">
          <div class="card cardDashboard cardInformation">
            <div class="card-body">
              <div class="row">
                <div class="col-sm">
                  <span class="material-icons" style="font-size: 8rem;">
                    store
                  </span>
                </div>
                <div class="col-sm text-center mt-3 info">
                  <p>Lojas</p>
                  <p class="h1">30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card cardDashboard cardInformation">
            <div class="card-body">
              <div class="row">
                <div class="col-sm">
                  <span class="material-icons" style="font-size: 8rem;">
                    pin_drop
                  </span>
                </div>
                <div class="col-sm text-center mt-3 info">
                  <p>Regiões</p>
                  <p class="h1">10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card cardDashboard">
            <div class="card-body">
              <div>
                <div>
                  <span class="material-icons" style="font-size: 6rem;">
                    library_add
                  </span>
                </div>
                <div class="info">
                  <p>Gerenciar catálogo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center tableInformation">
        <div class="col-4 info text-center cardInformation">
          <p class="mb-3 mt-3">Lojas com mais acessos<p>
          <img src="img/dashboardImg.svg" alt="Man show dashboard">
        </div>
        <div class="col-8" style="background-color: #fff">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Loja</th>
                <th scope="col">Acessos</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Casa Pio</td>
                <td>300</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Zenir</td>
                <td>220</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>C Rolim</td>
                <td>130</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Rabelo</td>
                <td>100</td>
                <td>@twitter</td>
              </tr>
              <tr>
              <th scope="row">5</th>
                <td>Eletro Shop</td>
                <td>95</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  `
}
