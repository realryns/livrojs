function mostrar() {
    var nome1 = document.getElementById("nome")
    document.getElementById('resposta').innerHTML = `Olá, ${nome1}`
}
var mostrar1 = document.getElementById('mostrar');
mostrar1.onclick = mostrar;
