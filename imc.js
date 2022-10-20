
function imc() {
    let peso = Number(document.querySelector('.peso').value);
    let altura = Number(document.querySelector('.altura').value);
    var result = document.querySelector("#result");

    if (peso == "" || altura == "") {
        Swal.fire({
            icon: 'error',
            title: 'Atenção!!!',
            text: 'Algum campo de preenchimento está vazio!!!',

        })

    } else {

        let imc = peso / (altura ** 2);


        if (imc < 20.7) {
            result.innerHTML = (`Seu peso é: <strong>${peso.toFixed(1)} kg</strong>  <br> Sua altura é: <strong>${altura.toFixed(2)} cm</strong> <br> Seu IMC é : <strong>${imc.toFixed(1)}</strong> <br> <strong>Você está abaixo do peso.</strong>`);
        } else if (imc >= 20.7 && imc < 26.5) {
            result.innerHTML = (`Seu peso é: <strong>${peso.toFixed(1)} kg</strong>  <br> Sua altura é: <strong>${altura.toFixed(2)} cm</strong> <br> Seu IMC é : <strong>${imc.toFixed(1)}</strong> <br> <strong>Você está com peso ideal.</strong>`);
        } else if (imc >= 26.5 && imc < 27.8) {
            result.innerHTML = (`Seu peso é: <strong>${peso.toFixed(1)} kg</strong>  <br> Sua altura é: <strong>${altura.toFixed(2)} cm</strong> <br> Seu IMC é : <strong>${imc.toFixed(1)}</strong> <br> <strong>Você está um pouco acima do peso.</strong>`);
        } else if (imc >= 27.8 && imc < 31.1) {
            result.innerHTML = (`Seu peso é: <strong>${peso.toFixed(1)} kg</strong>  <br> Sua altura é: <strong>${altura.toFixed(2)} cm</strong> <br> Seu IMC é : <strong>${imc.toFixed(1)}</strong> <br> <strong>Você está acima do peso.</strong>`);
        } else {
            result.innerHTML = (`Seu peso é: <strong>${peso.toFixed(1)} kg</strong>  <br> Sua altura é: <strong>${altura.toFixed(2)} cm</strong> <br> Seu IMC é : <strong>${imc.toFixed(1)}</strong> <br> <strong>Você está obeso.</strong>`);

        }
    }
}

function tabuada() {
    let tabuada = [5];
    tabuada[0] = Number(document.querySelector("#inicio").value);
    tabuada[1] = Number(document.querySelector("#final").value);
    tabuada[3] = document.querySelector("#result");
    tabuada[2] = document.querySelector('#opera').value;


    if (tabuada[0] === 0 || tabuada[1] === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Atenção!!!',
            text: 'Algum campo de preenchimento está vazio!!!',

        })

    } else {
        tabuada[3].innerHTML = ("");
        switch (tabuada[2]) {
            case "+":

                for (i = 0; i <= tabuada[1]; i++) {
                    tabuada[4] = Number(tabuada[0] + i);
                    tabuada[3].innerHTML += (`${i} + ${tabuada[0]} = ${tabuada[4]} <br> `);
                }
                break

            case "-":
                for (i = tabuada[0]; i <= tabuada[1]; i++) {

                    tabuada[4] = i - tabuada[0];
                    tabuada[3].innerHTML += (`${i} - ${tabuada[0]} = ${tabuada[4]} <br> `);
                }
                break

            case "*":
                for (i = 0; i <= tabuada[1]; i++) {
                    tabuada[4] = i * tabuada[0];
                    tabuada[3].innerHTML += (`${i} x ${tabuada[0]} = ${tabuada[4]} <br>`);
                }
                break

            case "/":

                for (i = tabuada[0]; i <= tabuada[1]; i++) {
                    if (i % tabuada[0] == 0) {
                        tabuada[4] = i / tabuada[0];
                        tabuada[3].innerHTML += (`${i} / ${tabuada[0]} =  ${tabuada[4]}<br>`);
                    }
                }
                break


        }
    }
}

function custo() {
    var custo = document.querySelector('.custo').value;
    var porcen = document.querySelector('.porcen').value;
    var impost = document.querySelector('.impos').value;
    var result = document.querySelector('#result');

    if (custo == "" || porcen == "" || impost == "") {
        Swal.fire({
            icon: 'error',
            title: 'Atenção!!!',
            text: 'Algum campo de preenchimento está vazio!!!',
        })
    } else {
        var porce = (porcen / 100) * custo;
        var impos = (impost / 100) * custo;
        var calc = parseFloat(custo) + parseInt(porce) + parseInt(impos);
        result.innerHTML = (porce)
        result.innerHTML = (impos)
        result.innerHTML = (`Custo Final: <b> ${calc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>`);
    }
}

function reaju() {

    var salar = document.querySelector('.salar').value;
    var percen = document.querySelector('.percen').value;
    var result = document.querySelector('#result');

    if (salar == "" || percen == "") {
        Swal.fire({
            icon: 'error',
            title: 'Atenção!!!',
            text: 'Algum campo de preenchimento está vazio!!!',

        })


    } else {
        var calcu = (percen / 100) * salar;
        var reaju = parseInt(calcu) + parseInt(salar);

        result.innerHTML = (`Aumento de: <b> ${calcu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b> <br>Salário final: <b> ${reaju.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b>`);
    }
}

function eleicao() {
    var votosN = document.querySelector('.votosN').value;
    var votosB = document.querySelector('.votosB').value;
    var votosV = document.querySelector('.votosV').value;
    var result = document.querySelector('#result');
    if (votosN == "" || votosB == "" || votosV == "") {
        Swal.fire({
            icon: 'error',
            title: 'Atenção!!!',
            text: 'Algum campo de preenchimento está vazio!!!',

        })


    } else {
        var total = parseInt(votosV) + parseInt(votosN) + parseInt(votosB);
        var porceN = parseInt(votosN * 100) / total;
        var porceB = parseInt(votosB * 100) / total;
        var porceV = parseInt(votosV * 100) / total;
        result.innerHTML = (`Total: <b>${total}</b> <br> Votos válidos: <b>${porceV.toFixed(1) + '%'}</b> <br> Votos nulos: <b>${porceN.toFixed(1) + '%'}</b> <br> Votos brancos: <b>${porceB.toFixed(1) + '%'}</b>`)
    }

}

var cont = 0;
let total = 0;
function comissao() {
    let salario = Number(document.querySelector('.salario').value);
    let valor = Number(document.querySelector('.valor').value);
    let calc;
    var result = document.querySelector("#result");
    if (salario == "" || valor == "") {
        Swal.fire({
            icon: 'error',
            title: 'Atenção!!!',
            text: 'Algum campo de preenchimento está vazio!!!',

        })

    } else {
        valor = Number(document.querySelector('.valor').value);
        calc = valor * 0.05;
        total += calc;
        cont += 1;
        result.innerHTML = (`Carros Vendidos: <b>${cont}</b>. <br> Aumento de: <b> ${(total.toLocaleString('pt-br', {
            style: 'currency', currency:
                'BRL'
        }))}</b>. <br> Salário final: <b> ${((salario + total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))}</b>.`);

    }

}

function pesoideal() {
    var mascul = document.querySelector('#masculino');
    var femini = document.querySelector('#femenino');
    var altura = document.querySelector('.altura').value;
    var calcu;

    var result = document.querySelector('#result');
    if (altura == 0 || mascul == "" || femini == "") {

        Swal.fire({
            icon: 'error',
            title: 'Atenção!!!',
            text: 'Algum campo de preenchimento está vazio!!!',

        })

    }
    else if (masculino.checked == true) {
        calcu = (72.7 * altura) - 58;
        result.innerHTML = (`O peso ideal para um homem é: <b>${calcu.toFixed(2)} kg</b>`);
    } else if (femenino.checked == true) {
        calcu = (62.1 * altura) - 44.7;
        result.innerHTML = (`O peso ideal para uma mulher é: <b>${calcu.toFixed(2)} kg</b>`);
    }
}

function limpar() {
    var peso = document.querySelector('.peso');
    var altura = document.querySelector('.altura');
    var result = document.querySelector("#result");
    peso.value = ("");
    altura.value = ("");
    result.innerHTML = ("");

}

function limpar1() {
    var inicio = document.querySelector('#inicio');
    var final = document.querySelector('#final');
    var operar = document.querySelector("#opera");
    var result = document.querySelector('#result');
    inicio.value = ("");
    final.value = ("");
    operar.value = ("");
    result.innerHTML = ("");
}
function limpar2() {
    var custo = document.querySelector('.custo');
    var porcen = document.querySelector('.porcen');
    var impost = document.querySelector('.impos');
    var result = document.querySelector('#result');
    custo.value = ("");
    porcen.value = ("");
    impost.value = ("");
    result.innerHTML = ("");
}
function limpar3() {
    var salar = document.querySelector('.salar');
    var percen = document.querySelector('.percen');
    var result = document.querySelector('#result');
    salar.value = ("");
    percen.value = ("");
    result.innerHTML = ("");
}
function limpar4() {
    var votosN = document.querySelector('.votosN');
    var votosB = document.querySelector('.votosB');
    var votosV = document.querySelector('.votosV');
    var result = document.querySelector('#result');
    votosN.value = ("");
    votosB.value = ("");
    votosV.value = ("");

    result.innerHTML = ("");
}
function limpar5() {
    var custo = document.querySelector('.custo');
    var porcen = document.querySelector('.porcen');
    var impost = document.querySelector('.impos');
    var result = document.querySelector('#result');
    custo.value = ("");
    porcen.value = ("");
    impost.value = ("");
    result.innerHTML = ("");
}
function limpar6() {
    var salario = document.querySelector('.salario');
    var valor = document.querySelector('.valor');
    var result = document.querySelector("#result");
    salario.value = ("");
    valor.value = ("");
    result.innerHTML = ("");
    cont = 0;
    total = 0;

}
function limparcamp() {
    var valor = document.querySelector('.valor');
    valor.value = ("");
}
function limpar7() {
    var mascul = document.querySelector('#masculino');
    var femini = document.querySelector('#femenino');
    var altura = document.querySelector('.altura');
    mascul.checked = false;
    femini.checked = false;

    altura.value = ("");
    result.innerHTML = ("");


}