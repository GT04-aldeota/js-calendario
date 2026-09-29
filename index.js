let mes = document.querySelector("#mes");
let dia = document.querySelector("#dia");
let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

mes.innerHTML += `<option disabled selected class="text-black">Escolha o mês</option>`;
for(let m = 0; m < meses.length; m++){
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`;
}
// Preencher os dias de acordo com o mes selecionado
for(let d = 1; d <= 31; d++){
    dia.innerHTML += `<option class="text-black">${d}</option>`;
}

function descobrirNome(){
    let nome = "";
    if(mes.value == "Jan"){
        nome = "Pedrinho"
    } else if(mes.value == "Fev"){
        nome = "Betão"
    } else if(mes.value == "Mar"){
        nome = "Paulinho"
    } else if(mes.value == "Abr"){
        nome = "Léozinho"
    }

    if(dia.value == 1){
        nome += " Treina Bumbum"
    } else if(dia.value == 2){
        nome += " Mata Frango"
    } // Completar os dias

    alert(`Seu nome é: ${nome}`)
}