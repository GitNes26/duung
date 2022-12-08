export function showAlert(
	fetchResponse,
	icono,
	titulo,
	texto,
	btn_aceptar,
 ) {
	if (fetchResponse != null) {
	  icono = fetchResponse.Icono_alerta;
	  titulo = fetchResponse.Titulo_alerta;
	  texto = fetchResponse.Texto_alerta;
	  btn_aceptar = fetchResponse.DataBool;
	}
 
	Swal.fire({
	  icon: icono,
	  title: titulo,
	  html: texto,
	  showConfirmButton: btn_aceptar,
	  confirmButtonColor: "#494E53",
	});
}
export function showAlertWithOptions(
	url_modelo_app,
	titulo,
	texto,
	datos,
	refresh,
	funcion_then
 ) {
	Swal.fire({
	  title: titulo,
	  text: texto,
	  icon: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#3085d6",
	  confirmButtonText: "Delete",
	  cancelButtonColor: "#d33",
	  cancelButtonText: "Cancel",
	}).then((result) => {
	  if (result.isConfirmed) {
		 $.ajax({
			url: url_modelo_app,
			type: "POST",
			data: datos,
			dataType: "json",
			success: (fetchResponseThen) => {
			  Swal.fire({
				 icon: fetchResponseThen.Icono_alerta,
				 title: fetchResponseThen.Titulo_alerta,
				 text: fetchResponseThen.Texto_alerta,
				 showConfirmButton: false,
				 timer: 1500,
			  }).then(() => {
				 if (refresh) {
					// console.log("refresh3"); /*window.location.reload();*/
				 }
				 switch (funcion_then) {
					case "nada":
					  break;
					default:
					  break;
				 }
			  });
			},
		 });
	  }
	});
}
export function showToast(icono, mensaje, posicion="top-end") {
	const Toast = Swal.mixin({
	  toast: true,
	  position: posicion,
	  showConfirmButton: false,
	  timer: 2000,
	  timerProgressBar: true,
	  didOpen: (toast) => {
		 toast.addEventListener("mouseenter", Swal.stopTimer);
		 toast.addEventListener("mouseleave", Swal.resumeTimer);
	  },
	});
	Toast.fire({ icon: icono, title: mensaje });
}