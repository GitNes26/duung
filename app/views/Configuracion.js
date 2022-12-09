import { SideBar } from "../components/SideBar.js";
import api from "../helpers/api.js";
import { GET_fetchRequestAsync } from "../helpers/fetchRequest.js";
import { getCookie, getId, getToken, route, setCookie } from "../helpers/helpers.js";

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
export function ConfiguracionHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Puntuación`;
   addStyles();
}

export  function Configuracion() {
   // console.log(props);
   // const data = await fillData();
  

	const $content = d.createElement("div");
   $content.id = "view-conf";
	$content.appendChild(SideBar());
	$content.innerHTML += `
   <div class="context">
   <div class="position-relative">
      <img src="/app/assets/images/Viñetas/Configuracion.png" class="circlePurple position-absolute top-0 end-0" />
   </div>

   <main class="bloquePrincipal">
      <div class="space__cardC">
         <div class="bg__cardC">
            <div class="text-center scroll__cardP">
               <h1 class="title__p">VOLUMEN</h1>
               <div class="form-check">
  <input class="form-check-input d-none" type="checkbox" id="ch_musica">
  <label class="form-check-label" for="ch_musica">
    Música &nbsp;<i id="icon-musica" class="fa-solid fa-music"></i>
  </label>
</div>

<div class="form-check">
  <input class="form-check-input d-none" type="checkbox" id="ch_efectos" >
  <label class="form-check-label" for="ch_efectos">
    Efectos &nbsp;<i id="icon-efectos" class="fa-solid fa-volume-high"></i>
  </label>
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
   if (e.target.matches("#view-conf #ch_musica") || e.target.matches("#view-conf #ch_musica *")) {
      console.log(e.target.checked);
      setCookie("musicSound",e.target.checked)
      const audio_theme = document.querySelector("#audio_theme");
      if (e.target.checked) {
         audio_theme.muted = false;
         $("#icon-musica").removeClass("fas fa-music-slash")
         $("#icon-musica").addClass("fa-solid fa-music")
      }else{ 
         audio_theme.muted = true;
         $("#icon-musica").addClass("fas fa-music-slash")
         $("#icon-musica").removeClass("fa-solid fa-music")
      }
      // if()
      // fillData();
   }
   if (e.target.matches("#view-conf #ch_efectos") || e.target.matches("#view-conf #ch_efectos *")) {
      console.log(e.target);
      setCookie("efectsSound",e.target.checked)
      const event_audio = document.querySelector("#audio_events");
      if (e.target.checked) {
         event_audio.muted = false
         $("#icon-efectos").removeClass("fas fa-volume-mute")
         $("#icon-efectos").addClass("fa-solid fa-volume-high")
      }else{ 
         event_audio.muted = true
         $("#icon-efectos").addClass("fas fa-volume-mute")
         $("#icon-efectos").removeClass("fa-solid fa-volume-high")
      }
      // fillData();
   }
})
// export const fillData = async () =>{
//    const res= await GET_fetchRequestAsync(`${api.USERS}/${getId()}`,api.GET,getToken());
//    let obj_res = res.data[0];
//    // const output_nom_us = d.querySelector("#view-profile #output_nom_us")
//    // output_nom_us.textContent =obj_res.username;
//    return obj_res;
// }
//#endregion FUNCIONES LOGICAS

export const checkSounds = async()=>{

   const efectsSound = getCookie("efectsSound")
   const musicSound = getCookie("musicSound")

   const ch_m = d.getElementById("ch_musica")
   const ch_e = d.getElementById("ch_efectos")
   ch_m.checked=musicSound==="true"?true:false;
   ch_e.checked=efectsSound==="true"?true:false;
}