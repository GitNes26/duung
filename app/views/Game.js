import { SideBar } from "../components/SideBar.js";
import { getCookie, route } from "../helpers/helpers.js";

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
export function GameHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Partida`;
   addStyles();
}

export function Game() {
	const $container = d.createElement("div");
   const $context = d.createElement("div");
   const $fragment = d.createDocumentFragment();

   $container.id = "view-game";

   $fragment.appendChild(SideBar());

   $context.classList.add("context");
	$context.innerHTML = `
      <div class="shadow reloj__position">
         <p class="reloj__let">00:00</p>
      </div>

      <main class="bloquePrincipal">
         <div class="position-relative">
            <div
               class="card__BlocGame position-absolute start-50 translate-middle-x"
            >
               <div class="row">
                  <center
                     class="col-md-12"
                     style="
                        background-color: #ffffff;
                        border-radius: 20px;
                        height: 380px;
                        padding: 100px;
                     "
                  >
                     <h1 class="fw-light text1__game">¿La pregunta es?</h1>
                  </center>
               </div>
               <br />
               <div class="row">
                  <center
                     class="col-md-12 push"
                     type="button"
                     style="
                        background-color: #ffffff;
                        border-radius: 50px;
                        height: 80px;
                        margin-top: 10px;
                     "
                  >
                     <div style="padding: 20px" class="row text-start">
                        <div
                           class="col-md-2 col-2"
                           style="
                              background-color: #dc0084;
                              border-radius: 50%;
                              width: 40px;
                              height: 40px;
                              padding: 5px;
                              padding-left: 15px;
                              color: #ffffff;
                           "
                        >
                           a)
                        </div>
                        <h4 class="fw-light col-md-10 col-10 text2__game">
                           ¿La pregunta es?
                        </h4>
                     </div>
                  </center>

                  <center
                     class="col-md-12 push"
                     type="button"
                     style="
                        background-color: #ffffff;
                        border-radius: 50px;
                        height: 80px;
                        margin-top: 10px;
                     "
                  >
                     <div style="padding: 20px" class="row text-start">
                        <div
                           class="col-md-2 col-2"
                           style="
                              background-color: #0088dc;
                              border-radius: 50%;
                              width: 40px;
                              height: 40px;
                              padding: 5px;
                              padding-left: 15px;
                              color: #ffffff;
                           "
                        >
                           b)
                        </div>
                        <h4 class="fw-light col-md-10 col-10">
                           ¿La pregunta es?
                        </h4>
                     </div>
                  </center>

                  <center
                     class="col-md-12 push"
                     type="button"
                     style="
                        background-color: #ffffff;
                        border-radius: 50px;
                        height: 80px;
                        margin-top: 10px;
                     "
                  >
                     <div style="padding: 20px" class="row text-start">
                        <div
                           class="col-md-2 col-2"
                           style="
                              background-color: #1adc00;
                              border-radius: 50%;
                              width: 40px;
                              height: 40px;
                              padding: 5px;
                              padding-left: 15px;
                              color: #ffffff;
                           "
                        >
                           c)
                        </div>
                        <h4 class="fw-light col-md-10 col-10">
                           ¿La pregunta es?
                        </h4>
                     </div>
                  </center>
               </div>
            </div>
         </div>
         <img
            class="d-md-block d-none position-absolute start-50 translate-middle-x img__central1"
            src="/app/assets/images/circles.png"
         />
      </main>
   `;
   $fragment.appendChild($context);

   $container.innerHTML = null;
   $container.appendChild($fragment);
   console.log(JSON.parse(getCookie("round")));
	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   if (e.target.matches("#view-game #btn_start") || e.target.matches("#view-game #btn_start *")) {
      console.log("game");
      // route("start-game");
   }
});

const secondsToString = (seconds) => {
   let hour = Math.floor(seconds / 3600);
   hour = (hour < 10)? '0' + hour : hour;
   let minute = Math.floor((seconds / 60) % 60);
   minute = (minute < 10)? '0' + minute : minute;
   let second = seconds % 60;
   second = (second < 10)? '0' + second : second;
   return `${minute}:${second}`;
   return hour + ':' + minute + ':' + second;
}

let time_of_question = 30;
const Counter = () => {
   setInterval(() => {
      if (time_of_question < 0) time_of_question=30;
      let time = secondsToString(time_of_question)
      d.querySelector("#view-game .reloj__let").textContent = time;
      time_of_question -=1;
   }, 1000);
}
//#endregion FUNCIONES LOGICAS
