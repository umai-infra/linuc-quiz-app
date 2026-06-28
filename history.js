let chart = null;

async function loadCategories() {
  const userId = localStorage.getItem("userId");

  const response =
    await fetch(
      `http://13.158.70.243:3000/categories?userId=${userId}`
    );

  const categories = await response.json();

  const select = document.getElementById("categoryFilter");
  select.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "全カテゴリ";
  select.appendChild(allOption);

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    select.appendChild(option);
  });
}

async function loadResults() {
  const userId = localStorage.getItem("userId");

  const response =
    await fetch(
      `http://13.158.70.243:3000/results?userId=${userId}`
    );

  return await response.json();
}

function drawChart(results, selectedCategory) {
  const filteredResults =
    results.filter(item => item.category === selectedCategory);

  const labels =
    filteredResults.map((_, index) => index + 1);

  const rates =
    filteredResults.map(item => item.rate);

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "正答率 (%)",
        data: rates,
        borderColor: "#2f5d46",
        backgroundColor: "rgba(47, 93, 70, 0.15)",
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

async function initHistory() {
  await loadCategories();

  const results = await loadResults();

  const select = document.getElementById("categoryFilter");

  drawChart(results, select.value);

  select.addEventListener("change", () => {
    drawChart(results, select.value);
  });
}

initHistory();