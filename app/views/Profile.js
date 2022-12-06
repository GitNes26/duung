import api from "../helpers/api.js";
import { fetchRequestAsync, GET_fetchRequestAsync } from "../helpers/fetchRequest.js";
import { getId, getToken, route } from "../helpers/helpers.js";

const d = document;

//#region FUNCIONES DE RENDERIZADO
function addStyles() {
	const $styles = d.querySelector("head style");
   $styles.innerHTML = `
      .input__p{margin-top: 5px;border-radius:20px;border:1px #BB72DD;background-color: #BB72DD;}
      .button__p{border-radius:20px;border:1px #49006B;background-color: #49006B;padding-left: 90px;padding-right: 90px;color: var(--white);-webkit-transition: all 0.3s ease;transition: all 0.3s ease;margin-top: 15px;margin-left: 8px;}
      .button__p:hover{color: var(--white);border:1px #60028c;background-color: #60028c; -webkit-transform: scale(1.1) !important; transform: scale(1.04) !important;}
      .circle__bloc1{border-radius:50%;width:200px;height:200px;margin-top: 20px;margin-left: -20px;}
      .space__section{height:80px;padding-top:22px;border-radius:20px;margin-top:10px;}
      @media (max-width: 900px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left: 90px;margin-top:-10px;}}
      @media (max-width: 550px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-right: 90px;}}
      @media (max-width: 300px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left:26px;}}
   `;
}
export function ProfileHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Perfil`;
   addStyles();
}

export  function Profile(props) {
   // console.log(props);
   // const data = await fillData();
	const $content = d.createElement("div");
   $content.id = "view-profile";
	$content.innerHTML = `
            <div class="context">
            <div class="position-relative">
               <img src="/app/assets/images/Viñetas/Perfil.png" class="circlePurple position-absolute top-0 end-0" />
            </div>

            <main class="bloquePrincipal">
               <div class="space__cardP">
                  <div class="bg__cardP">
                     <div class="scroll__cardP">
                        <h1 class="text-center title__p">Perfil</h1>

                        <div class="col-md-8">
                           <div>
                              <label class="label__p fw-bold">Nombre de usuario</label>
                              <p class="text__p fw-light" id="output_nom_us">${props.username}</p>
                           </div>
                           <div>
                              <label class="label__p fw-bold">Nombre</label>
                              <p class="text__p fw-light">${props.name}</p>
                           </div>
                           <div>
                              <label class="label__p fw-bold">Rol</label>
                              <p class="text__p fw-light">${props.role_name}</p>
                           </div>

                           <div>
                              <label class="label__p fw-bold">Nueva Contraseña</label>
                              <input type="password" class="form-control input__p" />
                           </div>
                              <div>
                              <label class="label__p fw-bold">Confirmar contreseña</label>
                              <input type="password" class="form-control input__p" />
                              <button type="submit" class="btn button__p" id="btn_aceptar_profile">Aceptar</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
         </div>
   `;
	return $content;
}
//#endregion FUNCIONES DE RENDERIZADO
//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   if (e.target.matches("#view-profile #btn_aceptar_profile") || e.target.matches("#view-profile #btn_aceptar_profile *")) {
      updatePassword();
      // fillData();
   }
})
const updatePassword= async()=>{
   let info ={

   }
   const res = await fetchRequestAsync(api.USERS,api.UPDATE,info,true)
   // console.log("actualizando la contraseña");
}
export const fillData = async () =>{
   const res= await GET_fetchRequestAsync(`${api.USERS}/${getId()}`,api.GET,getToken());
   let obj_res = res.data[0];
   // const output_nom_us = d.querySelector("#view-profile #output_nom_us")
   // output_nom_us.textContent =obj_res.username;
   return obj_res;
}
//#endregion FUNCIONES LOGICAS
