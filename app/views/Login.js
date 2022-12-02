import api from "../helpers/api.js";
import { fetchRequestAsync } from "../helpers/fetchRequest.js";
import { inputsValidate } from "../helpers/validates.js";

const d = document;

function links() {
	const $head = d.createElement("head");
	$head.innerHTML = `
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>DUUNG | Login</title>

      <!-- METAS PARA PWA -->
      <meta name="description" content="Bienvenid@s a DUUNG donde aprenderas...">
      <meta name="theme-color" content="#F0DB4F">
      <meta name="MobileOptimized" content="width">
      <meta name="HandheldFriendly" content="true">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <link rel="shortcut icon" type="image/png" href="/assets/images/logo_duung.png">
      <link rel="apple-touch-icon" href="/assets/images/logo_duung.png">
      <link rel="apple-touch-startup-image" href="/assets/images/logo_duung.png">
      <link rel="manifest" href="/manifest.json">
      <!-- METAS PARA PWA -->


      <!-- CDNS -->
      <!-- JQuery 6 -->
      <script
         src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
         referrerpolicy="no-referrer"
      ></script>
      <!-- Select2 -->
      <link
         href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css"
         rel="stylesheet"
      />

      <!-- FontAwesome 6 -->
      <link
         rel="stylesheet"
         href="https://site-assets.fontawesome.com/releases/v6.1.0/css/all.css"
      />

      <!-- SweetAlert2 -->
      <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css"
         referrerpolicy="no-referrer"
      />
      <!-- CDNS -->

      <link
         href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
         rel="stylesheet"
      />

      <link
         rel="stylesheet"
         href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      />

      <link rel="stylesheet" type="text/css" href="/app/assets/css/logInStyle.css" />
      <link rel="stylesheet" href="/app/assets/css/style.css" />
      <link rel="stylesheet" href="/app/assets/css/fondo.css" />
   `;
	return $head;
}
function styles() {
	const $styles = d.createElement("style");
	$styles.innerHTML = `
   `;
	return $styles;
}

//#region FUNCIONES DE RENDERIZADO
export function LoginHeaders() {
	const $head = d.querySelector("head");
	const $fragment = d.createDocumentFragment();
	$head.innerHTML = "";
	$fragment.appendChild(links());
	$fragment.appendChild(styles());
	$head.appendChild($fragment);
}

export function Login() {
	return `
      <div class="body">
         <div class="main" style="z-index: 2">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div class="signup">
               <form id="form_signup">
                  <label for="chk" aria-hidden="true">Sign up</label>
                  <input
                     type="text"
                     id="username_signup"
                     name="username_signup"
                     placeholder="Usuario"
                     data-input-name="USUARIO"
                  />
                  <input
                     type="email"
                     id="email_signup"
                     name="email_signup"
                     placeholder="Correo electronico"
                     data-input-name="CORREO"
                  />
                  <input
                     type="password"
                     id="password_signup"
                     name="password_signup"
                     placeholder="Contraseña"
                     data-input-name="CONTRASEÑA"
                  />
                  <button id="btn_signup">Sign up</button>
               </form>
            </div>

            <div class="login">
               <form id="form_login">
                  <label for="chk" aria-hidden="true">Login</label>
                  <input
                     type="text"
                     id="username_login"
                     name="username_login"
                     placeholder="Usuario"
                     data-input-name="USUARIO"
                  />
                  <input
                     type="password"
                     id="password_login"
                     name="password_login"
                     placeholder="Contraseña"
                     data-input-name="CONTRASEÑA"
                  />
                  <button id="btn_login">Login</button>
               </form>
            </div>
         </div>
      </div>

      <ul style="z-index: 1" class="circles">
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </ul>
   `;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
	item.addEventListener("click", function () {
		switchers.forEach((item) =>
			item.parentElement.classList.remove("is-active")
		);
		this.parentElement.classList.add("is-active");
	});
});

d.addEventListener("submit", async function (e) {
   e.preventDefault();
   if (e.target.id === "form_signup") {
      console.log("a registrarse");
   }

   if (e.target.id === "form_login") {
      console.log("logearseee");
      // VALIDACION DE FORMULARIO
      if (!inputsValidate(e.target)) return;
      
      // CREACION DE LA DATA QUE SE ENVIARA A LA PETCION
      const data = {
         username: document.querySelector("#username_login").value,
         password: document.querySelector("#password_login").value,
      }
      // ENVIAR PETICION
      const objResponse = await fetchRequestAsync(api.LOGIN, api.POST, data);

      console.log("🚀 ~ file: login.js:62 ~ objResponse", objResponse)
      
      const dataResponse = objResponse.data;
      
      if (!objResponse.status) return;
      Cookies.set('token', `${objResponse.token}`);
      console.log(Cookies.get());
      Swal.fire({
         icon: `${objResponse.alert_icon}`,
         title: `BIENVENIDO <br> ${dataResponse.username}`,
         text: ``,
         showConfirmButton: false,
         confirmButtonColor: "#494E53",
         timer: 1500
      }).then(() => {
         location.hash = `#/main`;
      })
   }
});
//#endregion FUNCIONES LOGICAS
