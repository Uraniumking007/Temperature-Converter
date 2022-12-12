
function temperatureF(far) {
  var a = (far - 32) / 1.8;
  var k = a + 273;
  document.getElementById('Celcius').value = a.toFixed(2);
  document.getElementById('kelvin').value = k.toFixed(2);
}

function temperatureC(cel) {
  var d = cel;
  document.getElementById('Fahrenheit').value = (cel * 1.8 + 32).toFixed(2);
  document.getElementById('kelvin').value = (d + 273.15).toFixed(2);
}
function temperatureK(kel) {
  var n = (kel - 273.15) * 1.8 + 32;
  var m = kel - 273.15;
  document.getElementById('Fahrenheit').value = n.toFixed(2);
  document.getElementById('Celcius').value = m.toFixed(2);
}
