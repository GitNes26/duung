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
      .space__section{height:80px;padding-top:22px;border-radius:20px;margin-top:10px;}
      @media (max-width: 900px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left: 90px;margin-top:-10px;}}
      @media (max-width: 550px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-right: 90px;}}
      @media (max-width: 300px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left:26px;}}
   `;
}

export function MainHeaders() {
	const $head = d.querySelector("head");
   $head.querySelector("title").textContent = "DUUNG | Menú";
   addStyles();
}

export function Main() {
   const $container = d.createElement("div");
   const $navbar = d.createElement("div");
   const $sectionPrincipal = d.createElement("div");
   const $fragment = d.createDocumentFragment();

   $container.id = "view-main";

   $navbar.id = "navbar";
   $navbar.innerHTML = `
      <nav class="position__nav">
         <div class="container-fluid">
            <a class="navbar-brand">  
               <button type="button" class="hamburger animated fadeInLeft is-closed" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <span class="hamb-top"></span>
                  <span class="hamb-middle"></span>
                  <span class="hamb-bottom"></span>
               </button>
            </a>
         </div>
      </nav>
         
      <div class="col-auto px-0 ">
         <div style="width:300px;" class=" offcanvas  offcanvas-start b__lateral " data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
               <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
            </div>
         
         
            <div class="offcanvas-body contenedor-light">
               <div class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                  <nav class="nav flex-column">
                     <a class="nav-link active " aria-current="page" href="#">
                        <img src="/app/assets/images/2.png"   class="ico__principal">
                     </a>
      
                     <a class="e__sidebar1 d-inline-block text-truncate purpleScroll" data-bs-parent="#sidebar" href="#/main"> <i class="fas fa-home icon"></i>Home</a>

                     <a class="e__sidebar1 d-inline-block text-truncate purpleScroll" data-bs-parent="#sidebar" href="#/main"> <i class="fas fa-solid fa-gamepad icon"></i></i>Area de juego</a>

                     <a class="e__sidebar1 d-inline-block text-truncate greenScroll btn_score" data-bs-parent="#sidebar" > <i class="fas fa-solid fa-coins icon"></i>Score</a>
                     <a class="e__sidebar1 d-inline-block text-truncate yellowScroll btn_cultiva" data-bs-parent="#sidebar" > <i class="fas fa-solid fa-brain icon"></i>Cultiva tu mente</a>
                     <a class="e__sidebar1 d-inline-block text-truncate pinkScroll btn_profile" data-bs-parent="#sidebar"> <i class="fas fa-solid fa-user icon"></i>Perfil</a>
                     <a class="e__sidebar1 d-inline-block text-truncate blueScroll btn_configuracion" data-bs-parent="#sidebar" > <i class="fas fa-solid fa-wrench icon"></i>Configuraciones</a>

                     <a id="btn_logout" class="e__sidebar1 d-inline-block text-truncate logout" data-bs-parent="#sidebar"> <i class="fas fa-sign-out-alt icon"></i>Cerrar Sesión</a>
                     
                  </nav>
               </div>
            </div>
         </div>
      </div>
   `;
   $fragment.appendChild($navbar);

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
                     <div class="content shadow push pink__bloc pinkScroll btn_profile">
                           <img src="/app/assets/images/Avatar/Iperfil.png" class="images__bloc"/>
                     </div>
                     <div class="content shadow push yellow__bloc yellowScroll btn_cultiva">
                           <img src="/app/assets/images/Avatar/ICultiva.png" class="images__bloc"/>
                     </div>
                                 
                  </div>
                  <div class="col-sm-3">
                     <div class="content shadow push green__bloc greenScroll btn_score">
                           <img src="/app/assets/images/Avatar/IScore.png" class="images__bloc"/>
                     </div>
                     <div class="content shadow push blue__bloc blueScroll btn_configuracion">
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

      <div class="areaPurple1" >
         <ul class="circles">
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
   if (e.target.matches("#view-main .btn_cultiva") || e.target.matches("#view-main .btn_cultiva *")) {
      yellowScroll();
   }
   if (e.target.matches("#view-main .btn_profile") || e.target.matches("#view-main .btn_profile *")) {
      pinkScroll();
   }
   if (e.target.matches("#view-main .btn_score") || e.target.matches("#view-main .btn_score *")) {
      greenScroll();
   }
   if (e.target.matches("#view-main .purpleScroll") || e.target.matches("#view-main .purpleScroll *")) {
      purpleScroll();
   }
   if (e.target.matches("#view-main .btn_configuracion") || e.target.matches("#view-main .btn_configuracion *")) {
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
   setTimeout(() => route("cultiva") , 500);
}

function pinkScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#9a47c1";
   setTimeout(() => route("profile") , 500);
}

function greenScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#7CCA4D";
   setTimeout(() => route("score") , 500);
}

function purpleScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#4E54C8";
   setTimeout(()=>route("choose-game"),500);
}

function blueScroll() {
   const contenedor = document.querySelector(".contenedor");
   contenedor.style.backgroundColor = "#26A6DD";
   setTimeout(()=>route("configuracion"),500);
}

const logOut = async () => {
   console.log(Cookies.get());
   await GET_fetchRequestAsync(`${api.LOGOUT}/${getId()}`, api.DELETE, getToken())
   CleanCookies();
   route('')
   console.log(Cookies.get());
}
//#endregion FUNCIONES LOGICAS
