const aluguel = [];
let tabela = document.getElementById("tabela");
let total = 0;


function cadastrar() {
    let nome = document.getElementById("inputNome").value;
    let diaria = parseFloat(document.getElementById("inputValorDiaria").value);
    let qtdDias = parseInt(document.getElementById("inputQtdDias").value);
    tabela.innerHTML = '<table class="table table-dark table-sm"><thead><tr><th scope="col">Id</th><th scope="col">Nome</th><th scope="col">Diária</th><th scope="col">Dias</th><th scope="col">Valor</th></tr></thead></table>';
    if (nome == "" || diaria == 0 || qtdDias == 0 ) {
        window.alert("Erro!!! Um ou mais campos não foi/foram preenchido/preenchidos.");
    } else {
        aluguel.push({
            nome: nome,
            diaria: diaria,
            dias: qtdDias,
        });
        
        total = 0;
        for (i = 0; i < aluguel.length; i++) {
            total += aluguel[i].diaria*aluguel[i].dias;
            tabela.innerHTML += '<table class="table table-dark table-sm"><thead><tr><th> '+(i+1)+' </th><th> '+aluguel[i].nome+' </th><th> R$ '+aluguel[i].diaria.toFixed(2)+' </th><th> '+aluguel[i].dias+' </th><th> R$ '+(aluguel[i].dias*aluguel[i].diaria).toFixed(2)+' </th></tr></thead></table>';
        }
        tabela.innerHTML += '<table class="table table-dark table-sm"><thead><tr><th> -- </th><th> Total </th><th> ------ </th><th> ------ </th><th> R$ '+total.toFixed(2)+' </th></tr></thead></table>';
        event.preventDefault();
    }
}

function remover() {
    aluguel.pop();
    tabela.innerHTML = '<table class="table table-dark table-sm"><thead><tr><th scope="col">Id</th><th scope="col">Nome</th><th scope="col">Diária</th><th scope="col">Dias</th><th scope="col">Valor</th></tr></thead></table>';
    total = 0;
    for (i = 0; i < aluguel.length; i++) {
        total += aluguel[i].diaria*aluguel[i].dias;
        tabela.innerHTML += '<table class="table table-dark table-sm"><thead><tr><th> '+(i+1)+' </th><th> '+aluguel[i].nome+' </th><th> R$ '+aluguel[i].diaria.toFixed(2)+' </th><th> '+aluguel[i].dias+' </th><th> R$ '+(aluguel[i].dias*aluguel[i].diaria).toFixed(2)+' </th></tr></thead></table>';
    }
    tabela.innerHTML += '<table class="table table-dark table-sm"><thead><tr><th> -- </th><th> Total </th><th> ------ </th><th> ------ </th><th> R$ '+total.toFixed(2)+' </th></tr></thead></table>';
    event.preventDefault();
}