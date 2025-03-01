// Theme Change section 

function randomColorChange() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++){
		color = color + letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

document.getElementById('theme-icon').addEventListener('click',
	function () {
		document.body.style.backgroundColor = randomColorChange();
	}
)

// Date Time Update Section

function currantDate() {
	const toDay = new Date();
	const days = { weekday: 'short' };
	const dates = { month: 'short', day: '2-digit', year: 'numeric' };
	const day = toDay.toLocaleDateString('en-BN', days);
	const date = toDay.toLocaleDateString('en-BN', dates);

	return `${day},\n ${date}`;

}

document.getElementById('datetime').innerText = currantDate();