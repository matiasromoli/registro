const $ = (selector) => document.getElementById(selector);
const $$ = (selector) => document.querySelector(selector);
const $A = (selector) => document.querySelectorAll(selector);


document.form.addEventListener("submit", validarFormulario);


function mensajeError(input, mensaje) {
  const elements = $$(`.${input}`);
  elements.lastElementChild.innerHTML = mensaje;
}

function inputColor(input, color) {
  const elements = $$(`.${input}`);
  elements.style.borderBottom = color;
}

function icons(input, none, block) {
  const elements = $$(`.${input}`);
  elements.style.display = block;
  elements.style.display = none;
}

function validarFormulario(e) {
  e.preventDefault();
  validarCampos();
}

const validarCampos = () => {
  
  var pass = document.form.passRepeat.value.trim();
  var password = document.form.pass.value.trim();
  var user = document.form.username.value.trim();
  var email = document.form.email.value.trim();

  const validRegister = $("valid-register");

  regexemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  regexuser = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_-])[A-Za-z\d_-]{4,8}$/;
  regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!*_-]{8,16}$/;

  if (!email) {
    window.setTimeout(function () {
      document.form.email.focus();
    }, 0);
    mensajeError("email", "Este espacio no puede quedar vacío.");
    inputColor("correo", "2px solid #FA3C3C");
    icons("correo-alert", "block");
    icons("correo-check", "none");
  } else if (email.length > 50) {
    mensajeError(
      "email",
      "El email no puede contener más de cincuenta caracteres."
    );
    window.setTimeout(function () {
      document.form.email.focus();
    }, 0);
    inputColor("correo", "2px solid #FA3C3C");
    icons("correo-alert", "block");
    icons("correo-check", "none");
  } else if (!email.match(regexemail)) {
    mensajeError(
      "email",
      "No se permite la utilización de algunos caracteres."
    );
    window.setTimeout(function () {
      document.form.email.focus();
    }, 0);
    inputColor("correo", "2px solid #FA3C3C");
    icons("correo-alert", "block");
    icons("correo-check", "none");
  } else {
    inputColor("correo", "2px solid rgb(42, 211, 42)");
    icons("correo-check", "block");
    icons("correo-alert", "none");
    mensajeError("email", "");
  }

  if (!pass) {
    mensajeError("password-repeat", "Este espacio no puede quedar vacío.");
    window.setTimeout(function () {
      document.form.passRepeat.focus();
    }, 0);
    inputColor("pass-repeat", "2px solid #FA3C3C");
    icons("repeat-alert", "block");
    icons("repeat-check", "none");
  } else if (pass.length > 16) {
    mensajeError(
      "password-repeat",
      "La contraseña no puede contener más de diesiseis caracteres."
    );
    window.setTimeout(function () {
      document.form.passRepeat.focus();
    }, 0);
    inputColor("pass-repeat", "2px solid #FA3C3C");
    icons("repeat-alert", "block");
    icons("repeat-check", "none");
  } else if (!pass.match(regexpass)) {
    mensajeError(
      "password-repeat",
      "La contraseña deberá contener, al menos, una mayúscula y un número"
    );
    window.setTimeout(function () {
      document.form.passRepeat.focus();
    }, 0);
    inputColor("pass-repeat", "2px solid #FA3C3C");
    icons("repeat-alert", "block");
    icons("repeat-check", "none");
  } else if (pass !== password) {
    window.setTimeout(function () {
      document.form.passRepeat.focus();
    }, 0);
    mensajeError("password-repeat", "Las contraseñas no coinciden.");
    inputColor("pass-repeat", "2px solid #FA3C3C");
    icons("repeat-alert", "block");
    icons("repeat-check", "none");
  } else {
    inputColor("pass-repeat", "2px solid rgb(42, 211, 42)");
    mensajeError("password-repeat", "");
    icons("repeat-check", "block");
    icons("repeat-alert", "none");
  }

  if (!password) {
    window.setTimeout(function () {
      document.form.pass.focus();
    }, 0);
    mensajeError("password", "Este espacio no puede quedar vacío.");
    inputColor("pass", "2px solid #FA3C3C");
    icons("pass-alert", "block");
    icons("pass-check", "none");
  } else if (password.length > 16) {
    mensajeError(
      "password",
      "La contraseña no puede contener más de diesiseis caracteres."
    );
    window.setTimeout(function () {
      document.form.pass.focus();
    }, 0);
    inputColor("pass", "2px solid #FA3C3C");
    icons("pass-alert", "block");
    icons("pass-check", "none");
  } else if (!password.match(regexpass)) {
    mensajeError(
      "password",
      "La contraseña deberá contener, al menos, una mayúscula y un número"
    );
    window.setTimeout(function () {
      document.form.pass.focus();
    }, 0);
    inputColor("pass", "2px solid #FA3C3C");
    icons("pass-alert", "block");
    icons("pass-check", "none");
  } else {
    inputColor("pass", "2px solid rgb(42, 211, 42)");
    mensajeError("password", "");
    icons("pass-check", "block");
    icons("pass-alert", "none");
  }

  if (!user) {
    window.setTimeout(function () {
      document.form.username.focus();
    }, 0);
    mensajeError("name", "Este espacio no puede quedar vacío.");
    inputColor("username", "2px solid #FA3C3C");
    icons("username-alert", "block");
    icons("username-check", "none");
  } else if (user.length > 8) {
    mensajeError(
      "name",
      "El nombre de usuario no puede contener más de ocho caracteres."
    );
    window.setTimeout(function () {
      document.form.username.focus();
    }, 0);
    inputColor("username", "2px solid #FA3C3C");
    icons("username-alert", "block");
    icons("username-check", "none");
  } else if (user.length < 4) {
    mensajeError(
      "name",
      "El nombre de usuario no puede contener menos de cuatro caracteres."
    );
    window.setTimeout(function () {
      document.form.username.focus();
    }, 0);
    inputColor("username", "2px solid #FA3C3C");
    icons("username-alert", "block");
    icons("username-check", "none");
  } else if (!user.match(regexuser)) {
    mensajeError(
      "name",
      "El usuario deberá contener, al menos, una mayúscula, un número y un _-"
    );
    window.setTimeout(function () {
      document.form.username.focus();
    }, 0);
    inputColor("username", "2px solid #FA3C3C");
    icons("username-alert", "block");
    icons("username-check", "none");
  } else {
    inputColor("username", "2px solid rgb(42, 211, 42)");
    icons("username-check", "block");
    icons("username-alert", "none");
    mensajeError("name", "");
  }

  if (user && password && pass && email) {
    
    const verify = $A(".icon-check");
    const objects = $A("input");

    form.reset();

    verify.forEach((icons) => {
      icons.classList.add("icon-verify");
    });

    objects.forEach((object) => {
      object.style.borderBottom = "1px solid #4071ED";
    });

    validRegister.innerHTML = "¡Se ha registrado exitosamente. Gracias!";

    setTimeout(() => {
      validRegister.innerHTML = "";
    }, 5000);
  }
};
