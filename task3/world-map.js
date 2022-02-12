const countryInfo = [
  { country: "이스라엘", countryCode: "IL", data: "3,244.09" },
  { country: "독일", countryCode: "DE", data: "3,013.25" },
  { country: "러시아", countryCode: "RU", data: "1,245.89" },
  { country: "대한민국", countryCode: "KR", data: "1,054.90" },
  { country: "영국", countryCode: "UK", data: "992.23" },
  { country: "브라질", countryCode: "BR", data: "838.42" },
  { country: "일본", countryCode: "JP", data: "775.87" },
  { country: "미국", countryCode: "US", data: "562.60" },
  { country: "캐나다", countryCode: "CA", data: "283.86" },
  { country: "남아프리카공화국", countryCode: "ZA", data: "93.73" },
  { country: "인도", countryCode: "IN", data: "48.14" },
];

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

countryBox.forEach(i =>
  i.addEventListener("mouseover", function (e) {
    let selectCountry = e.target.classList[1].slice(6) - 1;
    tooltip.textContent = `나라 : ${countryInfo[selectCountry].country}
    확진자 수 : ${countryInfo[selectCountry].data}`;

    marker(selectCountry + 1).style.backgroundColor = "#300c0c91";
  })
);
countryBox.forEach(i =>
  i.addEventListener("mouseout", function (e) {
    let selectCountry = e.target.classList[1].slice(6) - 1;
    tooltip.textContent =
      "국가에 마우스를 대면 10만명당 확진자를 확인 할 수 있습니다.";
    marker(selectCountry + 1).style.backgroundColor = "#da232391";
  })
);
