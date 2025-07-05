// Dans assets/js/blog.js
document.querySelector('.search-box button').addEventListener('click', function() {
  const query = document.querySelector('.search-box input').value.toLowerCase();
  document.querySelectorAll('.article-card').forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});