let form = document.querySelector('.form--sla');
let check = document.querySelector('.form--checklist');
var teste = 5

function changeForm() {
    if (form.programa.disabled == true) {
        form.programa.disabled = false
    } else {
        form.programa.disabled = true
    }
}

function gerarSla() {
    sla = `
Qual posição ocupa atualmente?
R: ${form.cargo.value}
Qual o faturamento anual do lead?
R: ${form.faturamento.value}
Como conheceu o G4 Educação?
R: ${form.conhecia.value}
Já foi aluno de algum programa do G4 Educação?
R: ${form.alumni.value} ${form.programa.value}
Qual é o produto/serviço do lead?
R: ${form.produto.value}
Como vende o produto/serviço?
R: ${form.canal.value}
Qual é o perfil de cliente da empresa?
R: ${form.cliente.value}
Qual é o principal desafio da empresa?
R: ${form.desafio.value}
Observações extras:
R: ${form.obs.value}
Deu duas opções de data e horário para o lead em no máximo 48h?
R: Sim
O lead concordou em participar da reunião por videoconferência?
R: ${form.video.value}`;
    console.log(sla)
    navigator.clipboard.writeText(sla);
}

function resetForm() {
    form.reset();
    check.reset();
}