// Theme Change section

function randomColorChange() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("theme-icon").addEventListener("click", function () {
  document.body.style.backgroundColor = randomColorChange();
});

// Date Time Update Section

function currantDate() {
  const toDay = new Date();
  const days = { weekday: "short" };
  const dates = { month: "short", day: "2-digit", year: "numeric" };
  const day = toDay.toLocaleDateString("en-BN", days);
  const date = toDay.toLocaleDateString("en-BN", dates);

  return `${day},\n ${date}`;
}

document.getElementById("datetime").innerText = currantDate();

// question Section

document.getElementById("questionSection").style.display = "none";

document.getElementById("board-card").addEventListener("click", function () {
  document.getElementById("questionSection").style.display = "block";
  document.getElementById("main-container").style.display = "none";
  document.getElementById("theme-icon").style.display = "none";
  document.getElementById("btn-back-desk").style.display = "block";
});
document.getElementById("btn-back-desk").addEventListener("click", function () {
  document.getElementById("main-container").style.display = "grid";
  document.getElementById("questionSection").style.display = "none";
  document.getElementById("btn-back-desk").style.display = "none";
  document.getElementById("theme-icon").style.display = "flex";
});
// Task-Assigned 

window.onload = function () {
    const task = document.getElementById('task-number').innerText.trim();
    if (parseInt(task) === 0) {
        alert("ok");
    }
};
// btn click and count

function compliteTask() {
  let taskNumber = document.getElementById("task-number");
  let navNumber = document.getElementById("nav-number");

  let currentTaskNumber = parseInt(taskNumber.innerText);
  let currentNavNumber = parseInt(navNumber.innerText);

  if (currentTaskNumber > 0) {
    taskNumber.innerText = currentTaskNumber - 1;
    navNumber.innerText = currentNavNumber + 1;
  }
}

document.querySelectorAll(".btn-complete").forEach((button) => {
  button.addEventListener("click", compliteTask);
});

// btn disable 
function time() {
	let Times = new Date();
	let hours = Times.getHours();
	let minutes = Times.getMinutes();
	let seconds = Times.getSeconds();
	let ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12;
	let currentTime = `${hours}:${minutes}:${seconds} ${ampm}`
	return currentTime;
}
// box-1
document.getElementById('btn-shopEase').addEventListener('click', function () {
	const btn = document.getElementById('btn-shopEase');
	btn.setAttribute('disabled', true);
	const boxTitle = document.getElementById('box-title1').innerText;
	const historyContainer = document.getElementById('history-container');
	const newElement = document.createElement("p");
	newElement.classList.add('add-history');
	newElement.innerText = 'You have Complete The Task' + " " +  boxTitle + " " +"at" + " " +  time();
	historyContainer.appendChild(newElement);
	alert(" Board Updated Successfully"); 
});

// box-2
document.getElementById('btn-cloudSync').addEventListener('click', function () {
	const btn = document.getElementById('btn-cloudSync');
	btn.setAttribute('disabled', true);
	const boxTitle = document.getElementById('box-title2').innerText;
	const historyContainer = document.getElementById('history-container');
	const newElement = document.createElement("p");
	newElement.classList.add('add-history');
	newElement.innerText = 'You have Complete The Task' + " " +  boxTitle + " " +"at" + " " +  time();
	historyContainer.appendChild(newElement);
	alert(" Board Updated Successfully"); 
});

// box-3

document.getElementById('btn-swiftPay').addEventListener('click', function () {
	const btn = document.getElementById('btn-swiftPay');
	btn.setAttribute('disabled', true);
	const boxTitle = document.getElementById('box-title3').innerText;
	const historyContainer = document.getElementById('history-container');
	const newElement = document.createElement("p");
	newElement.classList.add('add-history');
	newElement.innerText = 'You have Complete The Task' + " " +  boxTitle + " " +"at" + " " +  time();
	historyContainer.appendChild(newElement);
	alert(" Board Updated Successfully"); 
});
// box-4
document.getElementById('btn-meta').addEventListener('click', function () {
	const btn = document.getElementById('btn-meta');
	btn.setAttribute('disabled', true);
	const boxTitle = document.getElementById('box-title4').innerText;
	const historyContainer = document.getElementById('history-container');
	const newElement = document.createElement("p");
	newElement.classList.add('add-history');
	newElement.innerText = 'You have Complete The Task' + " " +  boxTitle + " " +"at" + " " +  time();
	historyContainer.appendChild(newElement);
	alert(" Board Updated Successfully"); 
});
// box-5
document.getElementById('btn-google').addEventListener('click', function () {
	const btn = document.getElementById('btn-google');
	btn.setAttribute('disabled', true);
	const boxTitle = document.getElementById('box-title5').innerText;
	const historyContainer = document.getElementById('history-container');
	const newElement = document.createElement("p");
	newElement.classList.add('add-history');
	newElement.innerText = 'You have Complete The Task' + " " +  boxTitle + " " +"at" + " " +  time();
	historyContainer.appendChild(newElement);
	alert(" Board Updated Successfully"); 
});
// box-6
document.getElementById('btn-glassdoar').addEventListener('click', function () {
	const btn = document.getElementById('btn-glassdoar');
	btn.setAttribute('disabled', true);
	const boxTitle = document.getElementById('box-title6').innerText;
	const historyContainer = document.getElementById('history-container');
	const newElement = document.createElement("p");
	newElement.classList.add('add-history');
	newElement.innerText = 'You have Complete The Task' + " " +  boxTitle + " " +"at" + " " +  time();
	historyContainer.appendChild(newElement);
	alert(" Board  Board Updated Successfully"); 
});

