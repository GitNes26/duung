import api from "../helpers/api.js";
import { fetchRequest } from "../helpers/fetchRequest.js";
import { CloseLoader, Loader } from "./Loader.js";
import { LoginHeaders, Login } from "../views/Login.js";
import { SplashHeaders, Splash } from "../views/Splash.js";
import { MainHeaders, Main } from "../views/Main.js";

const d = document;
const w = window;
const $root = document.getElementById("root");

export async function Router() {
   let {hash} = location; 
   // console.log(hash);
   Loader();
   $root.innerHTML = null;
   if (!hash || hash === "#/") {
      SplashHeaders();
      $root.appendChild(Splash());
   } else if (hash.includes("#/login")) {
      LoginHeaders();
      $root.innerHTML = Login();
   } else if (hash.includes("#/signup")) {
      $root.innerHTML = "<h2>Registro</h2>"
   } else if (hash.includes("#/main")) {
      MainHeaders();
      $root.appendChild(Main());
   } else {

   }
   CloseLoader();
}