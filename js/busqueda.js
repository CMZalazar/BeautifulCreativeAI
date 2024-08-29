const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchText = searchBar.value.trim();
  if (searchText !== '') {
    const searchUrl = `buscador.html?q=${encodeURIComponent(searchText)}`;
    window.location.href = searchUrl;
  }
});
