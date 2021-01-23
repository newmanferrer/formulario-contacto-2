/* ================================================================================================ */
// 1.- Importaciones
/* ================================================================================================ */
import validate from './validate.js';
/* FIN Importaciones ============================================================================== */

/* ================================================================================================ */
// 2.- Declaraciones de constantes, variables y localización de elementos del HTML
/* ================================================================================================ */
const d = document;
const $formulario = d.getElementById('formulario');
const $messageContainer = d.getElementById('message-container');
/* FIN Declaraciones ============================================================================== */

/* ================================================================================================ */
// 3.- Código principal y eventos de escucha
/* ================================================================================================ */
$formulario.name.focus();

$formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!event.target.matches('#formulario')) return false;

  $messageContainer.classList.add('none');  
  const name = event.target.name.value;
  const phone = event.target.phone.value;
  const email = event.target.email.value;
  const subjet = event.target.subjet.value;
  const message = event.target.message.value;
  let userMessage = '';

  if (validate.validateEmptyField(name) || validate.validateEmptyField(phone) || validate.validateEmptyField(email) || validate.validateEmptyField(subjet) || validate.validateEmptyField(message)) {
    userMessage = `
      <p>Todos los campos son obligatorios</p>
    `;
  } else if (!validate.validateName(name)) {
    $formulario.name.focus();
    userMessage = `
      <p>Full Name Invalid</p>
    `;
  } else if (!validate.validatePhoneNumber(phone)) {
    $formulario.phone.focus();
    userMessage = `
      <p>Phone Invalid</p>
    `;
  } else if (!validate.validateEmail(email)) {
    $formulario.email.focus();
    userMessage = `
      <p>Email Invalid</p>
    `;
  } else if (!validate.validateSubjet(subjet)) {
    $formulario.subjet.focus();
    userMessage = `
      <p>Subjet Invalid</p>
    `;
  } else if (!validate.validateMessage(message)) {
    $formulario.message.focus();
    userMessage = `
      <p>Message Invalid</p>
    `;
  }

  if (userMessage !== '') {
    $messageContainer.classList.remove('none');
    $messageContainer.innerHTML = userMessage;
  } else {
    $formulario.reset();

    setTimeout(() => {
      alert('Datos enviados...')
    }, 2000);
  }
});
/* FIN Código principal =========================================================================== */
