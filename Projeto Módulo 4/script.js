

const clientes = []

function funcaoCadastrar(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const num = document.getElementById('num').value;
    const comp = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

const cliente = {
    nome,
    email,
    tel,
    cep,
    rua,
    num,
    comp,
    bairro,
    cidade,
    estado,
    data: new Date().toLocaleDateString(),
}

clientes.push(cliente);
console.log(clientes)
mostraTabela()
contador()

}

function mostraTabela(){
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = "";
    for(let valor of clientes){
        const html = `
        <tr>
            <td>${valor.nome}</td>
            <td>${valor.email}</td>
            <td>${valor.tel}</td>
            <td>${valor.cep}</td>
            <td>${valor.rua}</td>
            <td>${valor.num}</td>
            <td>${valor.comp}</td>
            <td>${valor.bairro}</td>
            <td>${valor.cidade}</td>
            <td>${valor.estado}</td>
            <td>${valor.data}</td>
            <td id="td-botao"><button id="botao-delete" onclick="deletaLinha(this)">Deletar</button></td>
            </tr>
        `;
        tbody.innerHTML += html;
    } 
}
/*função que deleta a linha específica*/
function deletaLinha(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabela").deleteRow(i);
}
/* função de contador, pegando o lenght de tr(-1 pois o th vale por 1)*/ 
function contador(){
var tabela = document.getElementById('tabela');
var linha = tabela.getElementsByTagName('tr')
const p = document.getElementById('cadastrados').innerText = `Numero de cadastros: ${linha.length-1}` ;

console.log(p);
}
