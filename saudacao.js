var today = new Date();
var horaAtual = today.getHours();
var greeeting;

if(horaAtual > 18) {
    greeeting =  'Boa Noite!';
} else if(horaAtual > 12){
    greeeting =  'Boa Tarde!';
} else if(horaAtual > 0){
    greeeting ='Bom dia!';
} else {
    greeeting = 'Bem-Vindo!'
}

document.write('<h3>' + greeeting + '<h3>');