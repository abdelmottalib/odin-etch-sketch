const board = document.getElementById('board');
const eraserr = document.getElementById('eraser');
const randomNum = document.getElementById('random');
const colorChosen = document.querySelector('.color');
const variablz = document.querySelectorAll('.buttons');

let varr = 0;
let flag = 0;
let drawing = 0;
let eraseFlag = 0;
let color = "black";


colorPicker();
variablz.forEach(variable=>variable.addEventListener('click', (e)=> {
	varr = parseInt(e.target.textContent);
	board.innerHTML = "";
	drawBoard(varr);
	addEventListener('mousedown', ()=> {drawing = true});
	randomNum.addEventListener('click', ()=> {
		flag = 1;
		console.log(color);
	})
	const cellz = document.querySelectorAll('.cellz');
	randomDraw(cellz);
	eraser(cellz);
	addEventListener('mouseup', ()=> {drawing = false});
}))



function drawBoard(varr) {
	for (let index = 0; index < varr; index++) {
		const cell = document.createElement('div');
		cell.classList.add('cellz');
		const sq = Math.sqrt(varr);
		const qq = 600 / sq;
		cell.style.width = `${qq}px`;
		cell.style.height = `${qq}px`;
		cell.style.backgroundColor = "white"
		board.appendChild(cell);
	}
}

function randomDraw(cellz) {
	cellz.forEach(celll => celll.addEventListener('mousemove', ()=> {
		if (drawing) {
			if (flag) {
				let randomGen1 = Math.floor(Math.random() * 256);
				let randomGen2 = Math.floor(Math.random() * 256);
				let randomGen3 = Math.floor(Math.random() * 256);
				color = `rgb(${randomGen1}, ${randomGen2}, ${randomGen3})`
			}
			celll.style.backgroundColor = color;
		}
	}))
}

function eraser(cellz) {
	eraserr.addEventListener('click', ()=> {
		addEventListener('mousedown', ()=> {eraseFlag = true});
		cellz.forEach(cell => cell.addEventListener('mousemove', ()=> {
			if (eraseFlag) {
				cell.style.backgroundColor = "white";
			}
		}));
	});
	addEventListener('mouseup', ()=> {eraseFlag = false});
};

function colorPicker() {
	colorChosen.addEventListener('input', (e)=> {
		color = e.target.value;
	})
}
