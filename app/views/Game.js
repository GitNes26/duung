import { Item } from "../components/Item.js";
import { SideBar } from "../components/SideBar.js";
import { getCookie, route, setCookie } from "../helpers/helpers.js";
import { getRound } from "./StartTrivia.js";

const d = document;
let round_pos;
let answers_correct;
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
   round_pos = 0;
   let round_1 = JSON.parse(getCookie("round"))
   round_1 = round_1[round_pos];
   answers_correct = 0;
   setCookie("answers_correct", answers_correct)
   Counter(round_1.item_time);
	const $container = d.createElement("div");
   const $context = d.createElement("div");
   const $fragment = d.createDocumentFragment();

   $container.id = "view-game";

   $fragment.appendChild(SideBar());

   

   $context.classList.add("context");
	let item = `
      <div class="shadow reloj__position">
         <p class="reloj__let">00:00</p>
      </div>

      <main class="bloquePrincipal">
         <div class="position-relative" id="item_container">`;

            item += Item(round_1);
         
   item +=`
         </div>
         <img
            class="d-md-block d-none position-absolute start-50 translate-middle-x img__central1"
            src="/app/assets/images/circles.png"
         />
      </main>
   `;
   $context.innerHTML = item;
   $fragment.appendChild($context);

   $container.innerHTML = null;
   $container.appendChild($fragment);
	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   if (e.target.matches("#view-game .btn_answer") || e.target.matches("#view-game .btn_answer *")) {
      itemAnswer(e.target);
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

const Counter = (time_question=5) => {
   if (location.hash != "#/game") return
   let counter = setInterval(() => {
      if (location.hash != "#/game") clearInterval(counter);

      if (time_question == 0) {
         clearInterval(counter);
         nextItem();
      }
      let time = secondsToString(time_question)
      d.querySelector("#view-game .reloj__let").textContent = time;
      time_question -=1;
   }, 1000);
}

const showItem = async(round) => {
   await console.log("icono de respuesta correcta | incorrecta");
   setTimeout(() => {
      const $item_container = d.querySelector("#item_container");
      if (!round) return
      $item_container.innerHTML = Item(round)
      Counter(round.item_time);
   }, 350);
}

const itemAnswer = (answer_element) => {
   let element = answer_element.parentElement;
   while (!element.classList.contains("btn_answer")) element = element.parentElement;
   let time_clock = d.querySelector("#view-game .reloj__let").textContent
   if (time_clock == "00:00") {
      nextItem();
   }
   if (element.dataset.c == "0") console.log("incorrecta");
   
   console.log("correcta");
   answers_correct++;
   setCookie("answers_correct", answers_correct)
   nextItem()
}


const nextItem = () => {
   round_pos++;
   let rounds = JSON.parse(getCookie("round"))
   if (round_pos == rounds.length) route("finish"); //console.log("fin de las preguntas pasar a la vista de resultados y actualizar puntos y tabla de game");
   const round = rounds[round_pos];
   showItem(round)
}
//#endregion FUNCIONES LOGICAS
