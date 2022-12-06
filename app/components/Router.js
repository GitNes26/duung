import api from "../helpers/api.js";
import { fetchRequest } from "../helpers/fetchRequest.js";
import { CloseLoader, Loader } from "./Loader.js";
import { LoginHeaders, Login } from "../views/Login.js";
import { SplashHeaders, Splash } from "../views/Splash.js";
import { MainHeaders, Main } from "../views/Main.js";
import { Start, StartHeaders } from "../views/StartTrivia.js";
import { ChooseGame, ChooseGameHeaders, fillData_chooseGame } from "../views/ChooseGame.js";
import { Game, GameHeaders } from "../views/Game.js";

const d = document;
const w = window;
const $root = document.getElementById("root");

export async function Router() {
   // const $back_page = navigation.back()
   
   let {hash} = location; 
   console.log(hash);
   await Loader();

   $root.innerHTML = null;
   if (!hash || hash === "#/") {
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
      await MainHeaders();
      await $root.appendChild(Main());
   } else if (hash === "#/start") {
      await StartHeaders();
      await $root.appendChild(Start());
   } else if (hash === "#/choose-game") {
      await ChooseGameHeaders();
      await $root.appendChild(ChooseGame());
      await fillData_chooseGame();
   } else if (hash.includes("#/game")) {
      await GameHeaders();
      await $root.appendChild(Game());
   } 
   
   else {
      $root.innerHTML = `
      <h2> mostar pagina de Error 404 </h2>
      <a class="btn btn-primary" href="/">Regresar a la pagina anterior</a>
      <a class="btn btn-primary" href="/">Regresar al inicio</a>`;
   }
   CloseLoader();
}