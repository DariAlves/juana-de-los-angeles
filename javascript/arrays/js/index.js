const usuarios = [
  {
    id: 1,
    nome: 'goku',
  },
  {
    id: 2,
    nome: 'vegeta',
  },
  {
    id: 3,
    nome: 'trunks',
  },
];

/* Loops array */
console.log('for');
for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i]);
}

console.log('\n');
console.log('for...of');
for (const usuario of usuarios) {
  console.log(usuario);
}

console.log('\n');
console.log('for...in');
for (const propriedade in usuarios) {
  console.log(usuarios[propriedade]);
}

console.log('\n');
console.log('forEach');
usuarios.forEach(usuario => console.log(usuario));

console.log('\n');
console.log('Método find');
const findUsuario = usuarios.find(usuario => usuario.id === 1);

console.log(findUsuario);

console.log('\n');
console.log('Método findIndex');

const indexUsuario = usuarios.findIndex(usuario => usuario.id === 1);

console.log(indexUsuario);

console.log(usuarios[indexUsuario]);
