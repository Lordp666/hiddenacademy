// Dans assets/js/about.js
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / speed;
    
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  });
});