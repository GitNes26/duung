import api from "../helpers/api.js";
import { fetchRequestAsync } from "../helpers/fetchRequest.js";
import { inputsValidate } from "../helpers/validates.js";

const d = document;

//#region FUNCIONES DE RENDERIZADO
function addStyles() {
	const $styles = d.querySelector("head style");
	$styles.innerHTML = ``;
}

export function LoginHeaders() {
	const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Login`;
	addStyles();
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
