function gerarDesign() {

    let formato = document.getElementById("formato").value;
    let comprimento = document.getElementById("comprimento").value;
    let cor = document.getElementById("cor").value;
    let decoracao = document.getElementById("decoracao").value;

    document.getElementById("resultadoTexto").innerHTML =
    `
    <b>Formato:</b> ${formato}<br><br>
    <b>Comprimento:</b> ${comprimento}<br><br>
    <b>Cor:</b> ${cor}<br><br>
    <b>Decoração:</b> ${decoracao}
    `;
}
function enviarWhatsApp(){

let nome=document.getElementById("nome").value;

let telefone=document.getElementById("telefone").value;

let servico=document.getElementById("servico").value;

let data=document.getElementById("data").value;

let hora=document.getElementById("hora").value;

let observacao=document.getElementById("observacao").value;

let mensagem=
`Olá!

Gostaria de agendar um horário.

Nome: ${nome}

Telefone: ${telefone}

Serviço: ${servico}

Data: ${data}

Horário: ${hora}

Observações: ${observacao}`;

let url=`https://wa.me/5592991602439?text=${encodeURIComponent(mensagem)}`;

window.open(url,"_blank");

}