const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const colorCodeText = document.querySelector(".color-code");
const countBox = document.querySelector(".countdown");
const countText = document.querySelector("#count");
let interval;
let countingInterval;
let countingTimeout;

const generateRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const a = (Math.random() * 1).toFixed(1);

	const color = `rgba(${r}, ${g}, ${b}, ${a})`;
	return color;
};

const changeColor = () => {
	let color = generateRandomColor();
	body.style.backgroundColor = color;
	colorCodeText.textContent = color;
};

const startCounter = () => {
	let counter = 2;
	countBox.classList.remove("disable");
	countingInterval = setInterval(() => {
		countText.textContent = counter;
		counter--;
	}, 1000);
	countingTimeout = setTimeout(() => {
		clearInterval(countingInterval);
		counter = 2;
		startCounter();
	}, 3000);
};

const startChangingColors = () => {
	start.classList.add("disable");
	stop.classList.remove("disable");
	interval = setInterval(changeColor, 3000);
	startCounter();
};

const stopChangingColors = () => {
	stop.classList.add("disable");
	start.classList.remove("disable");
	clearInterval(interval);
	clearInterval(countingInterval);
	clearTimeout(countingTimeout);
	countBox.classList.add("disable");
};

start.addEventListener("click", startChangingColors);
stop.addEventListener("click", stopChangingColors);
