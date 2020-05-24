//pagina funcionarios


const siteClock = () =>{
    let clock = document.getElementById('relogio')
    let hoje = new Date()
    let hour = hoje.getHours()
    let minutes = hoje.getMinutes()
    let seconds = hoje.getSeconds()

    if(hour < 10){
        hour = '0' + hour
    }
    if(minutes < 10){
        minutes = '0' + minutes
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }

    clock.textContent = hour + ':' + minutes + ':' + seconds

}

setInterval(siteClock, 1000)


const raiz = document.getElementById('lista');

fetch('/funcionarios') 
.then(res => {return res.json();})
.then(data => {
    data.funcionarios.forEach(element => {
        var linha = document.createElement('tr');
        raiz.appendChild(linha);

        var funcionario = document.createElement('td');
        funcionario.textContent = element.nome_usuario;
        linha.appendChild(funcionario);

        var hora = document.createElement('td');
        hora.textContent = element.hora;
        linha.appendChild(hora);
    });
})
.catch( err => {
    console.log('Ocorreu um problema.');
})
.finally(() =>{
    console.log('Linha que sempre aparece no final');
})



//pagina contatos
const app = document.getElementById('raiz')

const caixa = document.createElement('div')

caixa.setAttribute('class', 'caixa')

app.appendChild(caixa)




for(var i = 0; i < 10; i++){
    var c = document.createElement('div');
    c.setAttribute('class','artigos')
    caixa.appendChild(c)

    var t = document.createElement('h3')
    t.textContent = 'Curso ' + (i+1)

    c.appendChild(t)

    var p = document.createElement('p')
    p.textContent = 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa.'
    c.appendChild(p)
}

console.log(typeof(document))


