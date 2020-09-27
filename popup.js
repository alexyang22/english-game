window.onload = function() {

    $('.dropzone').sortable({
		connectWith: '.dropzone',
   		start: function(){
   			console.log("Drag started");
   		},
		stop: function(e,ui){
   			console.log("Drag stopped");
    	}
	});
	document.getElementById("reset").addEventListener("click", function() {		zero();;	});
	document.getElementById("incorrect").addEventListener("click", function() {		lowerCounter();	});
	document.getElementById("correct").addEventListener("click", function() {		counter();	});
    document.getElementById("add-task").addEventListener("click", function() {
		addNewTask();
	});
}

function addNewTask() {
	if(document.getElementById("task-input").value.toString().length > 0) {
		
		//const data = document.getElementById("task-input").value;
		//document.getElementById("task-input").value = "";
		const data = document.getElementById("task-input").value;
		document.getElementById("task-input").value = "";

        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = data;
        taskDiv.className = "task";

		const randomNumber = randomIntFromInterval(1, 3);		
		if(randomNumber == 1) {			
			document.getElementById("todo").appendChild(taskDiv);		
	} 
	else if(randomNumber == 2) {			
		document.getElementById("in_progress").appendChild(taskDiv);		
	} 
	else {			
		document.getElementById("completed").appendChild(taskDiv)		
	}
	}

}
var num = 0;
function counter() {	
	num++;	
	document.getElementById("count").innerHTML = String(num);
}
function lowerCounter() {
		num--;	
		document.getElementById("count").innerHTML = String(num)
	}
	function zero() {	
		num = 0;	
		document.getElementById("count").innerHTML = String(num)	
		removeAllChildNodes(document.getElementById("todo"));	
		removeAllChildNodes(document.getElementById("in_progress"));	
		removeAllChildNodes(document.getElementById("completed"));
	}
function removeAllChildNodes(parent) {	
	const child = parent.firstChild    
	while (parent.firstChild) {        
		parent.removeChild(parent.firstChild);	
	}	
		parent.appendChild(child)
		
}
function randomIntFromInterval(min, max) {
	 return Math.floor(Math.random() * (max - min + 1) + min);
}
