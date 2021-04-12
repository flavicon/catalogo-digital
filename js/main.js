let routes = {
  'login': login,
  'dashboard': dashboard,
  'categorias': listCategories,
  'nova-categoria': addCategory,
  'lojas': listStores,
  'nova-loja': addStore,
  'regioes': listRegions,
  'nova-regiao': addRegion,
}

function updateContentPage(pageName) {
  if (!routes[pageName]) {
    document.getElementById('root').innerHTML = notFound();
    return;
  }

  document.getElementById('root').innerHTML = routes[pageName]();
}

let url = new URL(window.location.href);
let route = url.searchParams.get('p');
let content = 'login';

if (route) {
  content = route;
}

updateContentPage(content);
