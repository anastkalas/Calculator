/*function add(){
	//get the number written
	var element=document.getElementById('input-field');
	var number1=inputElement.value;
}*/
var numbers='';
var count=0;
var count1=0;

function number0(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"0";
	numbers=inputElement.value;
}

function number1(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"1";
	numbers=inputElement.value;
}

function number2(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"2";
	numbers=inputElement.value;
}

function number3(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"3";
	numbers=inputElement.value;
}

function number4(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"4";
	numbers=inputElement.value;
}

function number5(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"5";
	numbers=inputElement.value;
}

function number6(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"6";
	numbers=inputElement.value;
}


function number7(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"7";
	numbers=inputElement.value;
}

function number8(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"8";
	numbers=inputElement.value;
}


function number9(){
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers+"9";
	numbers=inputElement.value;
}


function deletefunction(){
	numbers=numbers.slice(0,-1);
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers;
}

function clearfunction(){
	numbers="";
	var inputElement=document.getElementById("input-field");
	inputElement.value=numbers;
}

function comma(){
	var inputElement=document.getElementById('input-field');
	if(count==0){
		if(inputElement.value==""){
			inputElement.value=numbers+'0.';
		}
		else{
			inputElement.value=numbers+'.';
		}
		numbers=inputElement.value;
		count=count+1;
	}
}

function modulo(){
	var inputElement=document.getElementById("input-field");
	//convert the input to integer for modulo
	var check=false;
	var newnumber;
	numbers=inputElement.value;
	for(var i=0; i<numbers.length; ++i){
		if(numbers[i]=='.'){
			check=true;
		}
	}
	if(check==true){
		newnumber=parseFloat(numbers);
	}
	else{
		newnumber=parseInt(numbers);
	}
	numbers=numbers/100;
	numbers=numbers.toString();
	inputElement.value=numbers;

}


function divise(){
	var inputElement=document.getElementById('input-field');
	inputElement.value=numbers+"/";
	numbers=inputElement.value;
}

function multiply(){
	var inputElement=document.getElementById('input-field');
	inputElement.value=numbers+"x";
	numbers=inputElement.value;
}

function minus(){
	var inputElement=document.getElementById('input-field');
	inputElement.value=numbers+'-';
	numbers=inputElement.value;
}

function plus(){
	var inputElement=document.getElementById('input-field');
	inputElement.value=numbers+'+';
	numbers=inputElement.value;
}

function equals(){
	//προτεραιοτητα πραξεων=πολλαπλασιασμος, διαιρεση, προσθεση, αφαιρεση
	//1)ελεγχος για καποιο δεκαδικο αριθμο
	//2)ξεκαθαρισμα αριθμων(οργανωση)
	//3)προτεραιοτητα πραξεων
		//α)εντοπισμος διαιρεσεων και πολλαπλασιασμων(εκτελεση αυτων)
		//β)εντοπισμος προσθεσεων και αφαιρεων(εκτελεση αυτων)

	let operation=numbers.split("");
	//make numbers from string to integers/floats
	//push each operation and each number to the appropriate list
	let numbers_of_operation=[];
	let operations=[];
	var n='';
	var plus=0;
	var minus=0;
	var multiply=0;
	var division=0;

	for(var i=0; i<=operation.length; ++i){
	    if(operation[i]!='+' && operation[i]!='-' && operation[i]!='/' && operation[i]!='x'){
	        n=n+operation[i];
	    }
	    else{
	        n=parseFloat(n);
	        numbers_of_operation.push(n);
	        n='';
	        operations.push(operation[i]);
	        if(operation[i]=='+'){
	            plus=plus+1;
	        }
	        else if(operation[i]=='-'){
	            minus=minus+1;
	        }
	        else if(operation[i]=='x'){
	            multiply=multiply+1;
	        }
	        else{
	            division=division+1;
	        }
	    }
	}
	if(n!=''){
	    n=parseFloat(n);
	    numbers_of_operation.push(n);
	}

	var end=multiply+division;
	var result;

	while(end!=0){
	    var i=0;
	    while(i<operations.length){
	        if(operations[i]=='x'){
	            end=end-1;
	            result=numbers_of_operation[i]*numbers_of_operation[i+1];
	            operations.splice(i,1);
	            numbers_of_operation.splice(i,2);
	            numbers_of_operation.splice(i, 0, result);
	            i=i+operations.length;
	        }
	        else if(operations[i]=='/'){
	            end=end-1
	            result=numbers_of_operation[i]/numbers_of_operation[i+1];
	            operations.splice(i,1);
	            numbers_of_operation.splice(i,2);
	            numbers_of_operation.splice(i, 0, result);
	            i=i+operations.length;
	        }
	        i=i+1;
	    }
	}

	end=plus+minus;

	while(end>0){
	    for(var i=0; i<operations.length; ++i){
	        //1) if operations[i]==''
	        if(operations[i]=='+'){
	            end=end-1;
	            result=numbers_of_operation[i]+numbers_of_operation[i+1];
	            operations.splice(i,1);
	            numbers_of_operation.splice(i,2);
	            numbers_of_operation.splice(i, 0, result);
	            break;
	        }
	        else if(operations[i]=='-'){
	            end=end-1
	            result=numbers_of_operation[i]-numbers_of_operation[i+1];
	            operations.splice(i,1);
	            numbers_of_operation.splice(i,2);
	            numbers_of_operation.splice(i, 0, result);
	            break;
	        }
	    }
	}
	var inputElement=document.getElementById('input-field');
	numbers='';
	inputElement.value=numbers+numbers_of_operation[0];
	numbers=inputElement.value;
}