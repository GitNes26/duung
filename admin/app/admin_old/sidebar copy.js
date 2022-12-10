const 
   $sidebar = document.getElementById("sidebar"),
   // $sidebar_template = document.getElementById("sidebar_template").content,
   $menus = document.getElementById("menus"),
   // $menu_template = document.getElementById("menu_template").content,
   // $menu_child_template = document.getElementById("menu_child_template").content,
   $fragment = document.createDocumentFragment()
;




const menus = [
   {menu_id:1, icon:"'fa','fa-menu'", name: "Administrativo", id_father:0, path: "#"},
   {menu_id:2, icon:"'fa','fa-menu'", name: "Usuarios", id_father:1, path: "#"},
   {menu_id:3, icon:"'fa','fa-menu'", name: "Preguntas", id_father:1, path: "#"},
   {menu_id:4, icon:"'fa','fa-menu'", name: "Logros", id_father:1, path: "#"},
]

const rellenarSideBar = async () => {
   // menus_sidebar.slideUp(1000);
  let perfil_id = Number(Cookies.get("dpnstash_perfil_id"));
   //   document.cookie.replace(
   //     /(?:(?:^|.*;\s*)dpnstash_perfil_id\s*\=\s*([^;]*).*$)|^.*$/,
   //     "$1"
   //   );
  let data = { accion: "mostrar_mis_menus", perfil_id };
  const ajaxResponse = await peticionAjaxAsync(url_modelo_menu_app, data);
  menus_sidebar.html("");
  const objResponse = ajaxResponse.Datos;
  let menus = "";
  let menus_padres = objResponse.filter((menu) => menu.id_padre == 0);
  menus_padres = menus_padres.sort().map((menu_padre) => {
    menus += `
        <li class="nav-item  mb-3">
          <a href="#" class="nav-link">
              <i class="nav-icon ${menu_padre.icono}"></i>
              <p>
                ${menu_padre.descripcion}
                <i class="right fas fa-angle-left"></i>
              </p>
          </a>`;
    let menus_hijos = objResponse.filter(
      (menu) => menu.id_padre == menu_padre.id_menu
    );
    menus_hijos = menus_hijos.sort().map((menu_hijo) => {
      menus += `
              <ul class="nav nav-treeview text-sm">
                <li class="nav-item">
                    <a href="${URL_ADMIN}/${menu_hijo.path_archivo}" class="nav-link">
                        <i class="nav-icon ${menu_hijo.icono} text-sm"></i>
                        <p>${menu_hijo.descripcion}</p>
                    </a>
                </li>
              </ul>`;
    });
    menus += `</li>`;
  });
  menus_sidebar.append(menus);
  menus_sidebar.slideDown(1000);
};
if (menus_sidebar.length > 0) rellenarSideBar();

const init = () => {

   let father_menus = menus.filter((menu) => menu.id_father == 0);
  //  console.log("🚀 ~ file: sidebar.js ~ line 23 ~ init ~ father_menus", father_menus)
   father_menus = father_menus.sort().map((father_menu) => {
      $menu_template.querySelector("a").href = father_menu.path;
      $menu_template.querySelector("i.nav-icon").classList.add(father_menu.icon);
      $menu_template.querySelector("p").textContent = father_menu.name;

      let children_menus = menus.filter((menu) => menu.id_father == father_menu.menu_id);
      // console.log("🚀 ~ file: sidebar.js ~ line 30 ~ father_menus=father_menus.sort ~ children_menus", children_menus)
      children_menus = children_menus.sort().map((child_menu) => {
         $menu_child_template.querySelector("a").href = child_menu.path;
         $menu_child_template.querySelector("i").classList.add(child_menu.icon);
         $menu_child_template.querySelector("p").textContent = child_menu.name;

         let $clone_child = document.importNode($menu_template,true);
         $menu_template.querySelector("ul.trrr").appendChild($clone_child);
      });
      
      let $clone = document.importNode($menu_template,true);
      $fragment.appendChild($clone);

      // let 
      //    $li_nav_item = document.createElement('li'),
      //    $a_nav_link = document.createElement('a'),
      //    $i_nav_icon = document.createElement('i'),
      //    $p_nav = document.createElement('p'),


      //    $ul_child_nav = document.createElement('ul'),
      //    $li_child_nav_item = document.createElement('li'),
      //    $a_child_nav_link = document.createElement('a'),
      //    $i_child_nav_icon = document.createElement('i'),
      //    $p_child
      ;
   })
   $menus.appendChild($fragment)

}
init();