function generarAleatorio(){
	return Math.ceil(Math.random() * 6);
}

function lanzarDado(dado){
	dado.textContent = generarAleatorio();
}


let dadosContainers = [...document.getElementsByClassName("dadoContainer")];
dadosContainers.forEach(dadoContainer => {
	dadoContainer.children[1].addEventListener('click', function(){lanzarDado(dadoContainer.children[0])});	
});