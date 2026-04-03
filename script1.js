// Search filter for project titles
const searchInput = document.getElementById("search");
const projectCards = document.querySelectorAll(".project-card");

searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();

  projectCards.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Navigation functions
function goToEvents() {
  window.location.href = "events.html";
}

function goToProject() {
  window.location.href = "project.html";
}
