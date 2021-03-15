

var main_div = document.createElement('div');
main_div.style.border = '1px solid grey';
main_div.style.height = '550px';
main_div.style.width = '400px';
main_div.style.borderTopLeftRadius = "5px";
main_div.style.borderTopRightRadius = "5px";
main_div.style.margin = '0 auto';
main_div.style.marginTop = '100px';


var screen = document.createElement('div');
screen.style.width = '100%';
screen.style.fontSize = '5rem';
screen.style.height = '100px';
screen.style.border = 'none';
screen.style.backgroundColor = '#252525';
screen.style.color = '#fff';
screen.style.textAlign = 'right';
screen.style.paddingRight = '20px';
screen.style.padding = '10px';



document.addEventListener('keydown', logkey);


var keys_div = document.createElement('div');
keys_div.display ='inline';
keys_div.style.height='450px';
keys_div.style.display = 'grid';
keys_div.style.gridTemplateColumns= 'repeat(3, 1fr)';
keys_div.style.gridTemplateRows= 'repeat(6, 1fr)';


var add_button = document.createElement('button');
add_button.setAttribute('id','add');
add_button.setAttribute('class','operator');
add_button.innerHTML = '+';
add_button.style.height='100%';
add_button.style.gridArea = '1/1/5/1';  

add_button.addEventListener('click', function(){button_press('addition')});


var sub_button = document.createElement('button');
sub_button.setAttribute('id','sub');
sub_button.setAttribute('class','operator');
sub_button.innerHTML = '-';
sub_button.style.height='100%';
sub_button.style.gridArea = '1/2/3/4';  

sub_button.addEventListener('click', function(){button_press('subtract')});


var mul_button = document.createElement('button');
mul_button.setAttribute('id','mul');
mul_button.setAttribute('class','operator');
mul_button.innerHTML = '*';
mul_button.style.height='100%';

mul_button.addEventListener('click', function(){button_press('multiply')});


var div_button = document.createElement('button');
div_button.setAttribute('id','div');
div_button.setAttribute('class','operator');
div_button.innerHTML = '/';
div_button.style.height = '100%';

div_button.addEventListener('click', function(){button_press('divide')});

var mod_button = document.createElement('button');
mod_button.setAttribute('id','mod');
mod_button.setAttribute('class','operator');
mod_button.innerHTML = '%';
mod_button.style.height = '100%';

mod_button.addEventListener('click', function(){button_press('modulus')});



var decimal_button = document.createElement('button');
decimal_button.setAttribute('id','decimal');
decimal_button.setAttribute('class','operator');
decimal_button.innerHTML = '.';
decimal_button.style.height = '100%';

decimal_button.addEventListener('click', function(){button_press('decimal')});


var clear_button = document.createElement('button');
clear_button.setAttribute('id','clear');
clear_button.setAttribute('class','operator');
clear_button.innerHTML = 'AC';
clear_button.style.backgroundColor = '#e74f4e';
clear_button.style.color= '#fff';
clear_button.style.height='100%';
clear_button.style.gridArea = '5/1/5/4'; 

clear_button.addEventListener('click', function(){button_press('clear')});



var result_button = document.createElement('button');
result_button.setAttribute('id','res');
result_button.setAttribute('class','operator');
result_button.innerHTML = '=';
result_button.style.backgroundColor = '#ffcf40';
result_button.style.color= '#fff';
result_button.style.height='100%';
result_button.style.gridArea = '6/1/7/4'; 
result_button.addEventListener('click', function(){button_press('result')});


keys_div.append(add_button,sub_button,div_button, mul_button,mod_button,decimal_button  ,clear_button, result_button);


function logkey(e){
	
	console.log(e);
	var regex = /[0-9]|\.|\(|\)/;
	
	if(e.key=='Backspace'){
		screen.innerHTML = screen.innerHTML.slice(0,(screen.innerHTML.length-1));
	}
	else if(!regex.test(e.key)){
		alert("Only numbers allowed");
	}
	else{
		screen.innerHTML += e.key;
	}
	
}

function button_press(type){
	if (type === 'clear'){
		screen.innerHTML = '';
	}
	if( type === 'decimal'){
		screen.innerHTML += '.';		
	}
	if( type === 'addition'){
		screen.innerHTML += '+';		
	}
	
	if( type === 'multiply'){
		screen.innerHTML += '*';		
	}
	
	if( type === 'divide'){
		screen.innerHTML += '/';		
	}
	
	if( type === 'modulus'){
		screen.innerHTML += '%';		
	}
	
	if( type === 'subtract'){
		screen.innerHTML += '-';	
	}
	
	if( type === 'result'){
		screen.innerHTML = eval(screen.innerHTML);	
	}
}

main_div.append(screen,keys_div);
document.body.append(main_div);

