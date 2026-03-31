// ===============================
// FILTER FUNCTION (SMOOTH ANIMATION)
// ===============================
function filterSelection(category) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    // hide first (animation)
    card.style.opacity = "0";
    card.style.transform = "scale(0.8)";

    setTimeout(() => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 50);
      } else {
        card.style.display = "none";
      }
    }, 200);
  });
}


// ===============================
// ACTIVE BUTTON (ONLY FILTER SECTION)
// ===============================
let filterButtons = document.querySelectorAll("section.filters button");

filterButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    filterButtons.forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});


// ===============================
// SCROLL FUNCTIONS (REAL NAVIGATION)
// ===============================
function goToMembers() {
  document.querySelector(".container").scrollIntoView({
    behavior: "smooth"
  });
}

function goToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function goToEvents() {
  document.getElementById("events")?.scrollIntoView({
    behavior: "smooth"
  });
}

function goToCelebration() {
  document.getElementById("celebration")?.scrollIntoView({
    behavior: "smooth"
  });
}


// ===============================
// DEFAULT LOAD
// ===============================
window.onload = function () {
  filterSelection("all");
};
// LIGHTBOX FUNCTION
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
