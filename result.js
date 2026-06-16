const correct = Number(localStorage.getItem("correctCount"));
const total = Number(localStorage.getItem("questionCount"));

document.getElementById("correct").textContent = correct;
document.getElementById("total").textContent = total;

const rate = Math.round((correct / total) * 100);
document.getElementById("rate").textContent = rate;