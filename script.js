document.querySelectorAll(".liczba").forEach((liczba)=>{
	liczba.addEventListener('click',function(){
		var zmienna = document.querySelector("#wynikdol").innerHTML; 
		if(zmienna.length == 10 || zmienna.length > 10){

		}else{
		if(document.querySelector("#wynikdol").innerHTML !== "0"){
		document.querySelector("#wynikdol").innerHTML += this.value;
	}else{
	document.querySelector("#wynikdol").innerHTML = this.value;	
	}
}

})
})
document.querySelectorAll(".znak").forEach((znak)=>{
	znak.addEventListener("click",function(){

			if(this.value == "," && document.querySelector("#wynikdol").innerHTML == ""){
				document.querySelector("#wynikdol").innerHTML ="0."
			}
			else if(this.value == "," && document.querySelector("#wynikdol").innerHTML.includes(".") === true){
				
			}

			else{
			if(document.querySelector("#wynikdol").innerHTML !== "" ){
				var zmienna = this.value;
				if(this.value == "X"){
			zmienna = "*";
		}
				if(this.value == ","){
					if(document.querySelector("#wynikgora").innerHTML.includes("*") === false && document.querySelector("#wynikgora").innerHTML.includes(",") === false){
					zmienna = ".";
					document.querySelector("#wynikdol").innerHTML +=zmienna;
				}
				else{
					document.querySelector("#wynikdol").innerHTML +=zmienna;
				}
			}else{
			if(document.querySelector("#wynikgora").innerHTML.includes("*") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === false||
				document.querySelector("#wynikgora").innerHTML.includes("/") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === false||
				document.querySelector("#wynikgora").innerHTML.includes("-") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === false||
				document.querySelector("#wynikgora").innerHTML.includes("+") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === false){
				var obl1 = document.querySelector("#wynikgora").innerHTML
				obl1 += document.querySelector("#wynikdol").innerHTML

				document.querySelector("#wynikgora").innerHTML = eval(obl1)+zmienna;
				document.querySelector("#wynikdol").innerHTML = "";
			}
			else if(document.querySelector("#wynikgora").innerHTML.includes("*") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === true||
				document.querySelector("#wynikgora").innerHTML.includes("/") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === true||
				document.querySelector("#wynikgora").innerHTML.includes("-") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === true||
				document.querySelector("#wynikgora").innerHTML.includes("+") === true && document.querySelector("#wynikgora").innerHTML.includes("=") === true){
				var obl1 = document.querySelector("#wynikdol").innerHTML
				document.querySelector("#wynikgora").innerHTML = eval(obl1)+zmienna;
				document.querySelector("#wynikdol").innerHTML = "";
			}else{
		if(this.value == "X"){
			zmienna = "*";
		}
		document.querySelector("#wynikdol").innerHTML +=zmienna;
		document.querySelector("#wynikgora").innerHTML = document.querySelector("#wynikdol").innerHTML;
		document.querySelector("#wynikdol").innerHTML = "";

	}}}}})

})
document.querySelector("#kasuj_wszystko").addEventListener("click",function(){
	document.querySelector("#wynikdol").innerHTML = "";
	document.querySelector("#wynikgora").innerHTML = "&nbsp;";
})
document.querySelector("#kasuj").addEventListener("click",function(){
	document.querySelector("#wynikdol").innerHTML = "";
})
document.querySelector("#cofnij").addEventListener("click",function(){
	var abc = document.querySelector("#wynikdol").innerHTML;
	abc = abc.slice(0,abc.length -1);
	document.querySelector("#wynikdol").innerHTML = abc;

})
document.querySelector("#oblicz").addEventListener("click",oblicz);
function oblicz(){
	if(document.querySelector("#wynikdol").innerHTML !== "" ){
	if(document.querySelector("#wynikgora").innerHTML.includes("=") === false){
	var obl1 = document.querySelector("#wynikgora").innerHTML
	obl1 += document.querySelector("#wynikdol").innerHTML
	document.querySelector("#wynikgora").innerHTML = obl1+"=";
	document.querySelector("#wynikdol").innerHTML = eval(obl1);
}}}
document.querySelector("#znak_zero").addEventListener("click",function(){
	var zmienna = this.value
	if(document.querySelector("#wynikdol").innerHTML !== "" && document.querySelector("#wynikdol").innerHTML !== "0"){
	document.querySelector("#wynikdol").innerHTML += zmienna;
}})
document.querySelector("#zmiana").addEventListener("click",function(){
	if(document.querySelector("#wynikdol").innerHTML !== "" && document.querySelector("#wynikdol").innerHTML !== "0"){
	document.querySelector("#wynikdol").innerHTML = (document.querySelector("#wynikdol").innerHTML)*(-1);}
})