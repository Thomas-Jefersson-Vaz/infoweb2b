function radio_detector() {
    if ($('#input_radio_1').is(":checked")) {
        let b = "+";
        console.log(b);
        return (b);
    }
    if ($('#input_radio_2').is(":checked")) {
        let b = "-";
        console.log(b);
        return (b);
    }
    if ($('#input_radio_3').is(":checked")) {
        let b = "*";
        console.log(b);
        return (b);
    }
    if ($('#input_radio_4').is(":checked")) {
        let b = "/";
        console.log(b);
        return (b);
    }
}


function Calc_simples() {
    let pn = document.getElementById("input_number_1").value;
    let sn = document.getElementById("input_number_2").value;
    let s = radio_detector();
    let pni = parseInt(pn);
    let sni = parseInt(sn);
    switch (s) {
        case "+":
            mostra_simples(`${pni} + ${sni} = ${pni + sni}`);
            break;
        case "-":
            mostra_simples(`${pni} - ${sni} = ${pni - sni}`);
            break;
        case "*":
            mostra_simples(`${pni} × ${sni} = ${pni * sni}`);
            break;
        case "/":
            mostra_simples(`${pni} ÷ ${sni} = ${pni / sni}`);
            break;
        default:
            mostra_simples("Por favor coloque um sinal válido")
    }
}
function Calc_tabuada() {
    let num = document.getElementById("Calculadora_tabuada_input").value;
    let caixa = document.getElementById("caixa_tabuada").innerHTML = ""

    for (let i = 0; i <= 10; i++) {
        let c = parseInt((i * num))
        mostra_tabuada(`<br> ${i} × ${num} = ${c}`);
    }
}
function radio_detector_idade() {
    if ($('#idade_input_radio_1').is(":checked")) {
        let b = "Sim";
        return (b);
    }
    if ($('#idade_input_radio_2').is(":checked")) {
        let b = "Não";
        return (b);
    }
}
function Calc_idade() {
    let input_idade = document.getElementById("input_idade").value;
    let Data_atual = new Date();
    let ano = Data_atual.getFullYear();
    let idade = (ano - input_idade);
    let texto = radio_detector_idade();
    let idade2 = (idade - 1);
    switch (texto) {
        case "Sim":
            mostra_idade("Você tem " + idade + " anos de idade" + "<br> Parabéns atrasado");
            break;
        case "Não":
            mostra_idade("Você tem " + idade2 + " anos de idade" + "<br> Parabéns adiantado");
            break;
        default:
            mostra_idade("responda a pergunta");
            break;
    }
}

function mostra_simples(txt) {
    let a = document.getElementById("caixa_simples").innerHTML = txt;

}
function mostra_tabuada(txt) {
    let a = document.getElementById("caixa_tabuada").innerHTML += txt;

}
function mostra_idade(txt) {
    let a = document.getElementById("caixa_idade").innerHTML = txt;

}

function limpar_simples() {
    let l1 = document.getElementById("input_number_1");
    let l2 = document.getElementById("input_number_2");
    let caixa = document.getElementById("caixa_simples").innerHTML = " ";
    $(input_radio_1).prop({ checked: false });
    $(input_radio_2).prop({ checked: false });
    $(input_radio_3).prop({ checked: false });
    $(input_radio_4).prop({ checked: false });
    l1.value = "";
    l2.value = "";
    caixa.valueOf = "";
}
function limpar_tabuada() {
    let input = document.getElementById("Calculadora_tabuada_input");
    let caixa = document.getElementById("caixa_tabuada").innerHTML = " ";
    input.value = "";
    caixa.valueOf = "";
}
function limpar_idade() {
    let input = document.getElementById("input_idade");
    let caixa = document.getElementById("caixa_idade").innerHTML = " ";
    $(idade_input_radio_1).prop({ checked: false });
    $(idade_input_radio_2).prop({ checked: false });
    input.value = "";
    caixa.valueOf = "";
}