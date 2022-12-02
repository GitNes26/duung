export default class SideBar {
   constructor(User) {
      this.role_id = User.role_id;
   }
   
   $aside = document.querySelector("aside")
   menus = [
      {menu_id:1, icon:"fa-solid fa-puzzle-piece", name: "Administrativo", id_father:0, path: "#"},
      {menu_id:2, icon:"fa-light fa-ghost", name: "Usuarios", id_father:1, path: "#"},
      {menu_id:3, icon:"fa-light fa-ghost", name: "Preguntas", id_father:1, path: "#"},
      {menu_id:4, icon:"fa-light fa-ghost", name: "Logros", id_father:1, path: "#"},
   ]

   getMenus = async () => {
      console.log("el rellenarSideBar");
      // menus_sidebar.slideUp(1000);
      //   let perfil_id = Number(Cookies.get("dpnstash_perfil_id"));
      
      //   let data = { accion: "mostrar_mis_menus", perfil_id };
      //   const ajaxResponse = await peticionAjaxAsync(url_modelo_menu_app, data);
      //   const objResponse = ajaxResponse.Datos;
      const objResponse = this.menus
      console.log(objResponse);
      let menus_sidebar = "";
      let father_menus = objResponse.filter((menu) => menu.id_father == 0);
      father_menus = father_menus.sort().map((father_menu) => {
         console.log(father_menu);
         menus_sidebar += `
            <li class="nav-item  mb-3">
               <a href="#" class="nav-link">
                  <i class="nav-icon ${father_menu.icon}"></i>
                  <p>
                  ${father_menu.name}
                     <i class="right fas fa-angle-left"></i>
                     </p>
               </a>`;
         let children_menus = objResponse.filter(
            (menu) => menu.id_father == father_menu.menu_id
            );
            children_menus = children_menus.sort().map((child_menu) => {
            menus_sidebar += `
                  <ul class="nav nav-treeview text-sm">
                     <li class="nav-item">
                        <a href="/${child_menu.path}" class="nav-link">
                              <i class="nav-icon ${child_menu.icon} text-sm"></i>
                              <p>${child_menu.name}</p>
                        </a>
                     </li>
                  </ul>`;
         });
         menus_sidebar += `</li>`;
      });
      return menus_sidebar;
   };

   sideBar = async () => {
      console.log("el sidebar");
      let sidebar = `
         <!-- Brand Logo -->
         <a
            href="/admin/index.html"
            class="brand-link text-md"
            title="Return to Admin page"
         >
            <img
               src="/assets/images/logo_duung.png"
               alt="Logo DUUNG"
               class="brand-image"
               style="opacity: 0.8"
            />
            <span class="ml-3 fw-bold">DUUNG</span>
            <span class="brand-text fw-light">Administrativo</span>
         </a>

         <!-- Sidebar -->
         <div class="sidebar">
            <!-- Mi Perfil -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
               <div class="info">
                  <a class="d-block nav-link" href="./profile.php">
                     <i class="nav-icon fa-solid fa-id-card fa-lg"></i>
                     <span class="fw-bold text-normal"
                        >&nbsp;&nbsp;Profile</span
                     >
                  </a>
               </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
               <ul
                  id="menus_sidebar"
                  class="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
               >
               <!-- CATÁLOGOS -->
      `;
      sidebar += await this.getMenus();
               
      sidebar +=`
               </ul>
            </nav>
            <!-- /.sidebar-menu -->
         </div>
      `;

      this.$aside.innerHTML = sidebar;
   };
}