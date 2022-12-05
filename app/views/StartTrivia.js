import { route } from "../helpers/helpers.js";

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
export function StartHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Comenzar Trivia`;
   addStyles();
}

export function Start() {
	const $container = d.createElement("div");
	$container.innerHTML = `
      <div class="context">
         <main class="bloquePrincipal">
            <div class="position-relative">
               <h1 class="position-absolute title__p1 start-50 translate-middle-x">Comenzar Trivia</h1>
               <img class="position-absolute  start-50 translate-middle-x img__central" src="/app/assets/images/trivia.png"/>
               <div class="position-absolute  start-50 translate-middle-x button__central" >
                  <img id="btn_start-start" class="push button__size" type="button"  src="/app/assets/images/play2.png" width="130px;"/>
               </div>
            </div>
         </main> 
      </div>
   `;
	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   if (e.target.matches("#btn_start-start") || e.target.matches("#btn_start-start *")) {
      route("choose-game");
   }
})
//#endregion FUNCIONES LOGICAS
