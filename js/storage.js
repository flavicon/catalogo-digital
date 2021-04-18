function searchCategory() {
  return JSON.parse(
    localStorage.getItem('categories') || '[]'
  );
}

function saveCategory(category) {
  localStorage.setItem('categories', JSON.stringify(category));
}

function addNewCategory(name, description, logo) {
    let newCategory = {
      name: name,
      description: description,
      logo: logo
    }

    let categories = searchCategory();
    categories.push(newCategory);

    saveCategory(categories);
}
