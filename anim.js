// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Wise men say", time: 7 },
  { text: "Only fools rush in", time: 14 },
  { text: "But I can't help", time: 27 },
  { text: "falling in love with you", time: 28 },
  { text: "Shall I stay?", time: 36 },
  { text: "Would it be a sin", time: 43 },
  { text: "If I can't help", time: 51 },
  { text: "falling in love with you?", time: 56 },
  { text: "Like a river flows", time: 65 },
  { text: "Surely to the sea", time: 68 },
  { text: "Darling, so it goes", time: 72 },
  { text: "Some things are meant to be", time: 76 },
  { text: "Take my hand", time: 83 },
  { text: "Take my whole life, too", time: 89 },
  { text: "For I can't help", time: 97 },
  { text: "falling in love with you", time: 103 },
  { text: "Like a river flows", time: 111 },
  { text: "Surely to the sea", time: 115 },
  { text: "Darling, so it goes", time: 119 },
  { text: "Some things are meant to be", time: 123 },
  { text: "Take my hand", time: 129 },
  { text: "Take my whole life, too", time: 135 },
  { text: "For I can't help", time: 143 },
  { text: "falling in love with you", time: 148 },
  { text: "For I can't help", time: 158 },
  { text: "falling in love with you", time: 163 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 1;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);