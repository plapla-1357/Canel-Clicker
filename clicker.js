var x = 0;
var furnace = 0;
var id = document.getElementById("canele");
document.getElementById("acheter_four").disabled = true;
function add() {
	
	x = id.innerHTML;
	x++;
	id.innerHTML = x;
	
	if (x >= 25) {
		document.getElementById("acheter_four").removeAttribute('disabled');
	} else {
		document.getElementById("acheter_four").disabled = true;
	}
};

function buy_furnace(){
	if (x >= 25 ){
		x-= 25;
		furnace += 1 ;
	}
	
};





		