import api from "../helpers/api.js";
import { fetchRequestAsync } from "../helpers/fetchRequest.js";
import { route, setCookies } from "../helpers/helpers.js";
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
   const $container = d.createElement("div");
   $container.id ="view-login";
	$container.innerHTML = `
      <div class="body">
         <div class="main" style="z-index: 2">
            <input type="checkbox" id="chk" hidden="true" />

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
                  <label for="chk" aria-hidden="true" id="btn_chk_login">Login</label>
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
   `;
   return $container;
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
      // VALIDACION DE FORMULARIO
      if (!inputsValidate(e.target)) return;
      
      // CREACION DE LA DATA QUE SE ENVIARA A LA PETCION
      const data = {
         email: document.querySelector("#email_signup").value,
         username: document.querySelector("#username_signup").value,
         password: document.querySelector("#password_signup").value,
      }
      // ENVIAR PETICION
      const objResponse = await fetchRequestAsync(api.SIGNUP, api.POST, data);

      if (!objResponse.status) return;
      Swal.fire({
         icon: `${objResponse.alert_icon}`,
         title: `${objResponse.alert_text}`,
         text: ``,
         showConfirmButton: false,
         confirmButtonColor: "#494E53",
         timer: 2000
      }).then(() => {
         e.target.reset();
         d.querySelector("#btn_chk_login").click()
      })
   }

   if (e.target.id === "form_login") {
      // VALIDACION DE FORMULARIO
      if (!inputsValidate(e.target)) return;
      
      // CREACION DE LA DATA QUE SE ENVIARA A LA PETCION
      const data = {
         username: document.querySelector("#username_login").value,
         password: document.querySelector("#password_login").value,
      }
      // ENVIAR PETICION
      const objResponse = await fetchRequestAsync(api.LOGIN, api.POST, data);

      const dataResponse = objResponse.data;
      
      if (!objResponse.status) return;
      setCookies(objResponse);
      Swal.fire({
         icon: `${objResponse.alert_icon}`,
         title: `BIENVENIDO <br> ${dataResponse.username}`,
         text: ``,
         showConfirmButton: false,
         confirmButtonColor: "#494E53",
         timer: 1500
      }).then(() => {
         route(`main`);
      })
   }
});
//#endregion FUNCIONES LOGICAS
