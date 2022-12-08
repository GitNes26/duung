import { SideBar } from "../components/SideBar.js";
import api from "../helpers/api.js";
import { fetchRequestAsync, GET_fetchRequestAsync } from "../helpers/fetchRequest.js";
import { getCookie, route, getToken, setCookie} from "../helpers/helpers.js";

const d = document;

//#region FUNCIONES DE RENDERIZADO
function addStyles() {
	const $styles = d.querySelector("head style");
   $styles.innerHTML = `
      .input__p{margin-top: 5px;border-radius:20px;border:1px #BB72DD;background-color: #BB72DD;}
      .button__p{border-radius:20px;border:1px #49006B;background-color: #49006B;padding-left: 90px;padding-right: 90px;color: var(--white);-webkit-transition: all 0.3s ease;transition: all 0.3s ease;margin-top: 15px;margin-left: 8px;}
      .button__p:hover{color: var(--white);border:1px #60028c;background-color: #60028c; -webkit-transform: scale(1.1) !important; transform: scale(1.04) !important;}
      .circle__bloc1{border-radius:50%;width:200px;height:200px;margin-top: 20px;margin-left: -20px;}
      .space__section{height:60px;padding-top:15px;border-radius:20px;margin-top:1px;}
      @media (max-width: 900px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left: 90px;margin-top:-10px;}}
      @media (max-width: 550px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-right: 90px;}}
      @media (max-width: 300px) {.circle__bloc1{border-radius:50%;width:150px;height:150px;margin-left:26px;}
      .button__p{border-radius:20px;border:1px #49006B;background-color: #49006B;padding-left: 5px;padding-right: 5px;width: 120px;height: 30px;font-size: 10px;color: var(--white);-webkit-transition: all 0.3s ease;transition: all 0.3s ease;}
      .button__p:hover{color: var(--white);border:1px #60028c;background-color: #60028c; -webkit-transform: scale(1.1) !important; transform: scale(1.04) !important;}}
   `;
}
export function StartHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Comenzar Trivia`;
   addStyles();
}

export function Start() {
	const $container = d.createElement("div");
	const $context = d.createElement("div");
   const $fragment = d.createDocumentFragment();

   $container.id = "view-start_trivia";

   $fragment.appendChild(SideBar());
   
   $context.classList.add("context");
	$context.innerHTML = `
      <main class="bloquePrincipal">
         <div class="position-relative">
            <h1 class="position-absolute title__p1 start-50 translate-middle-x">Comenzar Trivia</h1>
            <img class="position-absolute  start-50 translate-middle-x img__central" src="/app/assets/images/trivia.png"/>
            <div class="position-absolute  start-50 translate-middle-x button__central" >
               <img id="btn_start-start" class="push button__size" type="button"  src="/app/assets/images/play2.png" width="130px;"/>
            </div>
         </div>
      </main> 
   `;
   $fragment.appendChild($context);

   $container.innerHTML = null;
   $container.appendChild($fragment);
	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   if (e.target.matches("#btn_start-start") || e.target.matches("#btn_start-start *")) {
      // route("game");
      console.log(JSON.parse(getCookie("round")))
   }
})

export const getRound = async() => {
   const fetchResponse = await GET_fetchRequestAsync(`${api.GAMES}/round/${getCookie("active_round")}`, api.GET, getToken())
   const objResponse = fetchResponse.data;
   console.log("🚀 ~ file: StartTrivia.js:70 ~ fillRound ~ fetchResponse", fetchResponse)
   setCookie("round", JSON.stringify(objResponse))
};
//#endregion FUNCIONES LOGICAS
