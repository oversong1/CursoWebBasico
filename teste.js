// var hora = document.getElementById("Hora");
// // var nome = document.getElementById("nome");
// var teste = document.getElementsByTagName("p");

// hora.addEventListener("click",()=>{
//     // nome.innerHTML=Date();
//     teste.innerHTML=Date(); 
//     console.log(teste) 
// })


var hora = document.getElementById("Hora");
var paragrafos = document.getElementsByTagName("p");

hora.addEventListener("click", () => {
    var dataAtual = Date();
    for (var i = 0; i < paragrafos.length; i++) {
        if (paragrafos[i].tagName.toLowerCase() === 'p') {
            paragrafos[i].innerHTML = dataAtual;
        }
    }
});
