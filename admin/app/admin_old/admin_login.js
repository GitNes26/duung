const 
   head = document.querySelector("head"),
   body = document.querySelector("body"),
	main = document.querySelector("#main");

body.classList.add("login-page","body-login");

main.innerHTML = `
<div class="login-box">
   <div class="login-logo">
      <a href="/">
         <img class="img-responsive" src="/assets/images/logo_duung.png" style="width:80%"/>
         <div class="lead h4">Administrativo</div>
      </a>
   </div>

   <!-- Card Login -->
   <div class="card rounded-3 card-outline card-primary shadow" id="card_login">
      <div class="card-body login-card-body">
         <p class="login-box-msg text-sm fst-italic">Ingresa tus credenciales para iniciar sesión.</p>

         <form id="form_login">
            <div class="form-floating mb-3">
               <input type="text" class="form-control rounded-lg" id='username' name='username' placeholder="Nombre de usuario" autofocus="autofocus" data-nombre-campo="NOMBRE DE USUARIO"/>
               <label for="username">Nombre de usuario</label>
            </div>
            <div class="form-floating mb-3">
               <input type="password" class="form-control" id='password' name='password' placeholder="Password" autocomplete="off" data-nombre-campo="CONTRASEÑA"/>
               <label for="password">Contraseña</label>
               <i class="fa-duotone fa-eye-slash icon_eye" data-input="password"></i>
            </div>
            <div class="row">
               <div class="col">
                  <button type="submit" id="btn_iniciar_sesion" class="btn btn-outline-primary btn-block fw-bold text-center">
                     <i class="fa-solid fa-circle-arrow-right"></i>&nbsp;&nbsp;SIGN-IN
                  </button>
                  <br>
                  <a class="float-start" id="btn_registrar" style="cursor:pointer">SIGN UP!</a>
                  <a href="/" class="float-end">Return to main page</a>
               </div>
               <!-- /.col -->
            </div>
         </form>
      </div>
      <!-- /.login-card-body -->
   </div>
</div>
   
`;
// head.innerHTML = `
//    <link rel="stylesheet" type="text/css" href="css/logInStyle.css" />
//    <link rel="stylesheet" href="css/style.css" />
//    <link rel="stylesheet" href="css/fondo.css" />
//    <link
//       href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
//       rel="stylesheet"
//    />

//    <link
//       rel="stylesheet"
//       href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
//    />
//    <title>DUUNG</title>
// `;

const form = document.querySelector("#form_login");
form.addEventListener("submit", async function (e) {
   e.preventDefault();
   // VALIDACION DE FORMULARIO
   if (!inputsValidate(this)) return;

   // CREACION DE LA DATA QUE SE ENVIARA A LA PETCION
   const data = {
      username: document.querySelector("#username").value,
      password: document.querySelector("#password").value,
   }
   // ENVIAR PETICION
   const objResponse = await FetchRequest(`login`, POST, data);

   console.log("🚀 ~ file: login.js:62 ~ objResponse", objResponse)

   const dataResponse = objResponse.data;

   if (!objResponse.status) return;
   Cookies.set('token', `${objResponse.token}`);
   console.log(Cookies.get());
   Swal.fire({
      icon: `${objResponse.alert_icon}`,
      title: `BIENVENIDO <br> ${dataResponse.username}`,
      text: ``,
      showConfirmButton: false,
      confirmButtonColor: "#494E53",
      timer: 1500
   }).then(() => {
      location.assign(`${location.origin}#/admin`);
   })
});
