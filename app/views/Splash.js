const d = document;

//#region FUNCIONES DE RENDERIZADO
function addStyles() {
	const $styles = d.querySelector("head style");
   $styles.innerHTML = `
      .button1{
         background-color:var(--pinkHard);
         color: #fff;
         border-radius: 20px;
         width: 300px;
         font-size: 20px;
         margin-left: 20px;
      }
   
      .button1:hover {
         color: #fff;
         background-color:#e10087;
      }
      
      @media (max-width: 600px) {
         .button1{
            background-color:var(--pinkHard);
            color: #fff;
            border-radius: 20px;
            width: 200px;
            font-size: 20px;
         }
      }
      
      @media (max-width: 400px) {
         .button1{
            background-color:var(--pinkHard);
            color: #fff;
            border-radius: 20px;
            width: 200px;
            font-size: 15px;
         }
      }
   `;
}
export function SplashHeaders() {
   const $head = d.querySelector("head");
   $head.querySelector("title").textContent = `DUUNG`;
   addStyles();
}

export function Splash() {
	const $contnet = d.createElement("div");
	$contnet.innerHTML = `
      <div class="context">

         <div class="bloquePrincipal">
            <div class="bloqueCenter position-relative">
               <div class="img__position">
                  <img src="/app/assets/images/1.png" class="image1"/>  
               </div>
               <div class="btn__position"> 
                     <a class="button1 btn fw-light btn_start" autofocus> Comenzar </a>
               </div>
            </div>
         </div>
      </div>

      <div class="areaPurple">
         <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   `;
	return $contnet;
}
//#endregion FUNCIONES DE RENDERIZADO


//#region FUNCIONES LOGICAS
d.addEventListener("click", function(e) {
   console.log("click");
   if (e.target.matches(".btn_start") || e.target.matches(".btn_start *")) {
      console.log("btn_sat");
      location.assign("#/loginss")
   }
})
//#endregion FUNCIONES LOGICAS
