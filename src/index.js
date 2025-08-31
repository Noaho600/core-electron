const searchInput = document.getElementById('search');

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const query = encodeURIComponent(searchInput.value);
    window.location.href = `https://www.google.com/search?q=${query}`;
  }
});

function goTo(url) {
  window.location.href = url;
}
