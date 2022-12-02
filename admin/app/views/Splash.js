const d = document;

function links() {
   const $head = d.createElement("head");
   $head.innerHTML = `
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>DUUNG</title>

      <!-- METAS PARA PWA -->
      <meta name="description" content="Bienvenid@s a DUUNG donde aprenderas...">
      <meta name="theme-color" content="#F0DB4F">
      <meta name="MobileOptimized" content="width">
      <meta name="HandheldFriendly" content="true">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <link rel="shortcut icon" type="image/png" href="/favicon.ico">
      <link rel="apple-touch-icon" href="/favicon.ico">
      <link rel="apple-touch-startup-image" href="/favicon.ico">
      <link rel="manifest" href="/manifest.json">
      <!-- METAS PARA PWA -->

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

      <link rel="stylesheet" href="/app/assets/css/style.css"/>
      <link rel="stylesheet" href="/app/assets/css/fondo.css"/>
      <!-- JQuery 6 -->
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
			referrerpolicy="no-referrer"
		></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      <!-- FontAwesome 6 -->
		<link
			rel="stylesheet"
			href="https://site-assets.fontawesome.com/releases/v6.1.0/css/all.css"
		/>

		<!-- SweetAlert2 -->
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css"
			referrerpolicy="no-referrer"
		/>
   `;
   return $head;
}
function styles() {
   const $styles = d.createElement("style");
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
   return $styles;
}
export function SplashHeaders() {
   const $head = d.querySelector("head");
   const $fragment = d.createDocumentFragment();
   $head.innerHTML = '';
   $fragment.appendChild(links());
   $fragment.appendChild(styles());
   $head.appendChild($fragment);
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
                     <a href="#/login" class="button1 btn fw-light" autofocus> Comenzar </a>
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

const btn = d.querySelector("button")
// btn.addEventListener("click", () => console.log("click"))
