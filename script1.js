const searchInput = document.getElementById("search");
const projectCards = document.querySelectorAll(".project-card");

searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();
  let found = false;

  projectCards.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(filter)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  /* RED GLOW IF NOT FOUND */
  if (filter !== "" && !found) {
    searchInput.classList.add("not-found");
  } else {
    searchInput.classList.remove("not-found");
  }
});

/* NAVIGATION */
function goToEvents() {
  window.location.href = "events.html";
}

function goToProject() {
  window.location.href = "project.html";
}
