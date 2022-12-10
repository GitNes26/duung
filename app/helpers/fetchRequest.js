import { CloseLoader, Loader } from "../components/Loader.js";
import { showAlert } from "./Alerts.js";
import { CleanCookies, getToken } from "./helpers.js";

export async function fetchRequestAsync(url, method, data={}, token=null, modal_close=null) {
   // let {url, cbSuccess} = props;
   // let {api_path, method, data={}, token=false, modal_close=null} = props;

	let response;
	await Loader();
	try {
		response = await fetch(`${url}`, {
			method: method,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: token ? `Bearer ${token}` : "",
			},
			body: JSON.stringify(data),
		});
      errorHandler(response);
	} catch (error) {
      if (modal_close == true) btn_close.click();
      CloseLoader();

      Swal.fire({
        icon: "error",
        title: "Oops...!",
        text: `Ha ocurrido un error, verifica tú información.`,
        showConfirmButton: true,
        confirmButtonColor: "#494E53",
      });
      console.log(error);
    }
	CloseLoader();
	return response.json();
}

export async function GET_fetchRequestAsync(url, method, token=null, modal_close=null) {
   // let {url, cbSuccess} = props;
   // let {api_path, method, token=false, modal_close=null} = props;

	let response;
	await Loader();
	try {
		response = await fetch(`${url}`, {
         method: method,
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
         },
      });
      errorHandler(response);
	} catch (error) {
      if (modal_close == true) btn_close.click();
      CloseLoader();

      Swal.fire({
        icon: "error",
        title: "Oops...!",
        text: `Ha ocurrido un error, verifica tú información.`,
        showConfirmButton: true,
        confirmButtonColor: "#494E53",
      });
    }
	CloseLoader();
	return response.json();
}

export async function fetchRequest(props) {
   // let {url, cbSuccess} = props;
   let {api_path, method, data={}, token=false, modal_close=null} = props;

	let response;
	// await Loader();
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
      errorHandler(response);
	} catch (error) {
      if (modal_close == true) btn_close.click();
      CloseLoader();

      Swal.fire({
        icon: "error",
        title: "Oops...!",
        text: `Ha ocurrido un error, verifica tú información.`,
        showConfirmButton: true,
        confirmButtonColor: "#494E53",
      });
      console.log(error);
    }
	// CloseLoader();
	return response.json();
}

export async function GET_fetchRequest(props) {
   // let {url, cbSuccess} = props;
   let {api_path, method, token=false, modal_close=null} = props;

	let response;
	// await Loader();
	try {
		response = await fetch(`${API_URL}/${api_path}`, {
         method: method,
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
         },
      });
      errorHandler(response);
	} catch (error) {
      if (modal_close == true) btn_close.click();
      CloseLoader();

      Swal.fire({
        icon: "error",
        title: "Oops...!",
        text: `Ha ocurrido un error, verifica tú información.`,
        showConfirmButton: true,
        confirmButtonColor: "#494E53",
      });
      console.log(error);
    }
	// CloseLoader();
	return response.json();
}

function errorHandler(response) {
   if (!response.ok) {
      console.trace(response);
      if (response.status === 401) {
         if (response.statusText === "Unauthorized"){
            CleanCookies();
            location.hash = '/';
         }
      }
      if (response.status === 422) {
         // if (response.statusText === "Unprocessable Content"){
            showAlert(null,'error','Usuario y/o contraseña invalidas!','',true);
         // }
      }
   }
}



// const GET_FetchRequest = async(api_path, method, token = false) => {
// 	const response = await fetch(`${API_URL}/${api_path}`, {
// 		method: method,
// 		headers: {
// 			Accept: "application/json",
// 			"Content-Type": "application/json",
// 			Authorization: token ? `Bearer ${token}` : "",
// 		},
// 	});
// 	return response.json();
// }

// const FetchRequest = async(api_path, method, data={}, token=false, modal_close=true) => {
// 	console.log("FetchRequest()");
// 	let response;
// 	await Loader();
// 	try {
// 		response = await fetch(`${API_URL}/${api_path}`, {
// 			method: method,
// 			headers: {
// 				Accept: "application/json",
// 				"Content-Type": "application/json",
// 				Authorization: token ? `Bearer ${token}` : "",
// 			},
// 			body: JSON.stringify(data),
// 		});
// 	} catch (error) {
//       if (modal_close == true) btn_close.click();
//       CloseLoader();

//       Swal.fire({
//         icon: "error",
//         title: "Oops...!",
//         text: `Ha ocurrido un error, verifica tú información.`,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//       });
//     }
// 	CloseLoader();
// 	return response.json();
// }