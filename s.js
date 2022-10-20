var qtdeCampos = 0;

function addCampos() {
    var objPai = document.getElementById("imc");
    var objFilho = document.createElement("div");

    objFilho.setAttribute("class", "input");
    objPai.appendChild(objFilho);
    document.querySelector("#imc .input:last-child").innerHTML = "Altura <br><input type='number' class='altura' min='0'>";
}


var cont = 0;
let total = 0;
function imc() {
    let salario = Number(document.querySelector('.salario').value);
    let valor = Number(document.querySelector('.valor').value)
    let calc;

    i = document.querySelector('#s').value;
    var result = document.querySelector("#result");
    if (i === 'S') {
        valor = Number(document.querySelector('.valor').value);
        calc = valor * 0.05;
        total += calc;
        cont += 1;
        i = document.querySelector('#s').value;
        result.innerHTML = (`Carros Vendidos: ${cont}. <br> Aumento de: ${(total.toLocaleString('pt-br', {style: 'currency', currency:
         'BRL'}))}. <br> Salário final: ${((salario + total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))}.`);
    }

}
function limpars() {
    var valor = document.querySelector('.valor');
    valor.value = ("");
}

function limpar() {
    var salario = document.querySelector('.salario');
    var valor = document.querySelector('.valor');
    var result = document.querySelector("#result");
    salario.value = ("");
    valor.value = ("");
    result.innerHTML = ("");
    cont = 0;
    total = 0;

}




