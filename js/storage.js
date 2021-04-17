function searchCategory() {
  return JSON.parse(
    localStorage.getItem('categories') || '[]'
  );
}

function saveCategory(category) {
  localStorage.setItem('categories', JSON.stringify(category));
}

function addNewCategory() {
    let name = document.getElementById('nameCategory').value;
    let description = document.getElementById('descriptionCategory').value;
    let logo = document.getElementById('uploadLogoCategory').value;

    let newCategory = {
      name: name,
      description: description,
      logo: logo
    }

    let categories = searchCategory();
    categories.push(newCategory);

    saveCategory(categories);
    $('#alert').toast('show')
    document.getElementById('root').addEventListener('submit', () => { 
      event.preventDefault(); 
    })
}
  
