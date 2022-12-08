import api from "../helpers/api.js";
import { GET_fetchRequestAsync } from "../helpers/fetchRequest.js";
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
export function CultivaHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Puntuación`;
   addStyles();
}

export  function Cultiva(tips) {
   // console.log(props);
   // const data = await fillData();
	const $content = d.createElement("div");
   $content.id = "view-tips";
   let $datos_curiosos =``;

   tips.length >0
   ?tips.map(tip=>{
      $datos_curiosos  +=`
      <div class="col-md-12"  >
                     <hr />
                     <div class="row " style="cursor:pointer;" onclick="window.open('${tip.enlace}');">
                        <img class="col-md-4 img__card" src=" ${tip.imagen}" />
                        <div class="col-md-8">
                           <h4 class="fw-light">${tip.titulo}</h4>
                           <p class="fw-light">
                           ${tip.contenido}
                           </p>
                        </div>
                        <hr />
                     </div>
                  </div>
      `
   })
   :$datos_curiosos  +=`<p>Lo sentimos no hay noticias para mostrar</p>`


	$content.innerHTML = `
   <div class="context">
   <div class="position-relative">
      <img src="/app/assets/images/Viñetas/Cultiva.png" class="circlePurple position-absolute top-0 end-0" />
   </div>

   <main class="bloquePrincipal">
      <div class="space__cardCu">
         <div class="bg__cardCu contenedor-light">
            <div class="">
               <h1 class="text-center title__Cu">Cultiva tu mente</h1>
               <p class="fw-light">Aprende más leyento e informandote de lo que pasa en el mundo. Lee estas noticias
                  mundiales.</p>
                  ${$datos_curiosos}  
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
// d.addEventListener("click", function(e) {
//    if (e.target.matches("#view-tips #btn_aceptar_profile") || e.target.matches("#view-tips #btn_aceptar_profile *")) {
//       fillData();
//    }
// })
// export const fillData = async () =>{
//    const res= await GET_fetchRequestAsync(`${api.USERS}/${getId()}`,api.GET,getToken());
//    let obj_res = res.data[0];
//    // const output_nom_us = d.querySelector("#view-profile #output_nom_us")
//    // output_nom_us.textContent =obj_res.username;
//    return obj_res;
// }
//#endregion FUNCIONES LOGICAS

export const getTips = async () => {
   const res = await GET_fetchRequestAsync(`${api.TIPS}list`, api.GET, getToken());
   let obj_res = res.data;
   // console.log(obj_res);
   // const output_nom_us = d.querySelector("#view-profile #output_nom_us")
   // output_nom_us.textContent =obj_res.username;
   return obj_res;
}