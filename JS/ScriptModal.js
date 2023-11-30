    document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('openModalBtn');
  var span = document.getElementsByClassName('close')[0];
  var modal2 = document.getElementById('modalDetalle');
  var span2 = document.getElementsByClassName('close')[1];
  const tablaCotizacionBody = document.getElementById('tablaCotizacionBody2');
  
  btn.onclick = function () {
    modal.style.display = 'block';
  };
  span.onclick = function () {
    modal.style.display = 'none';
  };

  span2.onclick = function () {
    while(tablaCotizacionBody.firstChild != tablaCotizacionBody.lastChild){
    tablaCotizacionBody.removeChild(tablaCotizacionBody.firstChild);
    }
    tablaCotizacionBody.removeChild(tablaCotizacionBody.firstChild);
    
    modal2.style.display = 'none';
 };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
    if (event.target == modal2) {
      modal2.style.display = 'none';
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
