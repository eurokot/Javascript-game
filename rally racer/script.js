var car = document.getElementById("car");
var stone = document.getElementById("stone");
var stone2 = document.getElementById("stone2");
var stone3 = document.getElementById("stone3");
var car_img = document.getElementById("car_img");
var fire = document.getElementById("fire");

var pp = window.getComputedStyle(stone);
var zz = window.getComputedStyle(stone2);
var xx = window.getComputedStyle(stone3);
var st = window.getComputedStyle(car);

var top_stone = parseInt(pp.marginTop);
var top_stone2 = parseInt(zz.marginTop);
var top_stone3 = parseInt(xx.marginTop);





var intersect = function(car,stone){ 
var a={ 
y: car.getBoundingClientRect().top, 
x: car.getBoundingClientRect().left,
y1: car.getBoundingClientRect().bottom, 
x1: car.getBoundingClientRect().right,
} 
var b={ 
y: stone.getBoundingClientRect().top, 
x: stone.getBoundingClientRect().left,
y1: stone.getBoundingClientRect().bottom,
x1: stone.getBoundingClientRect().right,
}

var b3={ 
y: stone3.getBoundingClientRect().top, 
x: stone3.getBoundingClientRect().left,
y1: stone3.getBoundingClientRect().bottom,
x1: stone3.getBoundingClientRect().right,
}   

	return( 
     //b - stone

		(((a.x>=b.x && a.x<=b.x1)||(a.x1>=b.x && a.x1<=b.x1))

		&&((a.y>=b.y && a.y<=b.y1)||(a.y1>=b.y && a.y1<=b.y1)))

		||(((b.x>=a.x && b.x<=a.x1)||(b.x1>=a.x && b.x1<=a.x1)) 

		&&((b.y>=a.y && b.y<=a.y1)||(b.y1>=a.y && b.y1<=a.y1))))

		||((((a.x>=b.x && a.x<=b.x1)||(a.x1>=b.x && a.x1<=b.x1)) 

		&& ((b.y>=a.y && b.y<=a.y1 )||( b.y1>=a.y && b.y1<=a.y1)))

		||(((b.x>=a.x && b.x<=a.x1)||(b.x1>=a.x && b.x1<=a.x1))

		&&((a.y>=b.y && a.y<=b.y1)||(a.y1>=b.y && a.y1<=b.y1))));

	//b3 - stone 2
		(((a.x>=b3.x && a.x<=b3.x1)||(a.x1>=b3.x && a.x1<=b3.x1))

		&&((a.y>=b3.y && a.y<=b3.y1)||(a.y1>=b3.y && a.y1<=b3.y1)))

		||(((b3.x>=a.x && b3.x<=a.x1)||(b3.x1>=a.x && b3.x1<=a.x1)) 

		&&((b3.y>=a.y && b3.y<=a.y1)||(b3.y1>=a.y && b3.y1<=a.y1)))

		||((((a.x>=b3.x && a.x<=b3.x1)||(a.x1>=b3.x && a.x1<=b3.x1)) 

		&& ((b3.y>=a.y && b3.y<=a.y1 )||( b3.y1>=a.y && b3.y1<=a.y1)))

		||(((b3.x>=a.x && b3.x<=a.x1)||(b3.x1>=a.x && b3.x1<=a.x1))

		&&((a.y>=b3.y && a.y<=b3.y1)||(a.y1>=b3.y && a.y1<=b3.y1))));

	}

var intersect_2 = function(car,stone2){ 
var a={ 
y: car.getBoundingClientRect().top, 
x: car.getBoundingClientRect().left,
y1: car.getBoundingClientRect().bottom, 
x1: car.getBoundingClientRect().right,
} 

var b2={ 
y: stone2.getBoundingClientRect().top, 
x: stone2.getBoundingClientRect().left,
y1: stone2.getBoundingClientRect().bottom,
x1: stone2.getBoundingClientRect().right,
}
	return( 
		//b2 - stone2
		(((a.x>=b2.x && a.x<=b2.x1)||(a.x1>=b2.x && a.x1<=b2.x1))

		&&((a.y>=b2.y && a.y<=b2.y1)||(a.y1>=b2.y && a.y1<=b2.y1)))

		||(((b2.x>=a.x && b2.x<=a.x1)||(b2.x1>=a.x && b2.x1<=a.x1)) 

		&&((b2.y>=a.y && b2.y<=a.y1)||(b2.y1>=a.y && b2.y1<=a.y1)))

		||((((a.x>=b2.x && a.x<=b2.x1)||(a.x1>=b2.x && a.x1<=b2.x1)))

		&& ((b2.y>=a.y && b2.y<=a.y1 )||( b2.y1>=a.y && b2.y1<=a.y1)))

		||(((b2.x>=a.x && b2.x<=a.x1)||(b2.x1>=a.x && b2.x1<=a.x1))

		&&((a.y>=b2.y && a.y<=b2.y1)||(a.y1>=b2.y && a.y1<=b2.y1))));

	}

var intersect_3 = function(car,stone3){ 
var a={ 
y: car.getBoundingClientRect().top, 
x: car.getBoundingClientRect().left,
y1: car.getBoundingClientRect().bottom, 
x1: car.getBoundingClientRect().right,
} 
var b3={ 
y: stone3.getBoundingClientRect().top, 
x: stone3.getBoundingClientRect().left,
y1: stone3.getBoundingClientRect().bottom,
x1: stone3.getBoundingClientRect().right,
}
	return(
		//b3 - stone 2
		(((a.x>=b3.x && a.x<=b3.x1)||(a.x1>=b3.x && a.x1<=b3.x1))

		&&((a.y>=b3.y && a.y<=b3.y1)||(a.y1>=b3.y && a.y1<=b3.y1)))

		||(((b3.x>=a.x && b3.x<=a.x1)||(b3.x1>=a.x && b3.x1<=a.x1)) 

		&&((b3.y>=a.y && b3.y<=a.y1)||(b3.y1>=a.y && b3.y1<=a.y1)))

		||((((a.x>=b3.x && a.x<=b3.x1)||(a.x1>=b3.x && a.x1<=b3.x1))) 

		&& ((b3.y>=a.y && b3.y<=a.y1 )||( b3.y1>=a.y && b3.y1<=a.y1)))

		||(((b3.x>=a.x && b3.x<=a.x1)||(b3.x1>=a.x && b3.x1<=a.x1))

		&&((a.y>=b3.y && a.y<=b3.y1)||(a.y1>=b3.y && a.y1<=b3.y1))));

	}



function Carmove(event){

var left_car = parseInt(st.marginLeft);

		switch(event.keyCode){

			case 65:  //если нажата клавиша "A" (влево)
				if(left_car>0 && left_car != 172)
					car.style.marginLeft = left_car - 200 + "px"
				break;

			case 68:  //если нажата клавиша "D" (вправо)
				if(left_car < document.documentElement.clientWidth && left_car != 572)
					car.style.marginLeft = left_car + 200 + "px";
				break;	
		}
}

function Stonemove(){
	if(!intersect(car,stone) && top_stone < 800){
		setTimeout(function() {
			top_stone += 2;
			stone.style.marginTop = top_stone + "px";
			Stonemove();
		}, 5);
	}
	else if(top_stone >= 800){
		//stone.style.visibility = "hidden";
		top_stone = 0;
		return
	}
	else{
		removeEventListener("keydown", Carmove);
		arrFunc.length = 0;
		clearInterval(randFunc);
		car_img.style.display = "none";
		fire.style.display = "block";
		top_stone +=0;
		stone.style.marginTop = top_stone + "px";

		top_stone2 += 0;
		stone2.style.marginTop = top_stone2 + "px";
		stone2.style.display = "none";

		top_stone3 = +0;
		stone3.style.marginTop = top_stone3 + "px";
		stone3.style.display = "none";

		return;
	}

}


function Stonemove2(){
	if(!intersect_2(car,stone2) && top_stone2 < 800){
		setTimeout(function() {
			top_stone2 += 2;
			stone2.style.marginTop = top_stone2 + "px";
			Stonemove2();
		}, 5);
	}
	else if(top_stone2 >= 800){
		//stone.style.visibility = "hidden";
		top_stone2 = 0;
		return
	}
	else{
		removeEventListener("keydown", Carmove);
		arrFunc.length = 0;
		clearInterval(randFunc);
		car_img.style.display = "none";
		fire.style.display = "block";
		top_stone +=0;
		stone.style.marginTop = top_stone + "px";
		stone.style.display = "none";

		top_stone2 += 0;
		stone2.style.marginTop = top_stone2 + "px";

		top_stone3 = +0;
		stone3.style.marginTop = top_stone3 + "px";
		stone3.style.display = "none";

		return;
	}

}


function Stonemove3(){
	if(!intersect_3(car,stone3) && top_stone3 < 800){
		setTimeout(function() {
			top_stone3 += 2;
			stone3.style.marginTop = top_stone3 + "px";
			Stonemove3();
		}, 5);
	}
	else if(top_stone3 >= 800){
		//stone.style.visibility = "hidden";
		top_stone3 = 0;
		return
	}
	else{
		removeEventListener("keydown", Carmove);
		arrFunc.length = 0;
		clearInterval(randFunc);
		car_img.style.display = "none";
		fire.style.display = "block";
		top_stone +=0;
		stone.style.marginTop = top_stone + "px";
		stone.style.display = "none";

		top_stone2 += 0;
		stone2.style.marginTop = top_stone2 + "px";
		stone2.style.display = "none";

		top_stone3 += 0;
		stone3.style.marginTop = top_stone3 + "px";

		return;
	}

}



const arrFunc = [Stonemove, Stonemove2, Stonemove3];
randFunc = () => {
  arrFunc[Math.floor(Math.random() * arrFunc.length)]();
}


setInterval(randFunc,2700);
addEventListener("keydown", Carmove);
