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
   console.log(hash);
   await Loader();

   $root.innerHTML = null;
   if (!hash || hash === "#/") {
      await SplashHeaders();
      await $root.appendChild(Splash());
   } else if (hash === "#/login") {
      await LoginHeaders();
      $root.innerHTML = await Login();
      d.querySelector("#btn_chk_login").click();
   } else if (hash === "#/signup") {
      await LoginHeaders();
      $root.innerHTML = await Login();
   } else if (hash === "#/main") {
      await MainHeaders();
      await $root.appendChild(Main());
   } 
   
   else {

   }
   CloseLoader();
}