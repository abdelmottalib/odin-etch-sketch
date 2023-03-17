const board = document.getElementById('board');
const randomNum = document.getElementById('random');
const colorChosen = document.querySelector('.color');
const variablz = document.querySelectorAll('.buttons');

let varr = 0;
let flag = 0;
let color = "red";
colorChosen.addEventListener('input', (e)=> {
	color = e.target.value;
})
variablz.forEach(variable=>variable.addEventListener('click', (e)=> {
	varr = parseInt(e.target.textContent);
	board.innerHTML = "";
	for (let index = 0; index < varr; index++) {
		const cell = document.createElement('div');
		cell.classList.add('cellz');
		const sq = Math.sqrt(varr);
		const qq = 600 / sq;
		cell.style.width = `${qq}px`;
		cell.style.height = `${qq}px`;
		cell.style.border = "1px solid black";
		board.appendChild(cell);
	}
	randomNum.addEventListener('click', ()=> {
		flag = 1;
		console.log(color);
	})
	const cellz = document.querySelectorAll('.cellz');
	cellz.forEach(celll => celll.addEventListener('mouseover', ()=> {
		if (flag) {
			let randomGen1 = Math.floor(Math.random() * 256);
			let randomGen2 = Math.floor(Math.random() * 256);
			let randomGen3 = Math.floor(Math.random() * 256);
			color = `rgb(${randomGen1}, ${randomGen2}, ${randomGen3})`
		}
		celll.style.backgroundColor = color;
	}))
}))
let random = Math.floor(Math.random() * 256);
console.log(random);

