
Cookies.set('token','1|shdai');



const
   btn_logout =  document.getElementById("btn_logout"),
   i_logout = document.querySelector("#btn_logout i")
;

btn_logout.addEventListener("mouseover", function () {
   i_logout.classList.remove("fa-door-closed");
   i_logout.classList.add("fa-door-open");
});
btn_logout.addEventListener("mouseleave" ,function () {
   i_logout.classList.remove("fa-door-open");
   i_logout.classList.add("fa-door-closed");
});

btn_logout.addEventListener("click", (e) => {
   e.preventDefault();
   // let datos = { accion: "cerrar_sesion" };
   location.href = "/";
   // fetch()

   // $.ajax({
   //    url: `${URL_BACKEND}/Usuario/App.php`,
   //    type: "POST",
   //    data: datos,
   //    dataType: "json",
   //    success: (ajaxResponse) => {
   //       if (ajaxResponse.Resultado) window.location.href = URL_BASE;
   //    },
   // });
});

$(".icon_eye").click((e) => {
   const target = $(e.target);
   target.toggleClass("fa-solid fa-eye fa-duotone fa-eye-slash");
   const input = $(`input#${target.attr('data-input')}`)
   if (target.hasClass("fa-eye")) input.prop("type","text")
   else input.prop("type","password")
})









// // const initialize = async () => {

// // }



// "use strict";
// import { cookies } from 'brownies';

// $(document).ready(() => {
//   //#region PERMISOS
//   let elementos_altas = $(`[data-permiso="altas"]`);
//   let elementos_bajas = $(`[data-permiso="bajas"]`);
//   let elementos_cambios = $(`[data-permiso="cambios"]`);
//   elementos_altas.remove();
//   elementos_bajas.remove();
//   elementos_cambios.remove();

//   //#endregion PERMISOS
// });
// const
//    id_cookie = Number(Cookies.get("dpnstash_id_usuario")),
//    permiso_lectura = Boolean(Cookies.get("dpnstash_permiso_lectura")),
//   permiso_altas = Boolean(Cookies.get("dpnstash_permiso_altas")),
//   permiso_bajas = Boolean(Cookies.get("dpnstash_permiso_bajas")),
//   permiso_cambios = Boolean(Cookies.get("dpnstash_permiso_cambios")),
//   permiso_especiales = Boolean(Cookies.get("dpnstash_permiso_especiales")),
//   pagina_actual = $("#pagina_actual").val(),
//   singular_object = $("#singular_object").val()
// ;

// //#region RUTAS AL APP DE LOS MODELOS
// const URL_BASE = $("#url_base").val(),
//   URL_ADMIN = `${URL_BASE}/Admin`,
//   URL_ADMIN_PRUEBAS = `${URL_BASE}/AdminPruebas`,
//   URL_BACKEND = `${URL_BASE}/Backend`,
//   URL_INDEX_CLINETE = `${URL_BASE}/Customer/index.php`,
//   URL_REPORTE_CLINETE = `${URL_BASE}/Customer/report.php`,

// // ----------------------------------------------------
//   URL_IMAGES = `${URL_BASE}/Images`,
// // ----------------------------------------------------


//   url_modelo_menu_app = `${URL_BACKEND}/Menu/App.php`,
//   url_modelo_usuario_app = `${URL_BACKEND}/Usuario/App.php`,
//   url_modelo_perfil_app = `${URL_BACKEND}/Perfil/App.php`,
//   url_modelo_reporteCliente_app = `${URL_BACKEND}/ReporteCliente/App.php`,
//   url_modelo_tipoReporte_app = `${URL_BACKEND}/TipoReporte/App.php`,
//   url_modelo_icono_app = `${URL_BACKEND}/Icono/App.php`,
//   url_modelo_usuario_prueba_app = `${URL_ADMIN_PRUEBAS}/backend/usuario_prueba/app.php`,

//   url_modelo_metodo_pago_app = `${URL_BACKEND}/MetodoPago/App.php`,
//   url_modelo_paquete_app = `${URL_BACKEND}/Paquete/App.php`,
//   url_modelo_consultor_app = `${URL_BACKEND}/Consultor/App.php`

//   ;

//   // ---------------------------------------------------------
//   const url_modelo_clientes_test_app = `${URL_BACKEND}/clientes_test/App.php`,
//     url_modelo_agregar_empleados_roles_app = `${URL_BACKEND}/empleados&roles_test/App.php`,
//     url_modelo_perfil_test_app = `${URL_BACKEND}/perfil_test/App.php`,
//     url_modelo_usuario_test_app = `${URL_BACKEND}/Usuario/App.php`;
//   // ---------------------------------------------------------JP/Backend/perfil_test/App.php
// //#endregion

// const UN_SEGUNDO = 1000;
// const MEDIO_SEGUNDO = 500;
// const CUARTO_SEGUNDO = 100;
// const INTERVALO_BEFORE = 5;
// const INTERVALO_COMPLETE = MEDIO_SEGUNDO;
// const TIEMPO_MOSTRAR_ALERTA_CARGANDO = 100;
// let tiempo_transcurrido = 0;

// const menus_sidebar = $("#menus_sidebar");
// const btn_close = $(".btn-close");
// const area_iconos = $("#area_iconos");

// const dialogoBlockUI = `
// <div class="card text-center" style="opacity:1 !important; width:40vw !important;">
//   <div class="card-body">
//     <div class="fw-bold h6">LOADING...</div><br>
//     <div class='spinner-border text-dark' role='status'> <span class='sr-only'></span></div>
//   </div>
// </div>
// `;
// const span_campo_obligatorio = $(".span_campo_obligatorio").html(
//   `<span class="text-danger fst-italic">&nbsp; * required</span>`
// );

// /*Select2*/
// $.fn.select2.defaults.set("language", "en");
// moment.locale("en");
// // console.log(moment.locale('es'));

// const ConfiguracionDataTable = {
//   responsive: true,
//   language: {
//     // url: "https://cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json"
//   },
//   columnDefs: [
//     {
//       className: "dt-center",
//       targets: "_all",
//     },
//   ],
//   dom: '<"row"<"col-md-6 "l> <"col-md-6"f> > rt <"row"<"col-md-6 "i> <"col-md-6"p> >',
//   lengthMenu: [
//     [5, 10, 50, 100, -1],
//     [5, 10, 50, 100, "Todos"],
//   ],
//   pageLength: 10,
//   deferRender: true,
//   aaSorting: [], //deshabilitar ordenado automatico
// };

// const rellenarSideBar = async () => {
//    menus_sidebar.slideUp(1000);
//   let perfil_id = Number(Cookies.get("dpnstash_perfil_id"));
//    //   document.cookie.replace(
//    //     /(?:(?:^|.*;\s*)dpnstash_perfil_id\s*\=\s*([^;]*).*$)|^.*$/,
//    //     "$1"
//    //   );
//   let data = { accion: "mostrar_mis_menus", perfil_id };
//   const ajaxResponse = await peticionAjaxAsync(url_modelo_menu_app, data);
//   menus_sidebar.html("");
//   const objResponse = ajaxResponse.Datos;
//   let menus = "";
//   let menus_padres = objResponse.filter((menu) => menu.id_padre == 0);
//   menus_padres = menus_padres.sort().map((menu_padre) => {
//     menus += `
//         <li class="nav-item  mb-3">
//           <a href="#" class="nav-link">
//               <i class="nav-icon ${menu_padre.icono}"></i>
//               <p>
//                 ${menu_padre.descripcion}
//                 <i class="right fas fa-angle-left"></i>
//               </p>
//           </a>`;
//     let menus_hijos = objResponse.filter(
//       (menu) => menu.id_padre == menu_padre.id_menu
//     );
//     menus_hijos.sort((a,b) => a.orden - b.orden)
//     menus_hijos.map((menu_hijo) => {
//       menus += `
//               <ul class="nav nav-treeview text-sm">
//                 <li class="nav-item">
//                     <a href="${URL_ADMIN}/${menu_hijo.path_archivo}" class="nav-link">
//                         <i class="nav-icon ${menu_hijo.icono} text-sm"></i>
//                         <p>${menu_hijo.descripcion}</p>
//                     </a>
//                 </li>
//               </ul>`;
//     });
//     menus += `</li>`;
//   });
//   menus_sidebar.append(menus);
//   menus_sidebar.slideDown(1000);
// };
// if (menus_sidebar.length > 0) rellenarSideBar();

// // /* CERRAR SESION
// let btn_cerrar_sesion = document.getElementById("btn_cerrar_sesion");
// let i = btn_cerrar_sesion.querySelector("i");

// $("#btn_cerrar_sesion").mouseover(function () {
//   i.classList.remove("fa-door-closed");
//   i.classList.add("fa-door-open");
// });
// $("#btn_cerrar_sesion").mouseleave(function () {
//   i.classList.remove("fa-door-open");
//   i.classList.add("fa-door-closed");
// });

// $("#btn_cerrar_sesion").click((e) => {
//   e.preventDefault();
//   let datos = { accion: "cerrar_sesion" };
//   $.ajax({
//     url: `${URL_BACKEND}/Usuario/App.php`,
//     type: "POST",
//     data: datos,
//     dataType: "json",
//     success: (ajaxResponse) => {
//       if (ajaxResponse.Resultado) window.location.href = URL_BASE;
//     },
//   });
// });



// function mayusculas(e) {
//   e.value = e.value.toUpperCase();
// }

// function focusSelect2(select2) {
//   select2.click(function (e) {
//     try {
//       var buscador = $(".select2-search__field");
//       buscador[0].focus();
//     } catch (e) {}
//   });
//   select2.keydown(function (e) {
//     try {
//       var buscador = $(".select2-search__field");
//       buscador[0].focus();
//     } catch (e) {}
//   });
// }

// /* --- FUNCIONES DE CAJON--- */
// function peticionAjaxGenerica(
//    url,
//    datos,
//    funcion_success_string,
//    funcion_complete_string,
//    cerrar_modal
//  ) {
//    if (cerrar_modal != false) {
//      cerrar_modal = null;
//    }
//    $.ajax({
//      type: "POST",
//      url: url,
//      data: datos,
//      dataType: "json",
//      // enctype : 'multipart/form-data',
//      // cache : false,
//      // processData: false,
//      beforeSend: () => {
//        //mostrar pantalla cargando
//        $.blockUI({
//          message: dialogoBlockUI,
//          css: { backgroundColor: null, color: "#313131", border: null },
//        });
//      },
//      success: (ajaxResponse) => {
//        if (ajaxResponse.Resultado) {
//          if (funcion_success_string != null) {
//            eval(funcion_success_string.toString());
//          }
//        } else {
//          Swal.fire({
//            icon: ajaxResponse.Icono_alerta,
//            title: ajaxResponse.Titulo_alerta,
//            text: ajaxResponse.Texto_alerta,
//            showConfirmButton: true,
//            confirmButtonColor: "#494E53",
//          });
//        }
//      },
//      error: (ajaxResponse) => {
//        Swal.fire({
//          icon: "error",
//          title: "Oops...!",
//          text: `An ever has occurred, please verify your information.`,
//          showConfirmButton: true,
//          confirmButtonColor: "#494E53",
//        });
//      },
//      complete: () => {
//        //quitar pantalla c!rgfalse
//        if (funcion_complete_string != null)
//          eval(funcion_complete_string.toString());
//        if (cerrar_modal == null) btn_close.click();
//        $.unblockUI();
//      },
//    });
// }
// function peticionAccionSinRecargar(url,datos,fun) {
// $.ajax({
// type: "POST",
// url: url,
// data: datos,
// enctype: 'multipart/form-data',
// dataType: "json",
// contentType:false,
// cache:false,
// async: true,
// processData:false,
// timeout: 600000,
// beforeSend: function () {
// //mostrar pantalla cargando
// $.blockUI({ message: `

// REALIZANDO PETICIÓN, POR FAVOR ESPERE...

// `, css: { backgroundColor: null, color: '#fff', border: null } });
// },
// success: (ajaxResponse) => {
// if (ajaxResponse.Resultado) {
//   eval(fun)
// mostrarToast(ajaxResponse.Icono_alerta,ajaxResponse.Texto_alerta);
// } else {
// Swal.fire({
// icon: "error",
// title: "Oops...!",
// text: `${ajaxResponse.Texto_alerta}`,
// showConfirmButton: true,
// confirmButtonColor: '#494E53'
// })
// }
// },
// error: (ajaxResponse) => {
// Swal.fire({
// icon: "error",
// title: "Oops...!",
// text: `Hubo un error, verifica tus datos e intenta de nuevo.`,
// showConfirmButton: true,
// confirmButtonColor: '#494E53'
// })
// },
// complete: () => {
// //quitar pantalla cargando
// $.unblockUI();
// }
// });
// }
// function peticionAjaxGenericaPau(
//    url,
//    datos,
//    funcion_success_string,
//    funcion_complete_string,
//    cerrar_modal
//  ) {
//    if (cerrar_modal != false) {
//      cerrar_modal = null;
//    }
//    $.ajax({
//      type: "POST",
//      url: url,
//      data: datos,
//      dataType: "json",
//      enctype : 'multipart/form-data',
//      cache : false,
//      processData: false,
//      beforeSend: () => {
//        //mostrar pantalla cargando
//        $.blockUI({
//          message: dialogoBlockUI,
//          css: { backgroundColor: null, color: "#313131", border: null },
//        });
//      },
//      success: (ajaxResponse) => {
//        if (ajaxResponse.Resultado) {
//          if (funcion_success_string != null) {
//            eval(funcion_success_string.toString());
//          }
//        } else {
//          Swal.fire({
//            icon: ajaxResponse.Icono_alerta,
//            title: ajaxResponse.Titulo_alerta,
//            text: ajaxResponse.Texto_alerta,
//            showConfirmButton: true,
//            confirmButtonColor: "#494E53",
//          });
//        }
//      },
//      error: (ajaxResponse) => {
//        Swal.fire({
//          icon: "error",
//          title: "Oops...!",
//          text: `An ever has occurred, please verify your information.`,
//          showConfirmButton: true,
//          confirmButtonColor: "#494E53",
//        });
//      },
//      complete: () => {
//        //quitar pantalla c!rgfalse
//        if (funcion_complete_string != null)
//          eval(funcion_complete_string.toString());
//        if (cerrar_modal == null) btn_close.click();
//        $.unblockUI();
//      },
//    });
// }



// async function peticionAjaxAsync(
//   url,
//   datos,
//   funcion_complete_string=null,
//   cerrar_modal=null,
//   mostrar_blockUI=true
//    ) {
//     if (mostrar_blockUI){
//       $.blockUI({
//         message: dialogoBlockUI,
//         css: { backgroundColor: null, color: "#313131", border: null },
//       });
//     }
//     await setTimeout(()=> {},500);
//     try {
//       let response = await $.ajax({
//         type: "POST",
//         url: url,
//         data: datos,
//         async: true,
//         dataType: "json",
//       });


//       if (response.Resultado) {
//         if (response.Texto_alerta != undefined) mostrarToast(response.Icono_alerta,response.Texto_alerta);
//       }
//       else {
//         Swal.fire({
//         icon: response.Icono_alerta,
//         title: response.Titulo_alerta,
//         text: response.Texto_alerta,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//         });
//       }

//       if (funcion_complete_string != null) eval(funcion_complete_string.toString());
//       if (cerrar_modal == null) btn_close.click();
//       $.unblockUI();
//       return response;

//     } catch (error) {
//       if (cerrar_modal == null) btn_close.click();
//       $.unblockUI();

//       Swal.fire({
//         icon: "error",
//         title: "Oops...!",
//         text: `An ever has occurred, please verify your information.`,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//       });
//     }
// }
// function peticionEliminarObjetoAsync(titulo, texto, url, datos, funcion_complete_string=null) {
//   Swal.fire({
//     title: titulo,
//     text: texto,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     confirmButtonText: "Delete",
//     cancelButtonColor: "#d33",
//     cancelButtonText: "Cancel",
//   }).then(async (result) => {
//     if (result.isConfirmed) {
//       $.blockUI({
//         message: dialogoBlockUI,
//         css: { backgroundColor: null, color: "#313131", border: null },
//       });

//       try {
//         let response = await $.ajax({
//           type: "POST",
//           url: url,
//           data: datos,
//           dataType: "json"
//         });

//         if (response.Resultado) {
//           if (response.Texto_alerta != undefined) mostrarToast(response.Icono_alerta,response.Texto_alerta);
//         }
//         else {
//           Swal.fire({
//             icon: response.Icono_alerta,
//             title: response.Titulo_alerta,
//             text: response.Texto_alerta,
//             showConfirmButton: true,
//             confirmButtonColor: "#494E53",
//           });
//         }

//         if (funcion_complete_string != null) eval(funcion_complete_string.toString());
//         $.unblockUI();
//         return response;

//       } catch (error) {
//         $.unblockUI();

//         Swal.fire({
//           icon: "error",
//           title: "Oops...!",
//           text: `An ever has occurred, please verify your information.`,
//           showConfirmButton: true,
//           confirmButtonColor: "#494E53",
//         });
//       }
//     }
//   })
// }






// function peticionAjax(url, datos, funcion_success, cerrar_modal) {
//   if (cerrar_modal != false) {
//     cerrar_modal = null;
//   }
//   $.ajax({
//     type: "POST",
//     url: url,
//     data: datos,
//     dataType: "json",
//     beforeSend: () => {
//       //mostrar pantalla cargando
//       $.blockUI({
//         message: dialogoBlockUI,
//         css: { backgroundColor: null, color: "#313131", border: null },
//       });
//     },
//     success: (ajaxResponse) => {
//       if (ajaxResponse.Resultado) {
//         if (funcion_success != null) {
//           funcion_success(ajaxResponse);
//         }
//       } else {
//         Swal.fire({
//           icon: ajaxResponse.Icono_alerta,
//           title: ajaxResponse.Titulo_alerta,
//           text: ajaxResponse.Texto_alerta,
//           showConfirmButton: true,
//           confirmButtonColor: "#494E53",
//         });
//       }
//     },
//     error: (ajaxResponse) => {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...!",
//         text: `An ever has occurred, please verify your information.`,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//       });
//     },
//     complete: () => {
//       //quitar pantalla c!rgfalse
//       if (cerrar_modal == null) btn_close.click();
//       $.unblockUI();
//     },
//   });
// }

// function peticionPintarBotones(url, datos) {
//   $.ajax({
//     type: "POST",
//     url: url,
//     data: datos,
//     dataType: "json",
//     beforeSend: () => {
//       //mostrar pantalla cargando
//       $.blockUI({
//         message: dialogoBlockUI,
//         css: { backgroundColor: null, color: "#313131", border: null },
//       });
//     },
//     success: (ajaxResponse) => {
//       if (ajaxResponse.Resultado) {
//         pintarBotones(ajaxResponse);
//       } else {
//         Swal.fire({
//           icon: ajaxResponse.Icono_alerta,
//           title: ajaxResponse.Titulo_alerta,
//           text: ajaxResponse.Texto_alerta,
//           showConfirmButton: true,
//           confirmButtonColor: "#494E53",
//         });
//       }
//     },
//     error: (ajaxResponse) => {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...!",
//         text: `An ever has occurred, please verify your information.`,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//       });
//     },
//     complete: () => {
//       //quitar pantalla cargando
//       btn_close.click();
//       $.unblockUI();
//     },
//   });
// }

// function peticionRegistrarEditar(
//   url,
//   datos,
//   funcion_success,
//   funcion_complete_string
// ) {
//   $.ajax({
//     type: "POST",
//     url: url,
//     data: datos,
//     dataType: "json",
//     beforeSend: () => {
//       //mostrar pantalla cargando
//       $.blockUI({
//         message: dialogoBlockUI,
//         css: { backgroundColor: null, color: "#313131", border: null },
//       });
//     },
//     success: (ajaxResponse) => {
//       if (ajaxResponse.Resultado) {
//         Swal.fire({
//           icon: ajaxResponse.Icono_alerta,
//           title: ajaxResponse.Titulo_alerta,
//           html: ajaxResponse.Texto_alerta,
//           showConfirmButton: false,
//           confirmButtonColor: "#494E53",
//           timer: 1500,
//           allowEscapeKey: false,
//           allowOutsideClick: false,
//           showConfirmButton: false,
//         });
//         funcion_success();
//       } else {
//         Swal.fire({
//           icon: ajaxResponse.Icono_alerta,
//           title: ajaxResponse.Titulo_alerta,
//           text: ajaxResponse.Texto_alerta,
//           showConfirmButton: true,
//           confirmButtonColor: "#494E53",
//         });
//       }
//     },
//     error: (ajaxResponse) => {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...!",
//         text: `An ever has occurred, please verify your information.`,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//       });
//     },
//     complete: (ajaxResponse) => {
//       if (ajaxResponse.Resultado) {
//         //limpiar formulario
//         btn_reset_formulario.click();
//         btn_close.click();
//       }

//       if (funcion_complete_string != null) eval(funcion_complete_string.toString());

//       //quitar pantalla cargando
//       $.unblockUI();
//     },
//   });
// }

// function peticionRellenarTabla(url, datos) {
//   let btn = false;

//   $.ajax({
//     type: "POST",
//     url: url,
//     data: datos,
//     dataType: "json",
//     async: true,
//     headers: {
//       "cache-control": "no-cache",
//     },
//     beforeSend: () => {
//       //mostrar pantalla cargando
//       $.blockUI({
//         message: dialogoBlockUI,
//         css: { backgroundColor: null, color: "#313131", border: null },
//       });
//     },
//     success: (ajaxResponse) => {
//       if (ajaxResponse.Resultado) {
//         // console.log(ajaxResponse.Datos);
//         pintarTabla(ajaxResponse);
//       } else {
//         Swal.fire({
//           icon: ajaxResponse.Icono_alerta,
//           title: ajaxResponse.Titulo_alerta,
//           text: ajaxResponse.Texto_alerta,
//           showConfirmButton: true,
//           confirmButtonColor: "#494E53",
//         });
//         btn = true;
//       }
//     },
//     error: (ajaxResponse) => {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...!",
//         text: `An ever has occurred, please verify your information.`,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//       });
//     },
//     complete: () => {
//       //quitar pantalla cargando
//       btn_close.click();
//       $.unblockUI();
//     },
//   });
// }

// function peticionEditarObjeto(url, datos, cerrar_modal) {
//   if (cerrar_modal != false) {
//     cerrar_modal = null;
//   }
//   $.ajax({
//     type: "POST",
//     url: url,
//     data: datos,
//     dataType: "json",
//     beforeSend: function () {
//       //mostrar pantalla cargando
//       $.blockUI({
//         message: dialogoBlockUI,
//         css: { backgroundColor: null, color: "#313131", border: null },
//       });
//     },
//     success: (ajaxResponse) => {
//       if (ajaxResponse.Resultado) {
//         rellenarFormulario(ajaxResponse);
//       } else {
//         Swal.fire({
//           icon: ajaxResponse.Icono_alerta,
//           title: ajaxResponse.Titulo_alerta,
//           text: ajaxResponse.Texto_alerta,
//           showConfirmButton: true,
//           confirmButtonColor: "#494E53",
//         });
//       }
//     },
//     error: (ajaxResponse) => {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...!",
//         text: `An ever has occurred, please verify your information.`,
//         showConfirmButton: true,
//         confirmButtonColor: "#494E53",
//       });
//     },
//     complete: () => {
//       //quitar pantalla cargando
//       if (cerrar_modal == null) {
//         btn_close.click();
//       }
//       $.unblockUI();
//     },
//   });
// }

// function peticionEliminarObjeto(titulo, texto, url, datos, funcion_complete_string) {
//   Swal.fire({
//     title: titulo,
//     text: texto,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     confirmButtonText: "Delete",
//     cancelButtonColor: "#d33",
//     cancelButtonText: "Cancel",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       $.ajax({
//         type: "POST",
//         url: url,
//         data: datos,
//         dataType: "json",
//         beforeSend: function () {
//           //mostrar pantalla cargando
//           $.blockUI({
//             message: dialogoBlockUI,
//             css: { backgroundColor: null, color: "#313131", border: null },
//           });
//         },
//         success: (ajaxResponse) => {
//           if (ajaxResponse.Resultado) {
//             Swal.fire({
//               icon: ajaxResponse.Icono_alerta,
//               title: ajaxResponse.Titulo_alerta,
//               html: ajaxResponse.Texto_alerta,
//               showConfirmButton: false,
//               confirmButtonColor: "#494E53",
//               timer: 1500,
//               allowEscapeKey: false,
//               allowOutsideClick: false,
//               showConfirmButton: false,
//             });
//             rellenarTabla();
//           } else {
//             Swal.fire({
//               icon: ajaxResponse.Icono_alerta,
//               title: ajaxResponse.Titulo_alerta,
//               text: ajaxResponse.Texto_alerta,
//               showConfirmButton: true,
//               confirmButtonColor: "#494E53",
//             });
//           }
//         },
//         error: (ajaxResponse) => {
//           Swal.fire({
//             icon: "error",
//             title: "Oops...!",
//             text: `An ever has occurred, please verify your information.`,
//             showConfirmButton: true,
//             confirmButtonColor: "#494E53",
//           });
//         },
//         complete: () => {
//             if (funcion_complete_string != null) eval(funcion_complete_string.toString());

//             //quitar pantalla cargando
//             btn_close.click();
//             $.unblockUI();
//         },
//       });
//     }
//   });
// }

// function mostrarAlertaExito(
//   ajaxResponse,
//   icono,
//   titulo,
//   texto,
//   btn_aceptar,
//   refresh
// ) {
//   if (ajaxResponse != null) {
//     icono = ajaxResponse.Icono_alerta;
//     titulo = ajaxResponse.Titulo_alerta;
//     texto = ajaxResponse.Texto_alerta;
//     btn_aceptar = ajaxResponse.DataBool;
//   }

//   Swal.fire({
//     icon: icono,
//     title: titulo,
//     html: texto,
//     showConfirmButton: btn_aceptar,
//     confirmButtonColor: "#494E53",
//   }).then(() => {
//     if (refresh) {
//       console.log("refresh1");
//       // window.location.reload();
//     } else {
//       return;
//     }
//   });
// }

// function mostrarAlerta(
//   ajaxResponse,
//   icono,
//   titulo,
//   texto,
//   btn_aceptar,
//   refresh
// ) {
//   if (ajaxResponse != null) {
//     icono = ajaxResponse.Icono_alerta;
//     titulo = ajaxResponse.Titulo_alerta;
//     texto = ajaxResponse.Texto_alerta;
//     btn_aceptar = ajaxResponse.DataBool;
//   }

//   Swal.fire({
//     icon: icono,
//     title: titulo,
//     html: texto,
//     showConfirmButton: btn_aceptar,
//     confirmButtonColor: "#494E53",
//   }).then(() => {
//     if (refresh) {
//       console.log("refresh2");
//       // window.location.reload();
//     } else {
//       return;
//     }
//   });
// }
// function mostrarAlertaConOpciones(
//   url_modelo_app,
//   titulo,
//   texto,
//   datos,
//   refresh,
//   funcion_then
// ) {
//   Swal.fire({
//     title: titulo,
//     text: texto,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     confirmButtonText: "Delete",
//     cancelButtonColor: "#d33",
//     cancelButtonText: "Cancel",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       $.ajax({
//         url: url_modelo_app,
//         type: "POST",
//         data: datos,
//         dataType: "json",
//         success: (ajaxResponseThen) => {
//           Swal.fire({
//             icon: ajaxResponseThen.Icono_alerta,
//             title: ajaxResponseThen.Titulo_alerta,
//             text: ajaxResponseThen.Texto_alerta,
//             showConfirmButton: false,
//             timer: 1500,
//           }).then(() => {
//             if (refresh) {
//               console.log("refresh3"); /*window.location.reload();*/
//             }
//             switch (funcion_then) {
//               case "nada":
//                 break;
//               default:
//                 break;
//             }
//           });
//         },
//       });
//     }
//   });
// }
// function mostrarToast(icono, mensaje, posicion="top-end") {
//   const Toast = Swal.mixin({
//     toast: true,
//     position: posicion,
//     showConfirmButton: false,
//     timer: 2000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener("mouseenter", Swal.stopTimer);
//       toast.addEventListener("mouseleave", Swal.resumeTimer);
//     },
//   });

//   Toast.fire({ icon: icono, title: mensaje });
// }



// function validandoInputs(formulario) {
//   let inputs = formulario.serializeArray();
// //   console.log("🚀 ~ file: admin.js ~ line 949 ~ validandoInputs ~ inputs", inputs)
//   let validado = true;
// //   inputs.map((inputJS)=>{
// //     let input = $(`#${inputJS.name}`);
// //     if(!validado) return;
// //     if (!input.hasClass("excluir_validacion")) {
// //       if(input.val() == "" || input.val() == -1 || input.val() == "-1" || input.val() == null || input.val() == "null" ){
// //         mostrarToast("error", `Space ${input.attr("data-nombre-campo")} empty.`);
// //         input.focus();
// //         $(`input[name ='${input.name}']`).focus();
// //         return validado = false;
// //       }
// //     }
// //   })
// //   return validado;

//   // // console.log(inputs)
//   // // let validado = true;
//   $.each(inputs, function (i, input_iterable) {
//     if (!validado) return;
//     let input = $(`#${input_iterable.name}`);
//     if (!input.hasClass("excluir_validacion")) {
//       // console.log(input)
//       let campo_valido = validarInputs(input);
//       if (!campo_valido) return (validado = false);
//     }
//     validado = true;
//   });
//   return validado;
// }
// function validarInputs(input) {
//   if (input.val() == "" || input.val() == -1 || input.val() == "-1") {
//     mostrarToast("error", `Space ${input.attr("data-nombre-campo")} empty.`);
//     input.focus();
//     return false;
//   }
//   return true;
// }

// function validarInput(input, nombre_campo) {
//   if (input.val() == "" || input.val() == -1 || input.val() == "-1") {
//     mostrarToast("error", `Space ${nombre_campo} empty.`);
//     input.focus();
//     return false;
//   }
//   return true;
// }
// function formatearCantidadMX(cantidad) {
//   // let total = new Intl.NumberFormat("es-MX").format(cantidad);
//   let total = new Intl.NumberFormat("es-MX").format(cantidad);
//   if (!total.includes(".")) {
//     total += ".00";
//   }
//   let decimales = total.split(".").reverse();
//   if (decimales[0].length == 1) {
//     total += "0";
//   }
//   if (cantidad == 0) {
//     total == "0.00";
//   }

//   return total;
// }
// function formatearCantidadUSD(cantidad) {
//    // let total = new Intl.NumberFormat("es-MX").format(cantidad);
//    let total = new Intl.NumberFormat("en-US").format(cantidad);
//    if (!total.includes(".")) {
//      total += ".00";
//    }
//    let decimales = total.split(".").reverse();
//    if (decimales[0].length == 1) {
//      total += "0";
//    }
//    if (cantidad == 0) {
//      total == "0.00";
//    }
 
//    return total;
//  }
// function formatearCantidadDeRenglones(tds) {
//   $.each(tds, function (i, elemento) {
//     let td = $(elemento);
//     let cantidad = td.text();
//     let cantidad_formateada = formatearCantidadMX(cantidad);
//     td.html(`$ ${cantidad_formateada}`);
//   });
// }
// function formatearFechaHora(la_fecha) {
//   let fecha = new Date(parseInt(la_fecha.substr(6)));
//   let fecha_hora = moment(fecha).format("DD-MM-YYYY h:mm:ss a");
//   // let fecha_hora = new Intl.DateTimeFormat("es-MX", { day: '2-digit', month: '2-digit', year: 'numeric', hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(fecha);

//   return fecha_hora;
// }
// function formatearFechaHoraNormal(la_fecha) {
//   let fecha = new Date(la_fecha);
//   let fecha_hora;

//   if (la_fecha.length <= 10) {
//     fecha = new Date(fecha.setDate(fecha.getDate() + 1));
//     return (fecha_hora = moment(fecha).format("DD-MM-YYYY"));
//     // return fecha_hora = new Intl.DateTimeFormat("es-MX", { day: '2-digit', month: '2-digit', year: 'numeric'}).format(fecha);
//   }

//   fecha = new Date(la_fecha);
//   return (fecha_hora = moment(fecha).format("DD-MM-YYYY h:mm:ss a"));
//   // return fecha_hora = new Intl.DateTimeFormat("es-MX", { day: '2-digit', month: '2-digit', year: 'numeric', hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(fecha);
// }
// /* --- FUNCIONES DE CAJON--- */

// //VALIDAR RANGO DE FECHAS
// function validarRangoFechas(accion) {
//   let fecha_actual = new Date();
//   ayer = new Date(fecha_actual.setDate(fecha_actual.getDate() - 1));
//   ayer = new Date(ayer.setHours(23, 59, 59));
//   ayer = ayer.getTime();

//   fecha1 = new Date(input_fecha_inicial.val());
//   fecha1 = new Date(fecha1.setDate(fecha1.getDate() + 1));
//   fecha1 = new Date(fecha1.setHours(0, 0, 0));
//   data_fecha1 = new Date(fecha1).getTime();

//   fecha2 = new Date(input_fecha_final.val());
//   fecha2 = new Date(fecha2.setDate(fecha2.getDate() + 1));
//   fecha2 = new Date(fecha2.setHours(11, 59, 59));
//   data_fecha2 = new Date(fecha2).getTime();

//   if (accion == "crear") {
//     if (data_fecha1 <= ayer) {
//       mostrarToast("warning", "No puedes publicar con fecha anterior a hoy.");
//       input_fecha_inicial.focus();
//       return false;
//     }
//   }
//   if (data_fecha1 > data_fecha2) {
//     mostrarToast("warning", "Rango de fechas inválido.");
//     input_fecha_final.focus();
//     return false;
//   }
//   return true;
// }

// //AGREGAR DATO AL ARRAY
// function agregarDatoAlArray(nombre, valor, array) {
//   //array obtenido de formulario_modal.serializeArray()
//   // console.log(nombre,valor,array);
//   let dato_nuevo = {
//     name: nombre,
//     value: valor,
//   };
//   array.push(dato_nuevo);
// }

// //RESETEAR SELECT 2
// function resetearSelect2(select2) {
// // function resetearSelect2(select2, url, datos) {
//   select2.prop("selectedIndex", 0);
//   select2.val("-1");
//   $(`#select2-${select2[0].name}-container`).text("Select...");
//   $(`#select2-${select2[0].name}-container`).attr("title", "Select...");
//   // iconos(url, datos, -1, select2[0].name);
// }
// /* ------ RELLENAR SELECTS 2 ------ */
// function rellenarSelect2(url, datos, id_activo, nombre_select) {
//   $.ajax({
//     type: "POST",
//     url: url,
//     data: datos,
//     dataType: "json",
//     success: function (ajaxResponse) {
//       // console.log(ajaxResponse);
//       if (ajaxResponse.Resultado) {
//         switch (nombre_select) {
//           case "input_id_padre":
//             rellenarSelect2Padre(ajaxResponse, id_activo);
//             break;

//           case "input_id_perfil":
//             rellenarSelect2Perfiles(ajaxResponse, id_activo);
//             break;

//           case "input_id_cliente":
//             rellenarSelect2Clientes(ajaxResponse, id_activo);
//             break;

//           case "input_id_tipo_reporte":
//             rellenarSelect2TiposReporte(ajaxResponse, id_activo);
//             break;

//           case "input_id_tipo_reporte_default":
//             rellenarSelect2ReporteDefault(ajaxResponse, id_activo);
//             break;

//           case "input_id_paquetes":
//             rellenarSelect2Paquetes(ajaxResponse, id_activo);
//             break;

//           default:
//             break;
//         }
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...!",
//           text: `${ajaxResponse.Texto_alerta}`,
//           showConfirmButton: true,
//           confirmButtonColor: "#494E53",
//         });
//       }
//     },
//   });
// }

// // Select2 Padre
// function rellenarSelect2Padre(ajaxResponse, id_activo) {
//    let coleccion = ajaxResponse.Datos;

//    input_id_padre.html("");

//    let opciones = /*HTML*/ `
//        <option value="-1">Select...</option>
//     `;

//    let selected = ""
//    if (id_activo == 0) selected = "selected"
//    opciones += /*HTML*/ `
//          <option value="0" ${selected}>*** Módulo Padre ***</option>
//       `;

//    input_id_padre.append(opciones);

//    $.each(coleccion, function (i, objeto) {
//      if (objeto.id_menu == id_activo)
//        input_id_padre.append(
//          `<option selected value='${objeto.id_menu}'>${objeto.descripcion}</option>`
//        );
//      else
//        input_id_padre.append(
//          `<option value='${objeto.id_menu}'>${objeto.descripcion}</option>`
//        );
//    });
//  }
// // function rellenarSelect2Padre(ajaxResponse, id_activo) {
// //   let coleccion = ajaxResponse.Datos;

// //   input_id_padre.html("");

// //   let opciones = /*HTML*/ `
// //       <option value="-1">Select...</option>
// //    `;

// //   if (id_activo == 0) {
// //     opciones += /*HTML*/ `
// //          <option value="0" selected>*** Módulo Padre ***</option>
// //       `;
// //     input_url.attr("readonly", true);
// //     input_url.val("#");
// //     input_descripcion.focus();
// //   } else {
// //     opciones += /*HTML*/ `
// //          <option value="0">*** Módulo Padre ***</option>
// //       `;
// //     input_url.attr("readonly", false);
// //   }

// //   input_id_padre.append(opciones);

// //   $.each(coleccion, function (i, objeto) {
// //     if (objeto.id_menu == id_activo)
// //       input_id_padre.append(
// //         `<option selected value='${objeto.id_menu}'>${objeto.descripcion}</option>`
// //       );
// //     else
// //       input_id_padre.append(
// //         `<option value='${objeto.id_menu}'>${objeto.descripcion}</option>`
// //       );
// //   });
// // }

// // Select2 Perfiles ---
// function rellenarSelect2Perfiles(ajaxResponse, id_activo) {
//   let coleccion = ajaxResponse.Datos;

//   input_id_perfil.html("");

//   let opciones = /*HTML*/ `
//       <option value="-1">Select...</option>
//    `;

//   input_id_perfil.append(opciones);

//   $.each(coleccion, function (i, objeto) {
//     if (objeto.perfil_id == id_activo)
//       input_id_perfil.append(
//         `<option selected value='${objeto.perfil_id}'>${objeto.perfil_nombre}</option>`
//       );
//     else
//       input_id_perfil.append(
//         `<option value='${objeto.perfil_id}'>${objeto.perfil_nombre}</option>`
//       );
//   });
// }

// // Select2 ---
// function rellenarSelect2Clientes(ajaxResponse, id_activo) {
//   let coleccion = ajaxResponse.Datos;

//   input_id_cliente.html("");

//   let opciones = /*HTML*/ `
//       <option value="-1">Select...</option>
//    `;

//   input_id_cliente.append(opciones);

//   $.each(coleccion, function (i, objeto) {
//     if (objeto.id == id_activo)
//       input_id_cliente.append(
//         `<option selected value='${objeto.id}'>${objeto.usuario}</option>`
//       );
//     else
//       input_id_cliente.append(
//         `<option value='${objeto.id}'>${objeto.usuario}</option>`
//       );
//   });
// }

// // Select2 ---
// function rellenarSelect2TiposReporte(ajaxResponse, id_activo) {
//   let coleccion = ajaxResponse.Datos;
//   input_id_tipo_reporte.html("");

//   let opciones = /*HTML*/ `
//       <option value="-1">Select...</option>
//    `;

//   input_id_tipo_reporte.append(opciones);

//   $.each(coleccion, function (i, objeto) {
//     if (objeto.tipo_reporte_id == id_activo)
//       input_id_tipo_reporte.append(
//         `<option selected value='${objeto.tipo_reporte_id}'>${objeto.tipo_reporte_nombre}</option>`
//       );
//     else
//       input_id_tipo_reporte.append(
//         `<option value='${objeto.tipo_reporte_id}'>${objeto.tipo_reporte_nombre}</option>`
//       );
//   });
// }

// // Select2 ---
// function rellenarSelect2ReporteDefault(ajaxResponse, id_activo) {
//   let coleccion = ajaxResponse.Datos;
//   input_id_tipo_reporte.html("");

//   let opciones = /*HTML*/ `
//       <option value="-1">Select...</option>
//    `;

//   input_id_tipo_reporte.append(opciones);

//   $.each(coleccion, function (i, objeto) {
//     if (objeto.reporte_id == id_activo)
//       input_id_tipo_reporte.append(
//         `<option selected value='${objeto.reporte_id}'>${objeto.tipo_reporte_nombre}</option>`
//       );
//     else
//       input_id_tipo_reporte.append(
//         `<option value='${objeto.reporte_id}'>${objeto.tipo_reporte_nombre}</option>`
//       );
//   });
// }

// function rellenarSelect2Paquetes(ajaxResponse, id_activo) {
//   let coleccion = ajaxResponse.Datos;

//   input_id_paquetes.html("");

//   let opciones = /*HTML*/ `
//       <option value="-1">***** Add new Package *****</option>
//    `;

//   input_id_paquetes.append(opciones);

//   $.each(coleccion, function (i, objeto) {
//     if (objeto.paquete_id == id_activo)
//       input_id_paquetes.append(
//         `<option selected value='${objeto.paquete_id}'>${objeto.paquete_nombre}</option>`
//       );
//     else
//       input_id_paquetes.append(
//         `<option value='${objeto.paquete_id}'>${objeto.paquete_nombre}</option>`
//       );
//   });
// }


// function rellenarSelect2X(ajaxResponse, id_activo) {
//   let coleccion = ajaxResponse.Datos;

//   input_id_XXXX.html("");

//   let opciones = /*HTML*/ `
//       <option value="-1">Select...</option>
//    `;

//   input_id_XXXX.append(opciones);

//   $.each(coleccion, function (i, objeto) {
//     if (objeto.XXXX_id == id_activo)
//       input_id_XXXX.append(
//         `<option selected value='${objeto.XXXX_id}'>${objeto.XXXX_nombre}</option>`
//       );
//     else
//       input_id_XXXX.append(
//         `<option value='${objeto.XXXX_id}'>${objeto.XXXX_nombre}</option>`
//       );
//   });
// }

// /* ------ RELLENAR SELECTS 2 ------ */

// function mostrarIconos(con_nombre,id_activo) {
//    let datos = { accion: "mostrar_objetos" };
//    if (con_nombre) datos = { accion: "mostrar_objetos_con_nombre" };
//    peticionAjax(url_modelo_icono_app, datos, rellenarAreaIconos, false);

//    function rellenarAreaIconos(ajaxResponse) {
//       let coleccion = ajaxResponse.Datos;
//       let area_iconos = $("#area_iconos");

//       area_iconos.html("");
//       $.each(coleccion, function (i, objeto) {
//          let activo = "";
//          let mostrar_nombre = "";
//          if (con_nombre) {
//             mostrar_nombre =
//             `<br>
//             <small>${objeto.tipo_reporte_nombre}</small>`
//             if (objeto.tipo_reporte_id == id_activo) activo = "icono_activo";
//          } else {
//             if (objeto.icono_id == id_activo) activo = "icono_activo";
//          }

//          let card_icon = `
//          <div class="card_icon" data-id-icono="${objeto.icono_id}">
//             <div class="border rounded-lg p-1 text-center card_icono ancho" data-id-icono="${objeto.icono_id}">
//                <i class="${objeto.icono_nombre} fa-2x ${activo} icono" data-id-icono="${objeto.icono_id}" data-id-tipo-reporte="${objeto.tipo_reporte_id}"></i>
//                ${mostrar_nombre}
//             </div>
//          </div>
//          `;
//          area_iconos.append(card_icon);
//       });
//    }
// }

// //----------------------------------------------------------

// //----------------------------------------------------------JP

// area_iconos.click((e) => {
//    if ($(e.target).hasClass("icono") || $(e.target).hasClass("card_icono")) {
//       let icono_activo_anteriormente = $(".icono_activo");
//       let card_icon_activo_anteriormente = $(".icono_seleccionado");
//       icono_activo_anteriormente.removeClass("icono_activo");
//       card_icon_activo_anteriormente.removeClass("icono_seleccionado");

//       let icono = $(e.target);
//       if ($(e.target).hasClass("card_icono"))
//          icono = $(e.target).children();
//       let card_icon = icono.parent().parent();
//       icono.addClass("icono_activo");
//       card_icon.addClass("icono_seleccionado");
//    }
// });

function Cookiess() {
  console.log("las Cookies");
  console.log(Cookies.get());
}

/*function count(elemento,limite){ //tiene error en el kill()
   var counter = { var: 0 };
   TweenMax.to(counter, 2, {
     var: limite,
     onUpdate: function () {
       var number = Math.ceil(counter.var);
       let cantidadFormateada = formatearCantidadMX(number);
       elemento.html(`$ ${cantidadFormateada}`);
       if(number === counter.var){ count.kill(); }
     },
     onComplete: function(){
       count();
     },
     ease:Circ.easeOut
   });
 }
 */

/*function contadorAnimado(elemento,cantidad) {  //se limita a llegar hasta donde le perimte la duracion
   elemento.each(function() {
      var $this = $(this),
         countTo = cantidad;
      let cantidadFormateada
      const duracion= cantidad/10;

      $({ countNum: $this.text()}).animate({
      countNum: countTo
      },
      {
      duration: 2000,
      easing:'linear',
      step: function() {
         cantidadFormateada = formatearCantidadMX(this.countNum);
         $this.text(`$ ${cantidadFormateada}`);
         // $this.text(Math.floor(this.countNum));
      },
      complete: function() {
         $this.text(`$ ${cantidadFormateada}`);
         // $this.text(this.countNum);
         //alert('finished');
      }

      });

   });
}
*/
