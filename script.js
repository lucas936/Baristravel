/* -------- Contador de caracteres Text Area -------- */
document.getElementById('textarea').onkeyup = function () {
    document.getElementById('char_count').innerHTML = "Characters left: " + (280 - this.value.length);
  };
  