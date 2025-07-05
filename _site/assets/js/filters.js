document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 1. Retire 'active' de tous les boutons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // 2. Ajoute 'active' au bouton cliqué
      this.classList.add('active');
      
      // 3. Filtre les projets
      const filterValue = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});