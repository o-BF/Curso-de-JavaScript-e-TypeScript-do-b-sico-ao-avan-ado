// Capturar evento de submit do formulario 
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // pegando os valores dos inputs, e armazenando em uma variavel

  const pesoData = e.target.querySelector('#peso');
  const alturaData = e.target.querySelector('#altura');

  const peso = Number(pesoData.value)
  const altura = Number(alturaData.value)

  if (!peso) {
    setResultado('Peso Inválido', false);
    return
  }
  if (!altura) {
    setResultado('Altura Inválida', false);
    return
  }
  // funçao criada logo abaixo
  const imc = getIMC(peso, altura)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);




});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0]
  }
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(1);


}



// criando um elemento dentro do html e adcionando uma classe

function criaP() {
  const p = document.createElement('p');
  return p;
}

// criando uma funçao para mostrar o resultado

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#result');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('p-result');
  } else {
    p.classList.add('bad')
  }


  p.innerHTML = msg;
  resultado.appendChild(p);
  p.classList.add('p-result')


};

// funçao para obter resultados e calcular o imc




