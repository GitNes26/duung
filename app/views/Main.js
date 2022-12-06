import { SideBar } from "../components/SideBar.js";
import api from "../helpers/api.js";
import { fetchRequestAsync, GET_fetchRequestAsync } from "../helpers/fetchRequest.js";
import { CleanCookies, getId, getToken, route } from "../helpers/helpers.js";

const d = document;

//#region FUNCIONES DE RENDERIZADO
function addStyles() {
	const $styles = d.querySelector("head style");
	$styles.innerHTML = `
      .input__p{margin-top: 5px;border-radius:20px;border:1px #BB72DD;background-color: #BB72DD;}
      .button__p{border-radius:20px;border:1px #49006B;background-color: #49006B;padding-left: 90px;padding-right: 90px;color: var(--white);-webkit-transition: all 0.3s ease;transition: all 0.3s ease;margin-top: 15px;margin-left: 8px;}
      .button__p:hover{color: var(--white);border:1px #60028c;background-color: #60028c; -webkit-transform: scale(1.1) !important; transform: scale(1.04) !important;}
      .circle__bloc1{border-radius:50%;width:200px;height:200px;margin-top: 20px;margin-left: -20px;}
      .space__section{height:80px;padding-top:22px;border-radius:20px;}
      @media (max-width: 900px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left: 90px;margin-top:-10px;}}
      @media (max-width: 550px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-right: 90px;}}
      @media (max-width: 300px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left:26px;}
      .button__p{border-radius:20px;border:1px #49006B;background-color: #49006B;padding-left: 5px;padding-right: 5px;width: 120px;height: 30px;font-size: 10px;color: var(--white);-webkit-transition: all 0.3s ease;transition: all 0.3s ease;}
      .button__p:hover{color: var(--white);border:1px #60028c;background-color: #60028c; -webkit-transform: scale(1.1) !important; transform: scale(1.04) !important;}}
   `;
}

export function MainHeaders() {
	const $head = d.querySelector("head");
   const $fragment = d.createDocumentFragment();

   $head.querySelector("title").textContent = "DUUNG | Menú";
   addStyles();
   // <script src="/OneSignalSDKWorker.js" async=""></script>
	// 	<script>
		// window.OneSignal = window.OneSignal || [];
		// OneSignal.push(function() {
		// 	OneSignal.init({
		// 		appId: "a3a9830b-ea35-44ff-bc2c-4a0d6f7355c6",
		// 	});
		//   });
	// 	</script>
   let $scriptOneSignal = d.createElement("script");
   $scriptOneSignal.src = "/OneSignalSDKWorker.js";
   $scriptOneSignal.async = ""
   $fragment.appendChild($scriptOneSignal);
   $scriptOneSignal = d.createElement("script");
   $scriptOneSignal.textContent = `
      window.OneSignal = window.OneSignal || [];
		OneSignal.push(function() {
			OneSignal.init({
				appId: "a3a9830b-ea35-44ff-bc2c-4a0d6f7355c6",
			});
      });
   `;
   $fragment.appendChild($scriptOneSignal);
   $head.appendChild($fragment);
}

export function Main() {
   const $container = d.createElement("div");
   const $sectionPrincipal = d.createElement("div");
   const $fragment = d.createDocumentFragment();

   $container.id = "view-main";

   $fragment.appendChild(SideBar());

   $sectionPrincipal.id = "sectionPrincipal";
   $sectionPrincipal.innerHTML = `
      <div class="context p__zone">
         <main class="bloquePrincipal1">

            <div class="space__blocs">
                  
               <div class="row">
                  <div class="col-md-12">
                     <div class="content shadow push purple__bloc purpleScroll">
                        <div class="row">
                           <div class="col-md-3">
                              <img class=" d-md-block d-none img1__bloc1" src="/app/assets/images/14.png"/>
                           </div>
                           <div class="col-md-6 col-8">
                              <h1 class="fw-bold tit__bloc">Comenzar<br/> Partida</h1>
                           </div>
                           <div class="col-md-3 col-8 circle__bloc1">
                              <img class="push btn__part" type="button" style="margin-top:20px;" src="/app/assets/images/play.png" width="100%"/>
                           </div>
                        </div>
                     </div>  
                  </div>

                  <div class="col-sm-3">
                     <div class="content shadow push pink__bloc pinkScroll">
                           <img src="/app/assets/images/Avatar/Iperfil.png" class="images__bloc"/>
                     </div>
                     <div class="content shadow push yellow__bloc yellowScroll">
                           <img src="/app/assets/images/Avatar/ICultiva.png" class="images__bloc"/>
                     </div>
                                 
                  </div>
                  <div class="col-sm-3">
                     <div class="content shadow push green__bloc greenScroll">
                           <img src="/app/assets/images/Avatar/IScore.png" class="images__bloc"/>
                     </div>
                     <div class="content shadow push blue__bloc blueScroll">
                           <img src="/app/assets/images/Avatar/IConfiguracion.png" class="images__bloc"/>
                     </div>
                  </div>
                  <div class="col-sm-6">
                     <div class="content d-md-block d-none"><img class="bloc__img" src="/app/assets/images/1.png"/></div>
                  </div>
               
               </div>
            </div>
               
         </main> 
      </div>
   `;
   $fragment.appendChild($sectionPrincipal);

   // $container.id = "contenedor";
   $container.classList.add("contenedor");
   $container.innerHTML = `
      
   `;
   $container.appendChild($fragment);

	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   if (e.target.matches("#view-main .yellowScroll") || e.target.matches("#view-main .yellowScroll *")) {
      yellowScroll();
   }
   if (e.target.matches("#view-main .pinkScroll") || e.target.matches("#view-main .pinkScroll *")) {
      pinkScroll();
   }
   if (e.target.matches("#view-main .greenScroll") || e.target.matches("#view-main .greenScroll *")) {
      greenScroll();
   }
   if (e.target.matches("#view-main .purpleScroll") || e.target.matches("#view-main .purpleScroll *")) {
      purpleScroll();
   }
   if (e.target.matches("#view-main .blueScroll") || e.target.matches("#view-main .blueScroll *")) {
      blueScroll();
   }


   if (e.target.matches("#view-main #btn_logout") || e.target.matches("#view-main #btn_logout *")) {
      logOut();
   }
})

d.addEventListener("DOMContentLoaded", () => {
});

function yellowScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#e09d01";
}

function pinkScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#9a47c1";
}

function greenScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#7CCA4D";
}

function purpleScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#4E54C8";
   setTimeout(()=>route("choose-game"),500);
}

function blueScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#26A6DD";
}

const logOut = async () => {
   console.log(Cookies.get());
   await GET_fetchRequestAsync(`${api.LOGOUT}/${getId()}`, api.DELETE, getToken())
   CleanCookies();
   route('')
   console.log(Cookies.get());
}
//#endregion FUNCIONES LOGICAS
