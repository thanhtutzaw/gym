
const countEl = document.getElementById('count');
updateCounter();
function updateCounter() {
	fetch('https://api.countapi.xyz/update/GymTube-Online-Fitness/website/?amount=1')
		.then(res => res.json())
		.then(res => {
			countEl.innerHTML = res.value;
		});
}


