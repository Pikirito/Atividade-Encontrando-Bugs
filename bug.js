//Exercicio 1
function calculaIMC(peso, altura) {
  let alturaAoQuadrado = altura * altura;
  let imc = peso / alturaAoQuadrado;
  return imc
}
console.log(calculaIMC(80,1.80))
//Ao receber 80 para o peso e 1.80 para altura, a função deve retornar 24.691358024691358


//Exercicio 2 
function calculaIdade(nome, anoFuturo, anoNascimento) {
    let idade = anoFuturo - anoNascimento;
    return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
  }
  console.log(calculaIdade("Pedro",2030,2002))
  //Ao receber os parâmetros: ("Pedro", 2002, 2030) a função deve retornar "Em 2030 Pedro terá 28 anos de idade".


//Exercicio 3 
function algarismosEmUmNumero(n) {
    let str = `${n}`;
    let contagem = str.length;
  
    if (n != parseInt(n)) {
      contagem = contagem - 1;
    }
  
    return contagem;
  }
  console.log(algarismosEmUmNumero(3.14159265))
  //Ao receber 3.14159265 a função deve retornar 9.


//Exercicio 4 
function diaDaSemana(n) {
    let resultado = '';
  
    if (n === '1') {
      resultado += 'Domingo';
    } else if(n == 2 ) {
      resultado += 'Segunda-feira';
    } else if(n == 3) {
      resultado += 'Terça-feira';
    } else if(n == 4) {
      resultado += 'Quarta-feira';
    } else if(n == 5) {
      resultado += 'Quinta-feira';
    } else if(n ==  6 ) {
      resultado += 'Sexta-feira'; 
    } else if(n == 7) {
      resultado = 'Sábado';
    } else if (n == 0) {
      resultado += 'Valor Inválido';
    }
  
    return resultado;
  }
  console.log(diaDaSemana(4))
  
  //Ao receber '1' a função deve retornar 'Domingo'
  //Ao receber 3 a função deve retornar 'Terça-feira'
  //Ao receber 0 a função deve retornar 'Valor Inválido'