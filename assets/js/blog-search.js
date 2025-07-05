document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const levelFilter = document.getElementById("levelFilter");
  const durationFilter = document.getElementById("durationFilter");
  const articles = document.querySelectorAll(".course-card");

  function filterArticles() {
    const query = searchInput.value.toLowerCase();
    const level = levelFilter.value.toLowerCase();
    const duration = durationFilter.value.toLowerCase();

    articles.forEach(card => {
      const text = card.textContent.toLowerCase();
      const cardLevel = card.dataset.level;
      const cardDuration = card.dataset.duration;

      const matchQuery = text.includes(query);
      const matchLevel = !level || cardLevel === level;
      const matchDuration = !duration || cardDuration === duration;

      card.style.display = (matchQuery && matchLevel && matchDuration) ? "" : "none";
    });
  }

  searchInput.addEventListener("input", filterArticles);
  levelFilter.addEventListener("change", filterArticles);
  durationFilter.addEventListener("change", filterArticles);
});
