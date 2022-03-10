document.getElementById("travatitle").addEventListener("click", ()=>{
	alert("Travais, maldito!");
	while(true){
		console.log();
	}
});

document.querySelector(".s1-button").addEventListener("click", ()=>{
	let data = prompt("Insira sua data de nascimento: ");
	if(data.length!=6){
		data = prompt("Insira com 6 digitos, filho da puta!");
	}
	window.open(`https://nhentai.net/g/${data}`);
});

document.getElementById("corinthiansBall").addEventListener("mouseenter", ()=>{
	alert("hi");
	document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/724/91/678/brazil-corinthians-fiel-sinalizador-wallpaper-preview.jpg')";
});

