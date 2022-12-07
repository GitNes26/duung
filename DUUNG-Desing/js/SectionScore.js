const sectionScore = document.querySelector('#sectionScore');

sectionScore.innerHTML = `
<div class="context"> 
    <div class="position-relative">
        <img src="images/Viñetas/Score.png" class="circlePurple position-absolute top-0 end-0"/>
    </div>

    <main class="bloquePrincipal">
        <div class="space__cardSc">
        <h1 class="text-center title__Sc">Score</h1>
        <div class="bg__cardSc contenedor-light">
      
        <div class="col-md-12">

            <div class="row">
                <div class="col">
                    <div class="card push item__Sc" style="border-radius:20px;">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-light">Cultura General</h5>
                        <div class="row">
                        <div class="col-md-3">
                            <img class="d-md-block d-none img__Sc" src="Images/9.png"/>
                        </div>
                        <div class="col-md-9">
                            <div class="progress">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>

                            <div class="bloc__sc1">
                                <p class="fw-light">High Score: 10090</p>
                                <p class="fw-light bloc__sc2">Last Score: 500</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
  
        </div>
        </div>
        
    </main>  
</div>


<div class="areaGreen" >
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