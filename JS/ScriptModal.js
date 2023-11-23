    document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('openModalBtn');
  var span = document.getElementsByClassName('close')[0];

  btn.onclick = function () {
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Aquí puedes agregar lógica para enviar el formulario, por ejemplo, mediante una petición AJAX.
  var form = document.getElementById('myForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario.
    // Por ejemplo, podrías usar AJAX para enviar los datos a un servidor.
    // Luego, puedes cerrar la ventana modal si es necesario.
    modal.style.display = 'none';
  });
});
