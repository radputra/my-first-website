// Function to change the main image when a thumbnail is clicked

function swapImage(thumbnail) {
  document.getElementById("mainImage").src = thumbnail.src;
  document.getElementById("mainImage").alt = thumbnail.alt;
}