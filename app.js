// Obtener referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const botonSortear = document.getElementById('sortearAmigo');

// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  // Agregar el nombre a la lista y al arreglo de amigos
  const lista = document.createElement('li');
  lista.textContent = nombre;
  listaAmigos.appendChild(lista);
  amigos.push(nombre);
  console.log(amigos);


  // Limpiar el campo de entrada
  inputAmigo.value = '';
}

// Función para realizar el sorteo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos en la lista.');
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre del amigo secreto
  const amigoSecreto = amigos[indiceAleatorio];

  // Mostrar el resultado
  resultado.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
}
