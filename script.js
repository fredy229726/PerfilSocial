function tocarMusica(idAudio, idBoton) {
  
  let cancion = document.getElementById(idAudio);
  let boton = document.getElementById(idBoton);

  let estabaPausada = cancion.paused;

  document.querySelectorAll('audio').forEach(el => {
    el.pause();
    // el.currentTime = 0; //
  });

  document.querySelectorAll('.boton-neon').forEach(btn => {
    btn.innerHTML = "▶️ Escuchar"; 
    btn.style.borderColor = "#00ffff"; 
    btn.style.boxShadow = "0px 0px 10px 2px #00ffff";
    btn.style.color = "#00ffff";
  });

  if (estabaPausada) {
    cancion.play(); 
    boton.innerHTML = "⏸️ Pausar"; 
    boton.style.borderColor = "#ff00ff"; 
    boton.style.boxShadow = "0px 0px 15px 5px #ff00ff";
    boton.style.color = "#ff00ff";
  }
}
