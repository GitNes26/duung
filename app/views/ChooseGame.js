import { SideBar } from "../components/SideBar.js";
import api from "../helpers/api.js";
import { fetchRequestAsync, GET_fetchRequestAsync } from "../helpers/fetchRequest.js";
import { getId, getToken, route, setCookie } from "../helpers/helpers.js";
import { inputValidate, showToast } from "../helpers/validates.js";

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
export function ChooseGameHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Elegir Partida`;
   addStyles();
}

export function ChooseGame() {
	const $container = d.createElement("div");
   const $context = d.createElement("div");
   const $fragment = d.createDocumentFragment();
   $container.id = "view-choose_game";

   $fragment.appendChild(SideBar());

   $context.classList.add("context");
	$context.innerHTML = `
      <main class="bloquePrincipal">
         <div class="position-relative">
            <h1
               class="position-absolute title__cardConfigurate start-50 translate-middle-x"
            >
               Crea una partida
            </h1>
            <img
               class="d-md-block d-none position-absolute start-50 translate-middle-x img__central"
               src="/app/assets/images/circles.png"
            />
            <div
               class="card position-absolute start-50 translate-middle-x shadow card__Bloc"
               style="border-radius: 50px"
            >
               <div class="card-body">
                  <div class="container">
                     <center>
                        <div>
                           <label
                              ><h4 class="subTittle__card">
                                 Materia
                              </h4></label
                           >
                           <div></div>
                           <select
                              id="select_subjets"
                              data-input-name="MATERIA"
                              class="form-select form-select-lg mb-3 fw-light"
                              style="
                                 font-size: 15px;
                                 border-radius: 20px;
                                 margin-top: 10px;
                              "
                              aria-label="form-select-lg"
                           >
                           </select>
                        </div>
                        <div>
                           <label
                              ><h4 class="subTittle__card">
                                 Intensidad
                              </h4></label
                           >
                           <div class="bloc__section">
                              <div class="row" id="difficults">
                              </div>
                           </div>
                        </div>
                        <div
                           class="b__position"
                        >
                           <img
                              id="btn_start"
                              class="b__size push"
                              type="button"
                              src="/app/assets/images/play2.png"
                           />
                        </div>
                     </center>
                  </div>
                  <!-- ------------------SI SE DESEA AGRGAR MÁS FORMAS DE HACER PARTIDAS--------------------------------- -->
                  <!-- <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                           <div class="carousel-indicators">
                           <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                           <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                           <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                           </div>
                           <div class="carousel-inner size__contentCarrrusel">
                           <div class="carousel-item active" data-bs-interval="10000">
                              <div class="d-block w-100 space__contentCard">
                                 <h5>Patida rápida</h5>
                                 <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
                              </div>
                           </div>
                           <div class="carousel-item" data-bs-interval="2000">
                              <div class="d-block w-100 space__contentCard">
                                 <h5>Cultura General</h5>
                                 <p>Algún contenido placeholder representativo para la segunda diapositiva.</p>
                              </div>
                           </div>
                           <div class="carousel-item">
                              <div class="d-block w-100 space__contentCard">
                                 <h5>Por Materia</h5>
                                 <p>Algún contenido placeholder representativo para la tercera diapositiva.</p>
                              </div>
                           </div>
                           </div>
                           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span class="visually-hidden">Anterior</span>
                           </button>
                           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
                           <span class="visually-hidden">Siguiente</span>
                           </button>
                  </div> -->
               </div>
            </div>
         </div>
      </main>
   `;
   $fragment.appendChild($context);

   $container.innerHTML = null
   $container.appendChild($fragment);
	return $container;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
let option_difficult = -1;



d.addEventListener("click", function(e) {
   if (e.target.matches("#view-choose_game #btn_start") || e.target.matches("#view-choose_game #btn_start *")) {
      beginGame();
   }

   if (e.target.matches("#view-choose_game [name='option_difficult']")) {
      option_difficult = e.target.value

   }
})

export const fillData_chooseGame = async () => {
   let objResponse = await GET_fetchRequestAsync(api.SUBJETS, api.GET, getToken());
   const subjets = objResponse.data;
   objResponse = await GET_fetchRequestAsync(api.DIFFICULTS, api.GET, getToken());
   const difficults = objResponse.data;

   let options = `<option class="fw-light" value="-1">Elige una opción...</option>`;
   subjets.map(s => {
      options += `<option class="fw-light" value="${s.subjet_id}">${s.subjet_name}</option>`;
   });
   d.querySelector("#select_subjets").innerHTML = options;

   let chk_difficults ="";
   difficults.map(d => {
      chk_difficults += `
         <div class="col-md-4">
            <input type="radio" class="btn-check" name="option_difficult" id="d_${d.difficult_id}" value="${d.difficult_id}" data-name="${d.difficult_name}" autocomplete="off">
            <label class="btn btn-outline-dark space__section" for="d_${d.difficult_id}">${d.difficult_name}</label>
         </div>
      `;
   });
   d.querySelector("#difficults").innerHTML = null;
   d.querySelector("#difficults").innerHTML = chk_difficults;   
}

const beginGame = async () => {
   let subjet = d.querySelector("#select_subjets");
   let difficult = d.querySelector("input[name='option_difficult']");

   if (!inputValidate(subjet)) return;
   if (option_difficult < 0) showToast('error',"campo INTENISDAD vacio.");

   // const difficult_name = d.querySelector(`#d_${option_difficult}`).dataset.name
   // const game_title = `${subjet.textContent.toUpperCase()} - ${difficult_name}`;
   
   const data = {
      game_user_id: getId(),
      subjet_id: subjet.value, 
      difficult_id: option_difficult,
      game_description: '',
   }
   // return console.log(data);
   const fetchResponse = await fetchRequestAsync(api.GAMES,api.POST,data,getToken())
   const objResponse = fetchResponse.data;
   console.log("🚀 ~ file: ChooseGame.js:212 ~ beginGame ~ objResponse", objResponse)
   setCookie("active_game",objResponse.game_id);
   setCookie("active_round",JSON.stringify(objResponse));
   route("start")
}
//#endregion FUNCIONES LOGICAS
