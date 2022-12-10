// import { DataTableConfig } from "./globals.js";



const main_content = document.querySelector('#main_content');

const drawMainContent = () => {
   main_content.innerHTML = `
      <!-- Content Header (Encabezado en el contenido de la pagina) -->
      <section class="content-header">
         <div class="container-fluid">
            <div class="row mb-2">
               <div class="col-sm-6">
                  <h1>
                     <i class="fa-solid fa-user-tie"></i>&nbsp;
                     PAGINA ACTUAL
                     <em class="fw-ligth text-muted lead text-sm">| </em>
                  </h1>
               </div>
               <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                     <li class="breadcrumb-item">
                        <a href="<?php echo $ADMIN_PATH ?>"
                           ><i class="fa-solid fa-house"></i>&nbsp;
                           Admin</a
                        >
                     </li>
                     <li class="breadcrumb-item">Administration</li>
                     <li class="breadcrumb-item active">
                        <?php echo $pagina_acutal ?>
                     </li>
                  </ol>
               </div>
            </div>
         </div>
         <!-- /.container-fluid -->
         </section>

         <!-- Main content -->
         <section class="content">
         <!-- card -->
         <div class="card card-outline card-dark shadow">
            <div class="container-fluid mt-2">
               <button
                  id="btn_abrir_modal"
                  class="float-end btn btn-success fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onclick="functionClick()"
               >
                  <i class="fa-solid fa-circle-plus"></i>&nbsp; ADD USER
               </button>
            </div>
            <div class="card-body">
               <!-- tabla -->
               <div class="table-responsive">
                  <table
                     id="tabla_usuarios"
                     class="table table-hover text-center"
                     style="width: 100%"
                  >
                     <thead class="thead-dark">
                        <tr>
                           <th>Username</th>
                           <th>E-mail</th>
                           <th>Profile</th>
                           <th>Since Member</th>
                           <th>Edit / Delete</th>
                        </tr>
                     </thead>
                     <tbody></tbody>
                     <tfoot>
                        <tr class="thead-dark">
                           <th>Username</th>
                           <th>E-mail</th>
                           <th>Profile</th>
                           <th>Since Member</th>
                           <th>Edit / Delete</th>
                        </tr>
                     </tfoot>
                  </table>
               </div>
            </div>
            <!-- /.card-body -->
         </div>
         <!-- /.card -->
         </section>
         <!-- /.content -->

         <!-- Modal Usuario -->
         <div
         class="modal fade"
         id="modal"
         tabindex="-1"
         aria-labelledby="modalLabel"
         aria-hidden="true"
         >
         <div
            class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
         >
            <form
               class="modal-content"
               id="formulario"
               enctype="multipart/form-data"
            >
               <div class="modal-header">
                  <h5 class="modal-title fw-bold" id="modalLabel">
                     <i class="fa-solid fa-user-plus"></i>&nbsp; REGISTRAR
                     USUARIO
                  </h5>
                  <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  ></button>
               </div>
               <div class="modal-body">
                  <input
                     type="hidden"
                     id="accion"
                     name="accion"
                     value=""
                     class="excluir_validacion"
                  />
                  <input
                     type="hidden"
                     id="id"
                     name="id"
                     value=""
                     class="excluir_validacion"
                  />
                  <div class="mb-3">
                     <label for="input_usuario" class="form-label"
                        >Username:
                        <span class="span_campo_obligatorio"></span
                     ></label>
                     <input
                        type="text"
                        class="form-control"
                        id="input_usuario"
                        name="input_usuario"
                        data-nombre-campo="USERNAME"
                     />
                  </div>
                  <div class="mb-3">
                     <label for="input_correo" class="form-label"
                        >E-mail:
                        <span class="span_campo_obligatorio"></span
                     ></label>
                     <input
                        type="email"
                        class="form-control"
                        id="input_correo"
                        name="input_correo"
                        data-nombre-campo="EMAIL"
                     />
                  </div>
                  <div class="mb-3 row" id="div_contrasenia">
                     <div class="col">
                        <label for="input_contrasenia" class="form-label"
                           >Password:
                           <span class="span_campo_obligatorio"></span
                        ></label>
                        <div class="input-icon">
                           <input
                              type="password"
                              class="form-control"
                              id="input_contrasenia"
                              name="input_contrasenia"
                              data-nombre-campo="PASSWORD"
                           />
                           <i
                              class="fa-duotone fa-eye-slash icono_ojito"
                              data-input="input_contrasenia"
                           ></i>
                        </div>
                     </div>
                     <div class="col">
                        <label
                           for="input_confirmar_contrasenia"
                           class="form-label"
                           >Confirm Password:
                           <span class="span_campo_obligatorio"></span
                        ></label>
                        <div class="input-icon">
                           <input
                              type="password"
                              class="form-control"
                              id="input_confirmar_contrasenia"
                              name="input_confirmar_contrasenia"
                              data-nombre-campo="CONFIRM PASSWORD"
                           />
                           <i
                              class="fa-duotone fa-eye-slash icono_ojito"
                              data-input="input_confirmar_contrasenia"
                           ></i>
                        </div>
                        <span
                           class="fst-italic"
                           id="respuesta_contrasena"
                        ></span>
                     </div>
                  </div>
                  <div class="mb-3" id="div_nueva_contrasenia">
                     <label
                        for="input_nueva_contrasenia"
                        class="form-label"
                        >New Password:</label
                     >
                     <div class="input-icon">
                        <input
                           type="password"
                           class="form-control"
                           id="input_nueva_contrasenia"
                           name="input_nueva_contrasenia"
                        />
                        <i
                           class="fa-duotone fa-eye-slash icono_ojito"
                           data-input="input_nueva_contrasenia"
                        ></i>
                     </div>
                     <span class="custom-control custom-switch">
                        <input
                           type="checkbox"
                           class="custom-control-input"
                           id="switch_nueva_contrasena"
                           data-nombre-campo="NEW PASSWORD"
                        />
                        <label
                           class="custom-control-label text-sm"
                           for="switch_nueva_contrasena"
                           >Enable password change</label
                        >
                     </span>
                  </div>
                  <div class="mb-3">
                     <label for="input_id_perfil" class="form-label"
                        >Profile:
                        <span class="span_campo_obligatorio"></span
                     ></label>
                     <select
                        class="select2 form-control"
                        style="width: 100%"
                        aria-label="Default select example"
                        id="input_id_perfil"
                        name="input_id_perfil"
                        data-nombre-campo="PROFILE"
                     >
                        <option selected value="-1">Select...</option>
                     </select>
                  </div>
               </div>
               <div class="modal-footer">
                  <button
                     type="submit"
                     id="btn_enviar_formulario"
                     class="btn btn-success fw-bold"
                  >
                     ADD
                  </button>
                  <button
                     type="reset"
                     id="btn_reset_formulario"
                     class="btn btn-secondary"
                  >
                     CLEAR
                  </button>
               </div>
            </form>
         </div>
      </div>
   `;

   let table;
   table = $('#tabla_usuarios').DataTable(DataTableConfig);
}
const functionClick = () => {
   // console.log("el click");
}
document.addEventListener("DOMContentLoaded", function() {
   drawMainContent()
})



// $(document).ready(() => {
//    $("#div_nueva_contrasenia").hide();
//    $("#input_nueva_contrasenia").prop("readonly", true);
// });

// const
//    btn_abrir_modal = $("#btn_abrir_modal"),

//    tbody = $("#tabla_usuarios tbody"),

//    modal_body = $("#modal-body"),
//    formulario = $("#formulario"),
//    modal_title = $(".modal-title"),
//    id_modal = $("#id"),
//    accion_modal = $("#accion"),

//    input_usuario = $("#input_usuario"),
//    input_perfil_usuario = $("#input_perfil_usuario")
//     input_correo = $("#input_correo"),
//     div_contrasenia = $("#div_contrasenia"),
//     input_contrasenia = $("#input_contrasenia"),
//     input_confirmar_contrasenia = $("#input_confirmar_contrasenia"),
//     respuesta_contrasena = $("#respuesta_contrasena"),
//     div_nueva_contrasenia = $("#div_nueva_contrasenia"),
//     input_nueva_contrasenia = $("#input_nueva_contrasenia"),
//     switch_nueva_contrasena = $("#switch_nueva_contrasena"),
//     input_id_perfil = $("#input_id_perfil"),

//    btn_enviar_formulario = $("#btn_enviar_formulario"),
//    btn_reset_formulario = $("#btn_reset_formulario")
// ;
// $('.select2').select2({dropdownParent: $("#modal")});
// focusSelect2($(".select2"));
// /* --- FUNCIONES DE CAJON--- */
// // estas funciones se encuentran en index.js para no repetir código
// /* --- FUNCIONES DE CAJON--- */

// funcionesIniciales();
// function funcionesIniciales() {
//    relllenarTabla();

//    let datos = {accion:"mostrar_objetos"}
//    rellenarSelect2(url_modelo_perfil_app,datos,-1,"input_id_perfil");
//    input_usuario.focus();
// }


// // CONFIRMAR CONTRASEÑA
// input_confirmar_contrasenia.on('input',function() {
//     var contrasena1 = input_contrasenia.val();
//     var contrasena2 = input_confirmar_contrasenia.val();

//     if (contrasena1 === contrasena2) {
//         respuesta_contrasena.addClass('text-success').text('Password match').removeClass('text-danger');
//         input_contrasenia.addClass('is-valid').removeClass('is-invalid');
//         input_confirmar_contrasenia.addClass('is-valid').removeClass('is-invalid');
//         btn_enviar_formulario.prop('disabled',false);
//     } else {
//         respuesta_contrasena.addClass('text-danger').text("Passwords don't match").removeClass('text-success');
//         input_contrasenia.addClass('is-invalid').removeClass('is-valid');
//         input_confirmar_contrasenia.addClass('is-invalid').removeClass('is-valid');
//         btn_enviar_formulario.prop('disabled',true);
//     }
// });


// //CAMBIAR CONTRASEÑA - SWITCH
// switch_nueva_contrasena.click(() => {
//     if (switch_nueva_contrasena.is(":checked")) {
//         input_nueva_contrasenia.prop("readonly", false);
//     } else {
//         input_nueva_contrasenia.val("");
//         input_nueva_contrasenia.prop("readonly", true);
//     }
// });


// //CLICK EN BTN ABRIR MODAL
// btn_abrir_modal.click((e) => {
//     e.preventDefault();
//     $("#div_nueva_contrasenia").hide();
//     $("#input_nueva_contrasenia").prop("readonly", true);

//     modal_title.html("<i class='fa-solid fa-user-pen'></i></i>&nbsp; REGISTER USER");
//     btn_enviar_formulario.removeClass("btn-primary");
//     btn_enviar_formulario.addClass("btn-success");
//     btn_enviar_formulario.text("ADD");
//     div_nueva_contrasenia.hide();
//     div_contrasenia.show();

//     //Resetear formulario
//     btn_reset_formulario.click();

//     //EXCLUIR INPUTS PARA VALIDAR
//     input_nueva_contrasenia.addClass("excluir_validacion")
//     input_contrasenia.removeClass("excluir_validacion")
//     input_confirmar_contrasenia.removeClass("excluir_validacion")

//     // input_usuario.val("nuevo");
//     // input_correo.val("nuevo@gmial.com");
//     // input_contrasenia.val("1");
// });


// //RESETEAR FORMULARIOS
// btn_reset_formulario.click((e) => {
//   input_contrasenia.removeClass('is-invalid is-valid');
//   input_confirmar_contrasenia.removeClass('is-invalid is-valid');
//   respuesta_contrasena.text("").removeClass('text-danger text-success');
//   btn_enviar_formulario.prop('disabled',false);

//   //EXCLUIR INPUTS PARA VALIDAR
//   input_nueva_contrasenia.addClass("excluir_validacion")
//   input_contrasenia.removeClass("excluir_validacion")
//   input_confirmar_contrasenia.removeClass("excluir_validacion")

//    let datos = {accion:"mostrar_objetos"}
//    resetearSelect2(input_id_perfil,url_modelo_perfil_app,datos);
//    id_modal.val("");
//    setTimeout(() => {
//        input_usuario.focus();
//    }, 500);
// });



// // REGISTRAR O EDITAR OBJETO
// formulario.on("submit", async (e) => {
//    e.preventDefault();
//    id_modal.addClass("excluir_validacion")
//    accion_modal.addClass("excluir_validacion")
//    input_nueva_contrasenia.addClass("excluir_validacion")

//    if (switch_nueva_contrasena.is(":checked"))
//       input_nueva_contrasenia.removeClass("excluir_validacion")
//    if (!validandoInputs(formulario)) return

//    if (id_modal.val() <= 0) { //NUEVO
//      id_modal.val("");
//      accion_modal.val("crear_objeto");
//    } else { //EDICION
//      accion_modal.val("editar_objeto");
//    }

//    let datos = formulario.serializeArray();
//    // return console.log(datos);
//    let momento_actual = moment().format("YYYY-MM-DD hh:mm:ss");
//    if (id_modal.val() <= 0) { //NUEVO
//      agregarDatoAlArray("creado",momento_actual,datos);
//    } else { //EDICION
//      agregarDatoAlArray("actualizado",momento_actual,datos);
//    }

//    agregarDatoAlArray("consultor_paquete_id",2,datos);
//    agregarDatoAlArray("consultor_fecha_pago",momento_actual,datos);
//    agregarDatoAlArray("consultor_pagado",true,datos);
//    // agregarDatoAlArray("tipo_objeto","consultor",datos);

//    // agregarDatoAlArray("suscriptor_nombre_negocio",vacasCrew,datos);
//    // agregarDatoAlArray("suscriptor_consultor_id",2,datos);
//    // agregarDatoAlArray("suscriptor_paquete_id",2,datos);
//    // agregarDatoAlArray("suscriptor_consultor_viewer",true,datos);
//    // agregarDatoAlArray("suscriptor_fecha_pago",momento_actual,datos);
//    // agregarDatoAlArray("suscriptor_pagado",true,datos);
//    agregarDatoAlArray("tipo_objeto","suscriptor",datos);

//    // console.log(datos);
//    // return console.log(datos);
//    // peticionRegistrarEditar(url_modelo_usuario_app,datos,relllenarTabla);
//    const ajaxResponse = await peticionAjaxAsync(url_modelo_usuario_app,datos,"relllenarTabla()");
//    if (id_modal.val() == id_cookie) rellenarSideBar();
// });

// async function relllenarTabla() {
//    let datos = {accion:'mostrar_objetos'}
//    const ajaxResponse = await peticionAjaxAsync(url_modelo_usuario_app,datos);

//    //Limpiar tabla
//    tbody.slideUp();
//    tabla.clear().draw();

//    let objResponse = ajaxResponse.Datos;
//    // console.log(objResponse);
//    // return console.log(objResponse);

//    objResponse.map(obj => {
//       //Campos
//       let
//         campo_usuario = `${obj.usuario}`,
//          campo_correo = `${obj.correo}`,
//          campo_perfil = `${obj.perfil_nombre}`,
//          campo_creado = formatearFechaHoraNormal(obj.creado);

//       let campo_botones =
//          `<td class='align-middle'>
//             <div class='btn-group' role='group' aria-label='Basic example'>`;
//       if (permiso_cambios) {
//          campo_botones += //html
//                `<button class='btn btn-outline-primary btn_editar' type='button' data-id='${obj.id}' title='Edit User' data-bs-toggle="modal" data-bs-target="#modal"><i class='fa-solid fa-user-pen fa-lg i_editar'></i></button>`;
//       }
//       if (permiso_bajas) {
//          campo_botones += //html
//                `<button class='btn btn-outline-danger btn_eliminar' type='button' data-id='${obj.id}' title='Delete User' data-nombre='${obj.usuario}'><i class='fa-solid fa-trash-alt i_eliminar'></i></button>`;
//       }
//       campo_botones +=
//             `</div>
//          </td>`;

//       //Dibujar Tabla
//       tabla.row.add([
//          campo_usuario,
//          campo_correo,
//          campo_perfil,
//          campo_creado,
//          campo_botones
//       ]).draw().node();
//       tabla.columns.adjust().draw();
//    });
//    tbody.slideDown('slow');
// }


// //ACCIONES EN BOTONES DE LA TABLA
// tbody.click((e) => {
//    // console.log(e.target);
//    e.preventDefault();

//    //EDITAR OBJETO
//    if ($(e.target).hasClass("btn_editar") || $(e.target).hasClass("i_editar")) {
//       let btn_editar;

//       if ($(e.target).hasClass('i_editar')) { btn_editar = $(e.target).parent() }
//       else { btn_editar = $(e.target) }

//       $("#div_nueva_contrasenia").show();
//       $("#input_nueva_contrasenia").prop("readonly", true);
//       editarObjeto(btn_editar);
//    }

//    //ELIMINAR OBJETO
//    if ($(e.target).hasClass('btn_eliminar') || $(e.target).hasClass('i_eliminar')){
//       let btn_eliminar;

//       if ($(e.target).hasClass('i_eliminar')) { btn_eliminar = $(e.target).parent() }
//       else { btn_eliminar = $(e.target) }

//       eliminarObjeto(btn_eliminar);
//    }
// });

// //EDITAR OBJETO
// async function editarObjeto(btn_editar) {
//    modal_title.html("<i class='fa-solid fa-user-pen'></i></i>&nbsp; EDIT USER");
//     btn_enviar_formulario.removeClass("btn-success");
//     btn_enviar_formulario.addClass("btn-primary");
//     btn_enviar_formulario.text("SAVE");
//     div_contrasenia.hide();
//     div_nueva_contrasenia.show();

//     //EXCLUIR INPUTS PARA VALIDAR
//     input_contrasenia.addClass("excluir_validacion")
//     input_confirmar_contrasenia.addClass("excluir_validacion")

//    let id_objeto = btn_editar.attr('data-id');
//    let datos = {id:id_objeto, accion:"mostrar_objeto"};
//    const ajaxResponse = await peticionAjaxAsync(url_modelo_usuario_app,datos);
//    // peticionEditarObjeto(url_modelo_usuario_app,datos);

//    const obj = ajaxResponse.Datos;
//    //Formulario
//    id_modal.val(Number(obj.id));
//    input_usuario.val(obj.usuario);
//    input_correo.val(obj.correo);

//    datos = {accion:"mostrar_objetos"}
//    rellenarSelect2(url_modelo_perfil_app,datos,obj.perfil_id,"input_id_perfil");
//    setTimeout(() => {
//         input_usuario.focus();
//     }, 1000);
// }

// //ELIMINAR OBJETO
// async function eliminarObjeto(btn_eliminar) {
//    let titulo = "¿Are you sure you want to delete this user?";
//    let texto = `${btn_eliminar.attr("data-nombre")}`;

//    let fecha_actual = moment().format("YYYY-MM-DD hh:mm:ss");
//    let datos = {
//       accion: "eliminar_objeto",
//       id: Number(btn_eliminar.attr("data-id")),
//       eliminado: fecha_actual
//    }

//    await peticionEliminarObjetoAsync(titulo,texto,url_modelo_usuario_app,datos,"relllenarTabla()");
// }
