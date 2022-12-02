import api from "../helpers/api.js";
import { fetchRequestAsync } from "../helpers/fetchRequest.js";
import { inputsValidate } from "../helpers/validates.js";

const d = document;

function links() {
	return `
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>DUUNG | Menu</title>

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
      <link rel="stylesheet" href="/app/assets/css/menu.css" />
   `;
}
function styles() {
	const $styles = d.createElement("style");
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
	return $styles;
}

//#region FUNCIONES DE RENDERIZADO
export function MainHeaders() {
	const $head = d.querySelector("head");
	const $fragment = d.createDocumentFragment();
   let $content = links();
   $content += styles();
	// $head.innerHTML = null;
	// $fragment.innerHTML = links();
	// $fragment.appendChild(styles());
	$head.innerHTML = $content;
}

export function Main() {
   const $container = d.createElement("div");
   const $navbar = d.createElement("div");
   const $sectionPrincipal = d.createElement("div");
   const $fragment = d.createDocumentFragment();

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
         
                        <a class="e__sidebar1 d-inline-block text-truncate purpleScroll" data-bs-parent="#sidebar" href="#"> <i class="fas fa-home icon"></i>Home</a>

                        <a class="e__sidebar1 d-inline-block text-truncate purpleScroll" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-gamepad icon"></i></i>Area de juego</a>

                        <a onclick="greenScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-coins icon"></i>Score</a>
                        <a onclick="yellowScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-brain icon"></i>Cultiva tu mente</a>
                        <a onclick="pinkScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-user icon"></i>Perfil</a>
                        <a onclick="blueScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-wrench icon"></i>Configuraciones</a>
                        
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
                           <div class="content shadow push purple__bloc" onclick="purpleScroll()">
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
                           <div class="content shadow push pink__bloc" onclick="pinkScroll()">
                                 <img src="/app/assets/images/Avatar/Iperfil.png" class="images__bloc"/>
                           </div>
                           <div class="content shadow push yellow__bloc" onclick="yellowScroll()">
                                 <img src="/app/assets/images/Avatar/ICultiva.png" class="images__bloc"/>
                           </div>
                                       
                        </div>
                        <div class="col-sm-3">
                           <div class="content shadow push green__bloc" onclick="greenScroll()">
                                 <img src="/app/assets/images/Avatar/IScore.png" class="images__bloc"/>
                           </div>
                           <div class="content shadow push blue__bloc" onclick="blueScroll()">
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

   $container.id = "contenedor";
   $container.classList.add("contenedor");
   $container.innerHTML = `
      
   `;
   $container.appendChild($fragment);

	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   console.log("click", e.target);
   if (e.target.classList.contains("purpleScroll")) {
      console.log("morado");
   }
})

function yellowScroll() {
   console.log("holaaaaaaYellow");
   const body = document.getElementById("contenedor");
   body.style.backgroundColor = "#e09d01";
}

function pinkScroll() {
   const body = document.getElementById("contenedor");
   body.style.backgroundColor = "#9a47c1";
}

function greenScroll() {
   const body = document.getElementById("contenedor");
   body.style.backgroundColor = "#7CCA4D";
}

function purpleScroll() {
   const body = document.getElementById("contenedor");
   body.style.backgroundColor = "#4E54C8";
}

function blueScroll() {
   const body = document.getElementById("contenedor");
   body.style.backgroundColor = "#26A6DD";
}
//#endregion FUNCIONES LOGICAS
