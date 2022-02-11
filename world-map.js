const contryBox = document.querySelectorAll("#contry-box");
const tooltip = document.getElementById("tooltip");

contryBox.forEach(i =>
  i.addEventListener("mouseover", function () {
    tooltip.textContent = "국가별 확진자 수 ";
    console.log("mouseover");
  })
);
contryBox.forEach(i =>
  i.addEventListener("mouseout", function () {
    tooltip.textContent =
      "국가에 마우스를 대면 10만명당 확진자를 확인 할 수 있습니다.";
    console.log("mouseout");
  })
);
