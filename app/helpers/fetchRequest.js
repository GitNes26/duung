import { CloseLoader, Loader } from "../components/Loader.js";

export async function fetchRequestAsync(url, method, data={}, token=false, modal_close=null) {
   // let {url, cbSuccess} = props;
   // let {api_path, method, data={}, token=false, modal_close=null} = props;

   console.log("FetchRequest()");
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

export async function GET_fetchRequestAsync(url, method, token='2|hd7hHMz4jmA9XGrn6N5hbVoxIpFJbi3sGEnSToaq', modal_close=null) {
   // let {url, cbSuccess} = props;
   // let {api_path, method, token=false, modal_close=null} = props;

   console.log("FetchRequest()");
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

export async function fetchRequest(props) {
   // let {url, cbSuccess} = props;
   let {api_path, method, data={}, token=false, modal_close=null} = props;

   console.log("FetchRequest()");
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

   console.log("FetchRequest()");
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