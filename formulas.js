



function Torricelli() {           // função para calcular a equação de Torricelli
    var a = document.getElementById("m/s2").value
    var v0 = document.getElementById("v0").value
    var Δx = document.getElementById("Δx").value
    document.getElementById("Resultado").innerHTML = "O resultado é: " + parseFloat(v0 ** + 2 * a * Δx) + " m/s"
};

function fma() {           // F=m.a
    var a = document.getElementById("m/s2").value
    var m = document.getElementById("m").value

    document.getElementById("solucao").innerHTML = "O resultado é:F= " + parseFloat(m * a) + " N"

};

function Trabalho() {             //W = F . Δx
    var Δx = document.getElementById("Δx").value
    var F = document.getElementById("f").value

    document.getElementById("Resultado").innerHTML = "O resultado é: W=" + parseFloat(F * Δx)


}

function kcinetica() {              // K = 1/2 . m . v²
    var m = document.getElementById("m").value
    var v = document.getElementById("vf").value
    var resultado = (1 / 2) * m * (v ** 2)
    document.getElementById("Resultado").innerHTML = "O resultado é: K=" + parseFloat(resultado) + " J"

}

// formulas dos problemas
document.getElementById("formula1").innerHTML = "v²= v²<sub>0</sub>+2aΔx"
document.getElementById("formula2").innerHTML = "F= m.a"
document.getElementById("formula3").innerHTML = "W= F.Δx"
document.getElementById("formula4").innerHTML = "K= 1/2.m.v²"
document.getElementById("formula5").innerHTML = "a = (v - v₀) / Δx"


