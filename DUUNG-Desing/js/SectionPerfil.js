const sectionPerfil = document.querySelector('#sectionPerfil');

sectionPerfil.innerHTML = `
    <div class="context"> 
        <div class="position-relative">
            <img src="images/Viñetas/Perfil.png" class="circlePurple position-absolute top-0 end-0"/>
        </div>

        <main class="bloquePrincipal">
            <div class="space__cardP">
            <div class="bg__cardP">
                <div class="scroll__cardP">
                    <h1 class="text-center title__p">Perfil</h1>
            
                    <div class="col-md-8">
                        <div>
                            <label class="label__p fw-bold">Nombre de usuario</label>
                            <p class="text__p fw-light">Sol</p>
                        </div>
                        <div>
                            <label class="label__p fw-bold">Nombre</label>
                            <p class="text__p fw-light">Sol</p>
                        </div>
                        <div>
                            <label class="label__p fw-bold">Edad</label>
                            <p class="text__p fw-light">Sol</p>
                        </div>
                        <div>
                            <label class="label__p fw-bold">Sexo</label>
                            <p class="text__p fw-light">Sol</p>
                        </div>
                    
                        <div>
                            <label class="label__p fw-bold">Nueva Contraseña</label>
                            <input type="text" class="form-control input__p"/>   
                        </div>

                        <div>
                            <label class="label__p fw-bold">Confirmar contreseña</label>
                            <input type="text" class="form-control input__p"/>   
                            <button type="submit" class="btn button__p">Aceptar</button>
                        </div> 
                    </div>
                </div>
               
            </div>
            </div>
            
        </main>  
    </div>


    <div class="areaPink" >
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

`