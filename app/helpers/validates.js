import { getSession, getToken } from "./helpers.js";


export function mostrarAlerta(
	ajaxResponse,
	icono,
	titulo,
	texto,
	btn_aceptar,
	refresh
 ) {
	if (ajaxResponse != null) {
	  icono = ajaxResponse.Icono_alerta;
	  titulo = ajaxResponse.Titulo_alerta;
	  texto = ajaxResponse.Texto_alerta;
	  btn_aceptar = ajaxResponse.DataBool;
	}
 
	Swal.fire({
	  icon: icono,
	  title: titulo,
	  html: texto,
	  showConfirmButton: btn_aceptar,
	  confirmButtonColor: "#494E53",
	});
}
function mostrarAlertaConOpciones(
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
			success: (ajaxResponseThen) => {
			  Swal.fire({
				 icon: ajaxResponseThen.Icono_alerta,
				 title: ajaxResponseThen.Titulo_alerta,
				 text: ajaxResponseThen.Texto_alerta,
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


export const inputsValidate = (form) => {
	let inputs = $(form).serializeArray();
	// console.log(inputs)
	let validate = true;
	$.each(inputs, function (i, input_iterable) {
	  if (!validate) return;
	  let input = $(`#${input_iterable.name}`);
	  if (!input.hasClass("not_validate")) {
		 let input_validated = inputValidate(input);
		 if (!input_validated) return (validate = false);
	  }
	  validate = true;
	});
	return validate;
 }
export const inputValidate = (inp) => {
	console.log("inputValidate");
	let input = $(inp);
	if (input.val() == "" || input.val() == -1 || input.val() == "-1") {
	  showToast("error", `Campo ${input.attr("data-input-name")} vacío.`);
	  input.focus();
	  return false;
	}
	return true;
}

export const validateSession = () => {
	if (!getSession()) return false;
	if(!getToken()) return false;
	return true;
}

