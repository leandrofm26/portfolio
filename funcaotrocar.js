function TrocarProblema() {
    var r_text = new Array();


    r_text[0] = "🚗 Um carro de <span id='massa'>1000</span> kg parte do repouso e atinge <span id='vFinal'>20</span> m/s após percorrer <span id='distancia'>100</span> m. Calcule a aceleração e o tempo necessário para atingir essa velocidade.";
    r_text[1] = "🏍️ Uma moto de <span id='massa'>200</span> kg acelera de <span id='vInicial'>0</span> m/s a <span id='vFinal'>25</span> m/s em <span id='tempo'>5</span> s. Determine a aceleração e a força resultante sobre ela.";
    r_text[2] = "🚚 Um caminhão de <span id='massa'>3000</span> kg desce uma ladeira com aceleração constante de <span id='aceleracao'>2</span> m/s². Calcule a força resultante que atua sobre o caminhão.";
    r_text[3] = "🏃‍♂️ Um atleta parte do repouso e atinge <span id='vFinal'>10</span> m/s em <span id='tempo'>4</span> s. Qual é a aceleração média e a distância percorrida nesse intervalo?";
    r_text[4] = "🎢 Um carrinho de montanha-russa com <span id='massa'>500</span> kg desce uma rampa de <span id='altura'>15</span> m. Desprezando o atrito, determine sua velocidade ao final da descida.";
    r_text[5] = "🚴 Uma bicicleta de <span id='massa'>80</span> kg (com ciclista) está a <span id='vInicial'>10</span> m/s e freia uniformemente até parar em <span id='tempo'>5</span> s. Calcule a desaceleração e a distância de frenagem.";
    r_text[6] = "🚤 Um jet ski de <span id='massa'>400</span> kg parte do repouso e atinge <span id='vFinal'>16</span> m/s em <span id='tempo'>8</span> s. Determine a força média do motor durante a aceleração.";
    r_text[7] = "🚀 Um foguete de <span id='massa'>1500</span> kg é lançado verticalmente com aceleração constante de <span id='aceleracao'>15</span> m/s². Qual é a força resultante sobre ele no instante da decolagem?";
    r_text[8] = "🚗 Um carro de <span id='massa'>900</span> kg percorre <span id='distancia'>50</span> m com aceleração constante de <span id='aceleracao'>3</span> m/s². Calcule a velocidade final e o tempo gasto.";
    r_text[9] = "⚽ Uma bola de <span id='massa'>0.5</span> kg é chutada e sai do pé do jogador a <span id='vInicial'>20</span> m/s. Qual é a energia cinética da bola nesse instante?";
    r_text[10] = "🎯 Um projétil de <span id='massa'>0.02</span> kg é disparado a <span id='vInicial'>200</span> m/s. Determine sua energia cinética e o trabalho realizado pela arma.";
    r_text[11] = "🏗️ Um guindaste levanta uma carga de <span id='massa'>800</span> kg até uma altura de <span id='altura'>12</span> m. Qual foi o trabalho realizado pela força de elevação?";
    r_text[12] = "💡 Um motor elétrico realiza um trabalho de <span id='trabalho'>6000</span> J em <span id='tempo'>10</span> s. Determine sua potência em watts e em cavalos-vapor (1 CV = 735 W).";
    r_text[13] = "🚲 Uma bicicleta de <span id='massa'>60</span> kg (com ciclista) desce uma rampa com velocidade inicial de <span id='vInicial'>5</span> m/s e final de <span id='vFinal'>15</span> m/s. Determine o trabalho realizado pela força resultante.";
    r_text[14] = "🚙 Um carro de <span id='massa'>1200</span> kg freia uniformemente de <span id='vInicial'>25</span> m/s até parar em <span id='tempo'>8</span> s. Calcule a desaceleração e a força de frenagem.";
    r_text[15] = "🏀 Uma bola é lançada verticalmente para cima com velocidade inicial de <span id='vInicial'>20</span> m/s. Calcule a altura máxima atingida e o tempo até ela parar momentaneamente.";
    r_text[16] = "🚄 Um trem de <span id='massa'>10000</span> kg parte do repouso e percorre <span id='distancia'>500</span> m com aceleração constante até atingir <span id='vFinal'>30</span> m/s. Determine a aceleração e o tempo gasto.";
    r_text[17] = "🧲 Uma força de <span id='forca'>40</span> N é aplicada sobre um corpo de <span id='massa'>5</span> kg. Determine a aceleração e a velocidade após <span id='tempo'>6</span> s de aplicação da força.";
    r_text[18] = "🏋️ Um atleta aplica uma força de <span id='forca'>200</span> N para empurrar um trenó de <span id='massa'>50</span> kg. Sabendo que há atrito de <span id='atrito'>20</span> N, determine a aceleração resultante.";
    r_text[19] = "🚣‍♂️ Um barco de <span id='massa'>300</span> kg acelera de <span id='vInicial'>0</span> m/s a <span id='vFinal'>12</span> m/s em <span id='tempo'>4</span> s. Calcule a força média exercida pelo motor do barco.";
    var i = Math.floor(Math.random() * r_text.length);
    document.getElementById("problema").innerHTML = "<p>" + r_text[i] + "</p>";



}



//função que muda os valores dos problemas
function carregarValores() {

    var massa = document.getElementById("massa").innerHTML = (Math.random() * 1000).toFixed(0);
    document.getElementById("vInicial").innerHTML = (Math.random() * 30).toFixed(0);
    document.getElementById("vFinal").innerHTML = (Math.random() * 30 + 10).toFixed(0);
    document.getElementById("distancia").innerHTML = (Math.random() * 500).toFixed(0);
    document.getElementById("tempo").innerHTML = (Math.random() * 10 + 1).toFixed(0);
    var aceleracao = document.getElementById("aceleracao").innerHTML = (Math.random() * 5 + 1).toFixed(0);
    document.getElementById("altura").innerHTML = (Math.random() * 20 + 5).toFixed(0);
    document.getElementById("forca").innerHTML = (Math.random() * 100 + 10).toFixed(0);
    document.getElementById("atrito").innerHTML = (Math.random() * 50 + 5).toFixed(0);
    document.getElementById("trabalho").innerHTML = (Math.random() * 10000 + 1000).toFixed(0);

}

function teste() {

    document.getElementById("problema").innerHTML = fma()
}