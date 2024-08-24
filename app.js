function encriptarTexto() {
  const texto = document.getElementById('inputText').value;
  let textoEncriptado = texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');

  document.getElementById('outputText').textContent = textoEncriptado;
}

function mostrarTextoEncriptado () {
  const inicio = document.getElementById("output-inicial");
  const final = document.getElementById("output-final");

  inicio.style.display = "none";
  final.style.display = "block";
}

function desencriptarTexto() {
  const texto = document.getElementById("inputText").value;
  let textoDesencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  document.getElementById("outputText").innerText = textoDesencriptado;
}


function copiarTexto() {
  const texto = document.getElementById('outputText').textContent;
  
  navigator.clipboard.writeText(texto).then(() => {
      alert('Texto copiado al portapapeles');
  }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
      alert('No se pudo copiar el texto. Asegúrate de que el sitio tenga permiso para acceder al portapapeles.');
  });
}