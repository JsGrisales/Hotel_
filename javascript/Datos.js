$(document).ready(function () {
  $("#enviar").on("click", verificarData);
});

function verificarData() {
  var nombre = $("#nombre").val();
  var email = $("#email").val();
  var comentario = $("#comentario").val();
  var tel = $("#tel").val();
  var contador = 0;

  if (nombre != "") {
    $("#nombre").removeClass("error");
    $("#nombre").addClass("ok");
    contador++;
  } else {
    $("#nombre").focus();
    $("#nombre").addClass("error");
  }
  if (email != "") {
    $("#email").removeClass("error");
    $("#email").addClass("ok");
    contador++;
  } else {
    $("#email").focus();
    $("#email").addClass("error");
  }
  if (tel != "") {
    $("#tel").removeClass("error");
    $("#tel").addClass("ok");
    contador++;
  } else {
    $("#tel").focus();
    $("#tel").addClass("error");
  }
  if (comentario != "") {
    $("#comentario").removeClass("error");
    $("#comentario").addClass("ok");
    contador++;
  } else {
    $("#comentario").focus();
    $("#comentario").addClass("error");
  }
  enviarData(contador, nombre, email, comentario, tel);
}

function enviarData(contador, nombre, email, comentario, tel) {
  if (contador === 4) {
    var dataP = {
      nombre: nombre,
      email: email,
      comentario: comentario,
      tel: tel,
    };
    $.ajax({
      data: dataP,
      url: "./php/index.php",
      type: "post",
      beforeSend: function () {
        console.log("enviando...");
      },
      success: function (responde) {
        alert(responde);
      },
    });
  } else {
    alert("Por favor verifique que todos los campos estén llenos");
  }
}
