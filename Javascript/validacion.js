function validarCedula() {
  var cad = document.getElementById("cedula").value;
  var total = 0;
  var longitud = cad.length;
  if (cad !== "" && longitud === 10) {
    for (i = 0; i < longitud - 1; i++) {
      if (i % 2 === 0) {
        var aux = cad.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cad.charAt(i));
      }
    }
    total = total % 10 ? 10 - total % 10 : 0;
    var aux = cad.charAt(9);
    if (cad.charAt(9) == total) {
      document.getElementById("mensajeCedula").innerText = 'La cedula es correcta';
      cedula.style.borderColor = "blue";
    } else {
      document.getElementById("mensajeCedula").innerHTML = 'La cedula es incorrecta';
      cedula.style.borderColor = "red";
    }

  } else {
    document.getElementById("mensajeCedula").innerHTML = 'La cedula se esta typiando';
  }
}

function soloNumeros(e, c) {
  var key = window.Event ? e.which : e.keyCode
  return ((key >= 48) && (key <= 57) && (c.length + 1 <= 10) || (key == 8))
}

function soloLetras(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = "8-37-39-46";

  tecla_especial = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}

function dosNombres(txt, id) {
  palabras = txt.split(' ');
  if (palabras.length == 2) {
    p1 = palabras[0].trim();
    p2 = palabras[1].trim();
    if (p1 != '' && p2.length >= 2) {
      document.getElementById(id).innerHTML = ('cumple');
      nombres.style.borderColor = "blue";
      apellidos.style.borderColor = "blue";
    } else {
      document.getElementById(id).innerHTML = ('no valido');
      nombres.style.borderColor = "red";
      apellidos.style.borderColor = "red";
    }
  } else {
    document.getElementById(id).innerHTML = ('no valido');
    nombres.style.borderColor = "red";
    apellidos.style.borderColor = "red";
  }
}

function numeroTelefono(e) {
  var keynum = window.event ? window.event.keyCode : e.which;
  if ((keynum < 48) || (keynum > 57)) {
    document.getElementById("mensajeTelefono").innerHTML = ("Ingrese solo numeros ");
    telefono.style.borderColor = "red";
    return true;
  } else {
    Mensaje = 'Telefono';
    document.getElementById('mensajeTelefono').innerText = 'valido';
    telefono.style.borderColor = "blue";
  }
}

function validarFecha() {
  var Fecha = document.getElementById('fechaNacimiento').value;
  var Mensaje = '';
  document.getElementById('mensajeFecha').className = '';
  if (Fecha.length == 10) {
    fe = Fecha.split('/');
    var Anio = fe[2];
    var Mes = fe[1] - 1;
    var Dia = fe[0];
    var VFecha = new Date(Anio, Mes, Dia);
    if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
      Mensaje = 'Fecha correcta';
      document.getElementById('mensajeFecha').innerHTML = 'Fecha correcta';
      fechaNacimiento.style.borderColor = "blue";
    }
    else {
      Mensaje = 'Fecha incorrecta';
      document.getElementById('mensajeFecha').innerText = 'no valido';
      fechaNacimiento.style.borderColor = "red";
    }
  }
  document.getElementById('mensajeFecha').innerHTML = Mensaje;
}

function validarCorreo(txt) {
  f = txt.split('@');
  if (f.length >= 2) {
    if (f[0].length >= 1) {
      if (f[1] == 'ups.edu.ec' || f[1] == 'est.ups.edu.ec') {
        document.getElementById("mensajeCorreo").innerHTML = 'Correo correcto';
        correo.style.borderColor = "blue";
      } else {
        document.getElementById("mensajeCorreo").innerHTML = 'no valido';
        correo.style.borderColor = "red";
      }
    } else {
      document.getElementById("mensajeCorreo").innerHTML = 'no valido';
      correo.style.borderColor = "red";
    }
  } else {
    document.getElementById("mensajeCorreo").innerHTML = 'no valido';
    correo.style.borderColor = "red";
  }
}

function validarCamposObligatorios() {
  var bandera = true
  for (var i = 0; i < document.forms[0].elements.length; i++) {
    var elemento = document.forms[0].elements[i]
    if (elemento.value == '' && elemento.type == 'text') {
      if (elemento.id == 'cedula') {
        document.getElementById('mensajeCedula').innerHTML = '<br> La cedula no esta ingresada'
      }
      elemento.style.border = '1px red solid'
      bandera = false
    }
  }
  if (!bandera) {
    alert('Ingrese bien los datos')
  }
  return bandera
}

function validarTodo() {
  var bandera = true;
  if (!document.getElementById('mensajeCedula')) {
    var capa = document.getElementById('cedula');
    capa.style.border = "4px outset  red";
    bandera = false;
  }

  if (!document.getElementById('mensajeNombres')) {
    var capa = document.getElementById('nombres');
    capa.style.border = "4px outset  red";
    bandera = false;
  }
  if (!document.getElementById('mensajeApellidos')) {
    var capa = document.getElementById('apellidos');
    capa.style.border = "4px outset  red";
    bandera = false;
  }
  if (!document.getElementById('mensajeDireccion')) {
    var capa = document.getElementById('direccion');
    capa.style.border = "4px outset  red";
    bandera = false;
  }
  if (!document.getElementById('mensajeTelefono')) {
    var capa = document.getElementById('telefono');
    capa.style.border = "4px outset  red";
    bandera = false;
  }
  if (!document.getElementById('mensajeFecha')) {
    var capa = document.getElementById('fechaNacimiento');
    capa.style.border = "4px outset  red";
    bandera = false;
  }
  if (!document.getElementById('mensajeCorreo')) {
    var capa = document.getElementById('correo');
    capa.style.border = "4px outset  red";
    bandera = false;
  }
  return bandera;
}