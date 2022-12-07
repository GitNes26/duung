import api from "../helpers/api.js";
import { GET_fetchRequestAsync } from "../helpers/fetchRequest.js";
import { getId, getToken, route } from "../helpers/helpers.js";

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
export function ScoreHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG | Puntuación`;
   addStyles();
}

export  function Score(props) {
   console.log("score",props);
   // const data = await fillData();
	const $content = d.createElement("div");
   $content.id = "view-score";
	$content.innerHTML = `
//    <div class="context">
//    <div class="position-relative">
//       <img src="/app/assets/images/Viñetas/Score.png" class="circlePurple position-absolute top-0 end-0" />
//    </div>

//    <main class="bloquePrincipal">
//       <div class="space__cardSc">
//          <h1 class="text-center title__Sc">Score</h1>
//          <div class="bg__cardSc contenedor-light">

//             <div class="col-md-12">

//                <div class="row">
//                   <div class="col">
//                      <div class="card push item__Sc" style="border-radius:20px;">
//                         <div class="card-body text-center">
//                            <h5 class="card-title fw-light">${props.game_title}</h5>
//                            <div class="row">
//                               <div class="col-md-3">
//                                  <img class="d-md-block d-none img__Sc" src="app/assets/images/9.png" />
//                               </div>
//                               <div class="col-md-9">
//                                  <div class="progress">
//                                     <div class="progress-bar bg-info" role="progressbar" style="width: ${props.game_rate}%;"
//                                        aria-valuenow="${props.game_rate}" aria-valuemin="0" aria-valuemax="100">${props.game_rate}%</div>
//                                  </div>

//                                  <div class="bloc__sc1">
//                                     <p class="fw-light">High Score: ${props.game_score}</p>
//                                     <p class="fw-light bloc__sc2">Last Score: 500</p>
//                                  </div>
//                               </div>
//                            </div>

//                         </div>
//                      </div>
//                   </div>
//                </div>

//             </div>

//          </div>
//       </div>

//    </main>
// </div>
   `;
	return $content;
}
//#endregion FUNCIONES DE RENDERIZADO
//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   // if (e.target.matches("#view-score #btn_aceptar_profile") || e.target.matches("#view-score #btn_aceptar_profile *")) {
   //    fillData();
   // }
})
// export const fillData = async () =>{
//    const res= await GET_fetchRequestAsync(`${api.USERS}/${getId()}`,api.GET,getToken());
//    let obj_res = res.data[0];
//    // const output_nom_us = d.querySelector("#view-profile #output_nom_us")
//    // output_nom_us.textContent =obj_res.username;
//    return obj_res;
// }
//#endregion FUNCIONES LOGICAS
export const getScore = async () =>{
   const res= await GET_fetchRequestAsync(`${api.GAMES}`,api.GET,getToken());
   console.log(res);
   // let obj_res = res.data[0];
   // // const output_nom_us = d.querySelector("#view-profile #output_nom_us")
   // // output_nom_us.textContent =obj_res.username;
   // console.log(obj_res);
   // return obj_res;
}
