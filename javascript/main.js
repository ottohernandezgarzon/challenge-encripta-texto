const $texto = document.querySelector("#texto");
const $response = document.querySelector(".response > p")
const $textWarning = document.querySelector(".text__warning")
const $btnCopiar = document.createElement("button")
$btnCopiar.textContent = "Copiar"
$btnCopiar.classList.add(".btn__copiar")

/* -------------------------- funciones expresadas -------------------------- */
const validar = () => {
  let validarTexto = $texto.value
  const vacíosLineales = validarTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
  if (!validarTexto != "") return $textWarning.textContent = "No puede estar vació";
  if (validarTexto !== vacíosLineales) return $textWarning.textContent = "El texto no debe tener acentos, ni caracteres especiales "
  if (validarTexto !== validarTexto.toLowerCase()) return $textWarning.textContent = "El texto debe esta solo en minúsculas "
}

/* -------------------------- funciones declarativas ------------------------- */
function encrypt() {
  validar()
  let valorTexto = $texto.value;
  const vacíosLineales = valorTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
  if (valorTexto == "") return $response.textContent;
  if (valorTexto !== vacíosLineales) return $response.textContent;
  if (valorTexto !== valorTexto.toLowerCase()) return $response.textContent;
  valorTexto = valorTexto.replace(/e/mg, "enter")
  valorTexto = valorTexto.replace(/i/mg, "imes")
  valorTexto = valorTexto.replace(/a/mg, "ai")
  valorTexto = valorTexto.replace(/o/mg, "ober")
  valorTexto = valorTexto.replace(/u/mg, "ufat")
  $response.textContent = valorTexto
}

function decrypt() {
  validar()
  let valorTexto = $texto.value;
  const vacíosLineales = valorTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
  if (valorTexto == "") return $response.textContent;
  if (valorTexto !== vacíosLineales) return $response.textContent;
  if (valorTexto !== valorTexto.toLowerCase()) return $response.textContent; valorTexto = valorTexto.replace(/enter/mg, "e")
  valorTexto = valorTexto.replace(/imes/mg, "i")
  valorTexto = valorTexto.replace(/ai/mg, "a")
  valorTexto = valorTexto.replace(/ober/mg, "o")
  valorTexto = valorTexto.replace(/ufat/mg, "u")
  $response.textContent = valorTexto
  $response.insertAdjacentHTML("beforeend", $btnCopiar)
};

/* -------------------------------- eventos -------------------------------- */
$btnCopiar.addEventListener("click", e => {
  e.preventDefault()
  e.target.value = $response.textContent
})