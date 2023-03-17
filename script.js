const board = document.getElementById('board');
const colorChosen = document.querySelector('.color');
const variablz = document.querySelectorAll('.buttons');

let varr = 0;
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
	const cellz = document.querySelectorAll('.cellz');
	cellz.forEach(celll => celll.addEventListener('mouseover', ()=> {
		celll.style.backgroundColor = color;
	}))
}))


