export function SideBar() {
   const $sidebar = document.createElement("div")
   $sidebar.id = "navbar";
   $sidebar.innerHTML = `
      <nav class="position__nav">
         <div class="container-fluid">
            <a class="navbar-brand">  
               <button type="button" class="hamburger animated fadeInLeft is-closed" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  <span class="hamb-top"></span>
                  <span class="hamb-middle"></span>
                  <span class="hamb-bottom"></span>
               </button>
            </a>
         </div>
      </nav>
         
      <div class="col-auto px-0 ">
         <div style="width:300px;" class=" offcanvas  offcanvas-start b__lateral " data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
            <!--  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5> -->
            </div>
         
         
            <div class="">
               <div class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                  <nav class="nav flex-column">
                     <a class="nav-link active " aria-current="page" href="#">
                        <img src="/app/assets/images/2.png"   class="ico__principal">
                     </a>
      

                     <div class="d-grid">
                     <a class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#/main"> <i class="fas fa-home icon"></i>Home</a>

                     <a class="e__sidebar1 d-inline-block text-truncate purpleScroll" data-bs-parent="#sidebar" href="#/choose-game"> <i class="fas fa-solid fa-gamepad icon"></i></i>Area de juego</a>

                     <a class="e__sidebar1 d-inline-block text-truncate greenScroll btn_score" data-bs-parent="#sidebar" href="#/score"> <i class="fas fa-solid fa-coins icon"></i>Score</a>
                     <a class="e__sidebar1 d-inline-block text-truncate yellowScroll btn_cultiva" data-bs-parent="#sidebar" href="#/cultiva"> <i class="fas fa-solid fa-brain icon"></i>Cultiva tu mente</a>
                     <a class="e__sidebar1 d-inline-block text-truncate pinkScroll btn_profile" data-bs-parent="#sidebar" href="#/profile"> <i class="fas fa-solid fa-user icon"></i>Perfil</a>
                     <a class="e__sidebar1 d-inline-block text-truncate blueScroll btn_configuracion" data-bs-parent="#sidebar" href="#/configuracion"> <i class="fas fa-solid fa-wrench icon"></i>Configuraciones</a>

                     <a id="btn_logout" class="e__sidebar1 d-inline-block text-truncate logout" data-bs-parent="#sidebar"> <i class="fas fa-sign-out-alt icon"></i>Cerrar Sesión</a>
                     </div>
                     
                  </nav>
               </div>
            </div>
         </div>
      </div>
   `;
   return $sidebar;
}