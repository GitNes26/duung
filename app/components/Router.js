import api from "../helpers/api.js";
import { fetchRequest } from "../helpers/fetchRequest.js";
import { CloseLoader, Loader } from "./Loader.js";
import { LoginHeaders, Login } from "../views/Login.js";
import { SplashHeaders, Splash } from "../views/Splash.js";
import { MainHeaders, Main } from "../views/Main.js";
import { getRound, Start, StartHeaders } from "../views/StartTrivia.js";
import { ChooseGame, ChooseGameHeaders, fillData_chooseGame } from "../views/ChooseGame.js";
import { fillData, Profile, ProfileHeaders } from "../views/Profile.js";
import { getScore, Score, ScoreHeaders } from "../views/Score.js";
import { Cultiva, CultivaHeaders, getTips } from "../views/Cultiva.js";
import { Configuracion, ConfiguracionHeaders } from "../views/Configuracion.js";
import { Game, GameHeaders } from "../views/Game.js";
import { Finish, FinishHeaders } from "../views/FinishTrivia.js";

const d = document;
const w = window;
const $root = document.getElementById("root");

export async function Router() {
   // const $back_page = navigation.back()
   
   let {hash} = location; 
   console.log(hash);
   await Loader();

   d.querySelector(".pos__btnBack").style = "display: block"
   $root.innerHTML = null;
   if (!hash || hash === "#/") {
      d.querySelector(".pos__btnBack").style = "display: none"

      await SplashHeaders();
      await $root.appendChild(Splash());
   } else if (hash === "#/login") {
      await LoginHeaders();
      await $root.appendChild(Login());
      d.querySelector("#btn_chk_login").click();
   } else if (hash === "#/signup") {
      await LoginHeaders();
      $root.innerHTML = await Login();
   } else if (hash === "#/main") {
      d.querySelector(".pos__btnBack").style = "display: none"
      await MainHeaders();
      await $root.appendChild(Main());
   } else if (hash === "#/choose-game") {
      await ChooseGameHeaders();
      await $root.appendChild(ChooseGame());
      await fillData_chooseGame();
   } else if (hash === "#/start") {
      await StartHeaders();
      await $root.appendChild(Start());
      await getRound();
   } else if (hash === "#/game") {
      await GameHeaders();
      await $root.appendChild(Game());
   } else if (hash === "#/finish") {
      d.querySelector(".pos__btnBack").style = "display: none"
      await FinishHeaders();
      await $root.appendChild(Finish());
   }
   else if(hash === "#/profile"){
      await ProfileHeaders();
      const obj = await fillData();
      await $root.appendChild(Profile(obj));
      // $root.innerHTML="<h1>perfil</h1>"
   }else if(hash === "#/score"){
      const obj = await getScore();
      await ScoreHeaders();
      await $root.appendChild(Score(obj));
   }else if(hash === "#/cultiva"){
      const tips =await getTips();
      await CultivaHeaders();
      await $root.appendChild(Cultiva(tips));
   }else if(hash === "#/configuracion"){
      await ConfiguracionHeaders();
      await $root.appendChild(Configuracion());
   }
   
   else {
      $root.innerHTML = `
      <h2> mostar pagina de Error 404 </h2>
      <a class="btn btn-primary" href="/">Regresar a la pagina anterior</a>
      <a class="btn btn-primary" href="/">Regresar al inicio</a>`;
   }

   
   CloseLoader();
}