const sectioStarPartida = document.querySelector('#sectioStarPartida');

sectioStarPartida.innerHTML = `
<div class="context">
       <main class="bloquePrincipal">
         <div class="position-relative">
              <h1 class="position-absolute title__cardConfigurate start-50 translate-middle-x">Elije tu partida</h1>
              <img class="d-md-block d-none position-absolute  start-50 translate-middle-x img__central" src="Images/circles.png"/>


           <div class="card position-absolute start-50 translate-middle-x shadow card__Bloc" style="border-radius:50px;">
              <div class="card-body" style="padding:30px;">
                     <div class="container">
                     <center>
                            <div>
                                   <label><h4 class="subTittle__card">Materia</h4></label>
                                   <div></div>
                                   <select class="form-select form-select-lg mb-3 fw-light" style="font-size:15px;border-radius:20px;margin-top:10px;" aria-label="Ejemplo de .form-select-lg">
                                          <option class="fw-light" selected>Abre este menú select</option>
                                          <option class="fw-light" value="1">Uno</option>
                                          <option class="fw-light" value="2">Dos</option>
                                          <option class="fw-light" value="3">Tres</option>
                                   </select>
                            </div>
                            <div>
                                   <label><h4 class="subTittle__card">Intensidad</h4></label>
                                   <div class="bloc__section">
                                          <div class="row">
                                                 <div class="col-md-4">
                                                 <input type="radio" class="btn-check" name="options-outlined" id="nivel1" autocomplete="off">
                                                 <label class="btn btn-outline-dark space__section" for="nivel1">Bebe llorón</label>    
                                                 </div>
                                                 <div class="col-md-4">
                                                 <input type="radio" class="btn-check" name="options-outlined" id="nivel2" autocomplete="off">
                                                 <label class="btn btn-outline-dark space__section" for="nivel2">Medias tintas</label>    
                                                 </div>
                                                 <div class="col-md-4">
                                                 <input type="radio" class="btn-check" name="options-outlined" id="nivel3" autocomplete="off">
                                                 <label class="btn btn-outline-dark space__section" for="nivel3">Super fortachon</label>    
                                                 </div>
                                          </div>
                                   </div>
                                   
                            </div>
                            <div class="position-absolute start-50 translate-middle-x b__position">
                              <img class="b__size push" type="button" src="Images/play2.png" />
                            </div>
                            
                     </center>
                     </div>
                     <!-- ------------------SI SE DESEA AGRGAR MÁS FORMAS DE HACER PARTIDAS--------------------------------- -->
                     <!-- <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner size__contentCarrrusel">
                              <div class="carousel-item active" data-bs-interval="10000">
                                <div class="d-block w-100 space__contentCard">
                                  <h5>Patida rápida</h5>
                                  <p>Algún contenido placeholder representativo para la primera diapositiva.</p>
                                </div>
                              </div>

                              <div class="carousel-item" data-bs-interval="2000">
                                <div class="d-block w-100 space__contentCard">
                                  <h5>Cultura General</h5>
                                  <p>Algún contenido placeholder representativo para la segunda diapositiva.</p>
                                </div>
                              </div>

                              <div class="carousel-item">
                                <div class="d-block w-100 space__contentCard">
                                  <h5>Por Materia</h5>
                                  <p>Algún contenido placeholder representativo para la tercera diapositiva.</p>
                                </div>
                              </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Anterior</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Siguiente</span>
                            </button>
                     </div> -->
              </div>
           </div>
           
         </div>
           
              
       
         
           
       </main> 
   </div>
   
   
   <div class="areaPurple1" >
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