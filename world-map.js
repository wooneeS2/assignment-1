let tooltip = document.getElementById("tooltip");
let marker1 = document.getElementById("marker1");

function showTooltip() {
  tooltip.style.display = "block";
  console.log("mouseover");
}

function hideTooltip() {
  tooltip.style.display = "none";
  console.log("mouse out");
}

// marker1.addEventListener("mouseover", showTooltip);
