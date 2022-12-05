import { playAudio, route } from "../helpers/helpers.js";

const d = document;

//#region FUNCIONES DE RENDERIZADO
function addStyles() {
	const $styles = d.querySelector("head style");
   $styles.innerHTML = `
      .button1{
         background-color:var(--pinkHard);
         color: #fff;
         border-radius: 20px;
         width: 300px;
         font-size: 20px;
         margin-left: 20px;
      }
   
      .button1:hover {
         color: #fff;
         background-color:#e10087;
      }
      
      @media (max-width: 600px) {
         .button1{
            background-color:var(--pinkHard);
            color: #fff;
            border-radius: 20px;
            width: 200px;
            font-size: 20px;
         }
      }
      
      @media (max-width: 400px) {
         .button1{
            background-color:var(--pinkHard);
            color: #fff;
            border-radius: 20px;
            width: 200px;
            font-size: 15px;
         }
      }
   `;
}
export function SplashHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG`;
   addStyles();
}

export function Splash() {
	const $container = d.createElement("div");
   $container.id = "view-splash";
	$container.innerHTML = `
      <div class="context">

         <div class="bloquePrincipal">
            <div class="bloqueCenter position-relative">
               <div class="img__position">
                  <img src="/app/assets/images/1.png" class="image1"/>  
               </div>
               <div class="btn__position"> 
                     <a class="button1 btn fw-light" id="btn_begin" autofocus> Comenzar </a>
               </div>
            </div>
         </div>
      </div>
   `;
	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   if (e.target.matches("#view-splash #btn_begin") || e.target.matches("#view-splash #btn_begin *")) {
      playAudio(`correct_answer2.mp3`);
      route("login");
   }
})
//#endregion FUNCIONES LOGICAS
