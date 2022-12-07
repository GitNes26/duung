const navbar = document.querySelector('#navbar');

navbar.innerHTML = `
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
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
    </div>


    <div class="offcanvas-body contenedor-light">
        <div class="list-group border-0 rounded-0 text-sm-start min-vh-100">
            <nav class="nav flex-column">
                <a class="nav-link active " aria-current="page" href="#">
                    <img src="Images/2.png"   class="ico__principal">
                </a>

                <a onclick="purpleScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-home icon"></i>Home</a>
                <a onclick="purpleScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-gamepad icon"></i></i>Area de juego</a>
                <a onclick="greenScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-coins icon"></i>Score</a>
                <a onclick="yellowScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-brain icon"></i>Cultiva tu mente</a>
                <a onclick="pinkScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-user icon"></i>Perfil</a>
                <a onclick="blueScroll()" class="e__sidebar1 d-inline-block text-truncate" data-bs-parent="#sidebar" href="#"> <i class="fas fa-solid fa-wrench icon"></i>Configuraciones</a>
                
            </nav>
        </div>
    </div>
</div>
</div>

`