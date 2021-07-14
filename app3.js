// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AA",
  authDomain: "bo.com",
  databaseURL: "htto.com",
  projectId: "",
  storageBucket: "om",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});

var db = firebase.firestore();
//agregar documento
function guardar(){
  var invitado = document.getElementById('NombreInvita').value;
  var telefono = document.getElementById('TelefonoInvita').value;
  
  if ($('#NombreInvita').val().length == 0 || $('#TelefonoInvita').val().length == 0) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No has introducido datos',
        })
      return false;
    } else {
        if ($('#TelefonoInvita').val().length != 10) {
          Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'Ingrese numero a 10 digitos',
            })
        } else {
          db.collection("confirmados").add({                
              Nombre: invitado,
              Telefono: telefono,
              Pase: 3
          })
          .then(function(docRef) {

              Swal.fire(
                  'Datos enviados',
                  'Gracias por confirmar. Nos vemos en la boda :)',
                  'success'
                )


              document.getElementById('NombreInvita').value ="";
              document.getElementById('TelefonoInvita').value="";
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });
        }
      
    }

  

}

