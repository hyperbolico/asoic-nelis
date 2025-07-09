document.addEventListener('DOMContentLoaded', () => {
  const textLines = Array.from(document.querySelectorAll('.text-line'));
  const appearanceOrder = textLines.map(line => line.getAttribute('data-line'));
  let currentIndex = 0;
  let activeLine = null;

  function showNextLine() {
    // Ocultar línea anterior si existe
    if (activeLine) {
      activeLine.classList.remove('active');
      activeLine.classList.add('fading-out');
    }

    // Obtener el siguiente ID de línea a mostrar
    const lineId = appearanceOrder[currentIndex % appearanceOrder.length];
    const nextLine = document.querySelector(`.text-line[data-line="${lineId}"]`);

    if (nextLine) {
      nextLine.classList.add('active');
      nextLine.classList.remove('fading-out');
      activeLine = nextLine;
    }

    // Avanzar al siguiente
    currentIndex++;

    // Continuar el ciclo
    setTimeout(showNextLine, 3500);
  }

  // Iniciar la secuencia de texto
  setTimeout(showNextLine, 1000);

  // Intentar reproducir audio
  const audio = document.querySelector('audio');
  audio.play().catch(e => {
    console.log('Audio playback prevented. User gesture needed.');
  });
});
