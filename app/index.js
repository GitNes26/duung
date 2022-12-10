import { App } from "./App.js";
import { CloseOffline, isOnline, Offline } from "./components/Offline.js";
import { getCookie } from "./helpers/helpers.js";

const audio_theme = document.querySelector("#audio_theme")
audio_theme.volume = 0.006;
const bubblesArea = document.querySelector("#bubblesArea")
let ObjRound = [];

// setInterval(()=>{
//    if (getCookie("musicSound"))audio_theme.muted=true;
//    else audio_theme.muted=false;
// },1000)

// document.querySelector("#root").addEventListener("mouseover", () => {
//    audio_theme.muted=false;
// })
// bubblesArea.addEventListener("mouseover", () => {
//    audio_theme.muted=false;
// })
// document.addEventListener("mouseover", () => {
//    audio_theme.muted=false;
// })
// document.addEventListener("click", () => {
//    audio_theme.muted=false;
// })
// window.addEventListener("mouseover", () => {
//    audio_theme.muted=false;
// })
// audio_theme.play();

// navigator.addEventListener("online",() => console.log("la app esta en linea"));
// navigator.addEventListener("offline",() => console.log("la app NO esta en linea"));


setInterval(() => {
   if (!navigator.onLine && isOnline) { console.log('offline');  Offline(); }
   else if (navigator.onLine && !isOnline) { console.log('online'); CloseOffline(); }
}, 1000);

document.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",App);
document.addEventListener("DOMContentLoaded", () => audio_theme.muted=false )
