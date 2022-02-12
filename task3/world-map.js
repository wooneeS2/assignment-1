const overlay = document.querySelector(".overlay");
const tooltip = document.querySelector(".tooltip");

const countryBoxElement = countryInfo.map((i, index) => {
  return `<div id="country-box">
    <div
    class="marker marker${index + 1}"
    data-count=${i.data}
    data-continent=${i.country}
    data-countrycode=${i.countryCode}
    /></div>`;
});

overlay.innerHTML = countryBoxElement.join("");

const countryBox = document.querySelectorAll("#country-box");

function marker(id) {
  return document.querySelector(`.marker${id}`);
}

function showTootip(e) {
  let selectCountry = e.target.classList[1].slice(6) - 1;
  tooltip.innerHTML = `국가 : ${countryInfo[selectCountry].country}
<br/>
확진자 수 : ${countryInfo[selectCountry].data}명`;

  marker(selectCountry + 1).style.backgroundColor = "#300c0c91";
}

function hideTooltip(e) {
  let selectCountry = e.target.classList[1].slice(6) - 1;
  tooltip.textContent =
    "국가에 마우스를 대면 100만명당 확진자를 확인 할 수 있습니다.";
  marker(selectCountry + 1).style.backgroundColor = "#da232391";
}

countryBox.forEach(i => i.addEventListener("mouseover", showTootip));
countryBox.forEach(i => i.addEventListener("mouseout", hideTooltip));
