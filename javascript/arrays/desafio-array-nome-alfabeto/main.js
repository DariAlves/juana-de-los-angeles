// ! Dado a seguinte constante faça o que se pede:
const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// ! Transformar a constante alfabeto em um array.
const alfabetoArray = alfabeto.split('');

// + Teste
// console.log(alfabetoArray);

// ! Crie uma função que receba um array contendo os números das letras do seu nome e retorne-o em letras minúsculas.

// ! Use a tabela de referência (abaixo) para ajudá-lo nesse processo.

// ! Dica: Acredite no coração do código! ❤️

// Declaro a função
const mostrarNome = arrayNumLetras => {
  let nomeCompleto = '';

  arrayNumLetras.forEach(numero => {
    nomeCompleto += alfabetoArray[numero - 1];
  });

  return `Meu nome é ${nomeCompleto.toLowerCase()}`;
};

const arrayNumeroLetrasNome = [4, 1, 18, 9]; // Exemplo do resultado esperado: Dari

// Usar função
console.log(mostrarNome(arrayNumeroLetrasNome));

// ! Tabela de referência
// [
//   1 - a,
//   2 - b,
//   3 - c,
//   4 - d,
//   5 - e,
//   6 - f,
//   7 - g,
//   8 - h,
//   9 - i,
//   10 - j,
//   11 - k,
//   12 - l,
//   13 - m,
//   14 - n,
//   15 - o,
//   16 - p,
//   17 - q,
//   18 - r,
//   19 - s,
//   20 - t,
//   21 - u,
//   22 - v,
//   23 - w,
//   24 - x,
//   25 - y,
//   26 - z,
// ];
