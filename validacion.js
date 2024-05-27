const formulario = document.querySelector("form.formcontato__form");
const nombre = document.querySelector("input.formcontato__input[name='nombre']");
const email = document.querySelector("input.formcontato__input[name='email']");
const asunto = document.querySelector("input.formcontato__input[name='asunto']");
const mensaje = document.querySelector("textarea.formcontato__textarea");
const btnEnviar = document.querySelector("button.formcontato__botao");

const errorNombre = document.querySelector("#errorNombre");
const errorEmail = document.querySelector("#errorEmail");
const errorAsunto = document.querySelector("#errorAsunto");
const errorMensaje = document.querySelector("#errorMensaje");

function validarNombre() {
  if (nombre.value.trim() === '') {
    errorNombre.textContent = 'El campo nombre no debe estar vacío.';
    return false;
  }
  if (nombre.value.length > 50) {
    errorNombre.textContent = 'El campo nombre no debe tener más de 50 caracteres.';
    return false;
  }
  errorNombre.textContent = '';
  return true;
}

function validarEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    errorEmail.textContent = 'El campo e-mail no debe estar vacío.';
    return false;
  }
  if (!emailPattern.test(email.value)) {
    errorEmail.textContent = 'El campo e-mail debe tener un formato válido.';
    return false;
  }
  errorEmail.textContent = '';
  return true;
}

function validarAsunto() {
  if (asunto.value.trim() === '') {
    errorAsunto.textContent = 'El campo asunto no debe estar vacío.';
    return false;
  }
  if (asunto.value.length > 50) {
    errorAsunto.textContent = 'El campo asunto no debe tener más de 50 caracteres.';
    return false;
  }
  errorAsunto.textContent = '';
  return true;
}

function validarMensaje() {
  if (mensaje.value.trim() === '') {
    errorMensaje.textContent = 'El campo mensaje no debe estar vacío.';
    return false;
  }
  if (mensaje.value.length > 300) {
    errorMensaje.textContent = 'El campo mensaje no debe tener más de 300 caracteres.';
    return false;
  }
  errorMensaje.textContent = '';
  return true;
}

function validarFormulario() {
  const isValidNombre = validarNombre();
  const isValidEmail = validarEmail();
  const isValidAsunto = validarAsunto();
  const isValidMensaje = validarMensaje();

  if (isValidNombre && isValidEmail && isValidAsunto && isValidMensaje) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

function resetFormulario() {
  nombre.value = '';
  email.value = '';
  asunto.value = '';
  mensaje.value = '';
  errorNombre.textContent = '';
  errorEmail.textContent = '';
  errorAsunto.textContent = '';
  errorMensaje.textContent = '';
  btnEnviar.disabled = true;
}

nombre.addEventListener('input', validarFormulario);
email.addEventListener('input', validarFormulario);
asunto.addEventListener('input', validarFormulario);
mensaje.addEventListener('input', validarFormulario);

formulario.addEventListener('submit', function (event) {
  const isValidFormulario = validarFormulario();

  if (!isValidFormulario) {
    event.preventDefault();
  }
});

btnEnviar.addEventListener('click', () => {
  alert('Mensaje enviado!');
  resetFormulario();
})