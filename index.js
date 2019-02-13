let eventType = "formal";
let temp = 50;

if(eventType === "casual" && temp < 54){
	console.log("Wear something comfy and a coat.");

}else if (eventType === "casual" && temp >= 54 && temp <= 70){
	console.log("Wear something comfy and a jacket.");

}else if (eventType === "casual" && temp > 70) {
	console.log("Wear something comfy and no jacket.");

}else if (eventType === "semi-formal" && temp < 54){
	console.log("Wear a polo and a coat.");

}else if (eventType === "semi-formal" && temp >= 54 && temp < 70){
	console.log("Wear a polo and a jacket.");

}else if (eventType === "formal" && temp < 54 && temp > 70){
	console.log("Wear a polo and no jacket.")

}else if (eventType === "formal" && temp < 54){
	console.log("Wear a suit and a coat.");

}else if (eventType === "formal" && temp >= 54 && temp <=70){
	console.log("Wear a suit and a jacket.");

}else if (eventType === "formal" && temp >70){
	console.log("Wear a suit and no jacket");

}else{
	console.log("Error");
}



















