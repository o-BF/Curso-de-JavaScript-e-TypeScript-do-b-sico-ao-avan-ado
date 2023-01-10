let numero1 = prompt('Digite um Numero');
let numeroPrincipal = document.getElementById('numero-t');
let texto1 = document.getElementById('texto');


numero1 = Number(numero1);


numeroPrincipal.innerHTML = numero1;
texto.innerHTML += `<p>A raiz quadrada do seu numero é: ${numero1 ** 0.5} </p>`;
texto.innerHTML += `<p>${numero1} é inteiro: ${Number.isInteger(numero1)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero1)} </p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero1)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero1)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero1.toFixed(2)}`
