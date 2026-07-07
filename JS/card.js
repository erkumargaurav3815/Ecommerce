function showCard() {
  document.getElementById("detailsCard").classList.remove("d-none");

  document.getElementById("overlay").classList.remove("d-none");

  // Disable background scrolling
  document.body.style.overflow = "hidden";
}

function closeCard() {
  document.getElementById("detailsCard").classList.add("d-none");

  document.getElementById("overlay").classList.add("d-none");

  // Enable scrolling again
  document.body.style.overflow = "auto";
}
