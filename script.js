document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, i * 200);
    });
  });
  
  // Style initial pour animation (invisible avant affichage)
  document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
  });
  