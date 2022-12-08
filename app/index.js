import { App } from "./App.js";

const audio_theme = document.querySelector("#audio_theme")
audio_theme.volume = 0.01;
const bubblesArea = document.querySelector("#bubblesArea")
let ObjRound = [];

document.querySelector("#root").addEventListener("mouseover", () => {
   audio_theme.muted=false;
})
bubblesArea.addEventListener("mouseover", () => {
   audio_theme.muted=false;
})
document.addEventListener("mouseover", () => {
   audio_theme.muted=false;
})
document.addEventListener("click", () => {
   audio_theme.muted=false;
})
window.addEventListener("mouseover", () => {
   audio_theme.muted=false;
})
// audio_theme.play();

// navigator.addEventListener("online",() => console.log("la app esta en linea"));
// navigator.addEventListener("offline",() => console.log("la app NO esta en linea"));

document.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",App);
document.addEventListener("DOMContentLoaded", () => audio_theme.muted=false )
