const DataTableConfig = {
	responsive: true,
	language: {
		url: "https://cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json",
	},
	columnDefs: [
		{
			className: "dt-center",
			targets: "_all",
		},
	],
	dom: '<"row"<"col-md-6 "l> <"col-md-6"f> > rt <"row"<"col-md-6 "i> <"col-md-6"p> >',
	lengthMenu: [
		[5, 10, 50, 100, -1],
		[5, 10, 50, 100, "Todos"],
	],
	pageLength: 10,
	deferRender: true,
	aaSorting: [], //deshabilitar ordenado automatico
};
const User = {
	username: "Néstor",
	role_id: 1,
	token: "2|hd7hHMz4jmA9XGrn6N5hbVoxIpFJbi3sGEnSToaq",
};
Cookies.set("token", User.token);

const API_URL = "http://127.0.0.1:8000/api",
	GET = "GET",
	POST = "POST",
	UPDATE = "UPDATE",
	DELETE = "DELETE"
;
const dialogoBlockUI = `
	<div class="card text-center" style="opacity:1 !important; width:40vw !important;">
		<div class="card-body">
			<div class="fw-bold h6">CARGANDO...</div><br>
			<div class='spinner-border text-dark' role='status'> <span class='sr-only'></span></div>
		</div>
	</div>
`;
const showBlocUI = () => {
	$.blockUI({
		message: dialogoBlockUI,
		css: { backgroundColor: null, color: "#313131", border: null },
	 });
}

function mostrarAlerta(
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
					console.log("refresh3"); /*window.location.reload();*/
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
function showToast(icono, mensaje, posicion="top-end") {
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


const inputsValidate = (formulario) => {
	let inputs = $(formulario).serializeArray();
	// console.log(inputs)
	let validado = true;
	$.each(inputs, function (i, input_iterable) {
	  if (!validado) return;
	  let input = $(`#${input_iterable.name}`);
	  if (!input.hasClass("excluir_validacion")) {
		 // console.log(input)
		 let campo_valido = inputValidate(input);
		 if (!campo_valido) return (validado = false);
	  }
	  validado = true;
	});
	return validado;
 }
const inputValidate = (input) => {
	if (input.val() == "" || input.val() == -1 || input.val() == "-1") {
	  showToast("error", `Space ${input.attr("data-nombre-campo")} empty.`);
	  input.focus();
	  return false;
	}
	return true;
}

const span_requiered = $(".span_requiered").html(
  `<span class="text-danger fst-italic">&nbsp; * required</span>`
);

/*Select2*/
$.fn.select2.defaults.set("language", "en");
moment.locale("en");

const GET_FetchRequest = async(api_path, method, token = false) => {
	const response = await fetch(`${API_URL}/${api_path}`, {
		method: method,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: token ? `Bearer ${token}` : "",
		},
	});
	return response.json();
}

const FetchRequest = async(api_path, method, data={}, token=false, modal_close=true) => {
	console.log("FetchRequest()");
	let response;
	await showBlocUI();
	try {
		response = await fetch(`${API_URL}/${api_path}`, {
			method: method,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: token ? `Bearer ${token}` : "",
			},
			body: JSON.stringify(data),
		});
	} catch (error) {
      if (modal_close == true) btn_close.click();
      $.unblockUI();

      Swal.fire({
        icon: "error",
        title: "Oops...!",
        text: `Ha ocurrido un error, verifica tú información.`,
        showConfirmButton: true,
        confirmButtonColor: "#494E53",
      });
    }
	$.unblockUI();
	return response.json();
}
