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
