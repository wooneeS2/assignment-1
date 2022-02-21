const chevron = document.getElementById("chevron-down");
const nextContent = document.getElementById("map-text-box1").offsetTop;

function handleChevronClick() {
  window.scroll({ top: nextContent, behavior: "smooth" });
}

chevron.addEventListener("click", handleChevronClick);
