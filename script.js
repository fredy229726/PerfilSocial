// Creamos la función que pusimos en el onclick del botón
function tocarMusica(idAudio, idBoton) {
  
  // 1. Buscamos la canción y el botón exactos que el usuario hizo clic
  let cancion = document.getElementById(idAudio);
  let boton = document.getElementById(idBoton);

  // 2. Guardamos su estado actual ANTES de apagar todo
  let estabaPausada = cancion.paused;

  // --- MODO DICTADOR: APAGAMOS TODO ---
  // Buscamos todos los <audio> de la página y los pausamos
  document.querySelectorAll('audio').forEach(el => {
    el.pause();
    // el.currentTime = 0; // Quítale las diagonales a esta línea si quieres que las canciones se reinicien desde cero al cambiar de pista
  });

  // Buscamos todos los botones y les regresamos su estilo y texto original
  document.querySelectorAll('.boton-neon').forEach(btn => {
    btn.innerHTML = "▶️ Escuchar"; 
    btn.style.borderColor = "#00ffff"; 
    btn.style.boxShadow = "0px 0px 10px 2px #00ffff";
    btn.style.color = "#00ffff";
  });
  // ------------------------------------

  // 3. LA LÓGICA FINAL
  // Si la canción que tocamos ESTABA pausada, la encendemos.
  // (Si ya estaba sonando, simplemente se quedó apagada con el código de arriba y listo).
  if (estabaPausada) {
    cancion.play(); 
    boton.innerHTML = "⏸️ Pausar"; 
    boton.style.borderColor = "#ff00ff"; 
    boton.style.boxShadow = "0px 0px 15px 5px #ff00ff";
    boton.style.color = "#ff00ff";
  }
}