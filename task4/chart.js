const date = patientByDate.map(i => i.date.slice(5));
const domesticPatient = patientByDate.map(i => i.domestic);
const abroadPatient = patientByDate.map(i => i.abroad);
const domesticDead = patientByDate.map(i => i.dead);

const ctx = document.getElementById("patient-chart").getContext("2d");

const red = "#B00323";
const darkRed = "#580111";

//차트 x축 및 y축 설정
let chartData = {
  labels: date,
  datasets: [
    {
      label: "확진자 수",
      yAxisID: "y-left",
      data: domesticPatient,
      backgroundColor: red,
      borderColor: red,
      borderWidth: 2,
    },

    {
      label: "국내 사망자 수",
      yAxisID: "y-right",
      data: domesticDead,
      backgroundColor: darkRed,
      borderColor: darkRed,
      borderWidth: 2,
    },
  ],
};

//차트 옵션 설정
let chartOptions = {
  maintainAspectRatio: false,
  animations: {
    radius: {
      duration: 400,
      easing: "linear",
      loop: false,
    },
  },
  hoverRadius: 10,

  interaction: {
    mode: "nearest",
    intersect: false,
    axis: "x",
  },
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "날짜별 코로나 확진자 및 사망자(2022년)",
      },
    },
    "y-left": {
      type: "linear",
      position: "left",
      title: {
        display: true,
        text: "확진자 수",
        color: red,
      },
      grid: {
        display: false,
      },
    },
    "y-right": {
      type: "linear",
      position: "right",
      title: {
        display: true,
        text: "국내 사망자 수",
        color: darkRed,
      },

      grid: {
        display: false,
      },
    },
  },
};

//차트 생성
const patientChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: chartOptions,
});
