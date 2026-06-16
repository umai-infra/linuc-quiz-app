const history = JSON.parse(localStorage.getItem("history") || "[]");

const labels = history.map((_, i) => i + 1);

const rates = history.map(h => h.rate);

new Chart(document.getElementById("chart"), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: '正答率 (%)',
      data: rates,
      borderColor: '#3395ff',
      backgroundColor: 'rgba(51,149,255,0.2)',
      tension: 0.3
    }]
  },
  options: {
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        font: {
          size: 16
        }
      }
    },
    x: {
　　type: 'category', 
　　ticks: {
        font: {
          size: 16
        }
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 18
        }
      }
    }
  }
}
});