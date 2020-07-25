let count = 0;
let arr = [];
let done = false;
for(let i = 0; i < 9; i++) {
	arr.push(' ');
}

function change(id) {
	if(!done) {
		count++;
		let element = document.getElementById(id);
		
		if(count % 2 == 0 && arr[id] === ' ') {
			element.innerHTML = "X";
			arr[id] = "X"
			element.style.backgroundColor = "purple";
			document.getElementById("winner").innerHTML = "Player One : ";
		}
		else if(arr[id] === ' ') {
			element.innerHTML = "O";
			arr[id] = "O";
			element.style.backgroundColor = "orange";
			document.getElementById("winner").innerHTML = "Player Two : ";
		}
		else{
			count--;
		}
		
		if(count >= 5 && checkWin()) {
			if(count % 2 == 0) {
				let win = document.getElementById("winner");
				win.innerHTML = "Player Two Wins!";
				document.getElementById("body").style.backgroundColor = "purple";
				alert("Player Two Wins");
				
			}
			else {
				let win = document.getElementById("winner");
				win.innerHTML = "Player One Wins!";
				document.getElementById("body").style.backgroundColor = "orange";
				alert("Player One Wins");
			}
			done = true;
		}
		else if(count == 9) { 
			let win = document.getElementById("winner");
			win.innerHTML = "It's A Draw!";
			alert("It's A Draw");
		}
	}
	
}

function checkWin() {
	for(let i = 0; i < 9; i += 3) {
		if(arr[i] != " " && arr[i] == arr[i + 1] && arr[i + 1] === arr[i + 2]) {
			return true;
		}
	}
	
	for(let i = 0; i < 3; i++) {
		if(arr[i] != " " && arr[i] == arr[i + 3] && arr[i + 3] === arr[i + 6]) {
			return true;
		}
	}
	
	return (arr[0] != " " && arr[0] === arr[4] & arr[4] === arr[8])||(arr[2] != " " && arr[2] == arr[4] && arr[4] === arr[6]);
}

function reset() {
	window.location.reload();
}
