export default class NavBar {
   constructor(User) {
      this.username = User.username;
   }
   
   navBar = () => {
      const $nav = document.querySelector("nav");
      let navbar = `
         <!-- Left navbar links -->
         <ul class="navbar-nav">
            <li class="nav-item">
               <a
                  class="nav-link"
                  data-widget="pushmenu"
                  href="#"
                  role="button"
                  ><i class="fas fa-bars"></i
               ></a>
            </li>
         </ul>

         <!-- Right navbar links -->
         <ul class="navbar-nav ml-auto">
         <!-- Perfil -->
            <li class="nav-item">
               <div class="user-panel d-flex">
                  <div class="info">
                     <span class="d-block text-decoration-none text-bold"
                        ><i class="">${this.username}</i></span
                     >
                     </div>
               </div>
            </li>
            <!-- Btn Logout -->
            <li class="nav-item ml-3">
               <a
                  href="#"
                  id="btn_logout"
                  class="btn btn-outline-danger btn_cerrar_sesion"
                  title="Logout"
                  ><i class="fas fa-door-closed"></i
                  ></a>
            </li>
         </ul>
      `;
      $nav.innerHTML = navbar;
   };
}