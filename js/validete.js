function validateForm() {
    event.preventDefault();

    let name = document.getElementById('nameCategory').value;
    let description = document.getElementById('descriptionCategory').value;
    let logo = document.getElementById('uploadLogoCategory').value;

    if (name === '' || description === '' || logo === '') {
        alert('preencha todos os dados!');
    } else {
        addNewCategory(name, description, logo);
        $('#alert').toast('show');
    }
}