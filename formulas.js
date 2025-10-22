



function Torricelli() {           // função para calcular a equação de Torricelli
    var a = document.getElementById("m/s2").value
    var v0 = document.getElementById("v0").value
    var Δx = document.getElementById("Δx").value
    document.getElementById("Resultado").innerHTML = "O resultado é: " + parseFloat(v0 ** + 2 * a * Δx) + " m/s"
};

function fma() {           // F=m.a
    var a = document.getElementById("m/s2").value
    var m = document.getElementById("m").value

    document.getElementById("Resultado").innerHTML = "O resultado é:F= " + parseFloat(m * a) + " N"

};

function Trabalho() {             //W = F . Δx
    var Δx = document.getElementById("Δx").value
    var F = document.getElementById("f").value

    document.getElementById("Resultado").innerHTML = "O resultado é: W=" + parseFloat(F * Δx)


}    