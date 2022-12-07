const sectionPrincipal = document.querySelector('#sectionPrincipal');

sectionPrincipal.innerHTML = `
<div class="context p__zone">
    <main class="bloquePrincipal1">

            <div class="space__blocs">
             
                <div class="row">
                    <div class="col-md-12">
                        <div class="content shadow push purple__bloc" onclick="purpleScroll()">
                        <div class="row">
                            <div class="col-md-3">
                                <img class=" d-md-block d-none img1__bloc1" src="Images/14.png"/>
                            </div>
                            <div class="col-md-6 col-8">
                                <h1 class="fw-bold tit__bloc">Comenzar<br/> Partida</h1>
                            </div>
                            <div class="col-md-3 col-8 circle__bloc1">
                               <img class="push btn__part" type="button" style="margin-top:20px;" src="Images/play.png" width="100%"/>
                                
                            </div>
                        </div>
                        </div>  
                    </div>

                    <div class="col-sm-3">
                        <div class="content shadow push pink__bloc" onclick="pinkScroll()">
                            <img src="Images/Avatar/Iperfil.png" class="images__bloc"/>
                        </div>
                        <div class="content shadow push yellow__bloc" onclick="yellowScroll()">
                            <img src="Images/Avatar/ICultiva.png" class="images__bloc"/>
                        </div>
                                    
                    </div>
                    <div class="col-sm-3">
                        <div class="content shadow push green__bloc" onclick="greenScroll()">
                            <img src="Images/Avatar/IScore.png" class="images__bloc"/>
                        </div>
                        <div class="content shadow push blue__bloc" onclick="blueScroll()">
                            <img src="Images/Avatar/IConfiguracion.png" class="images__bloc"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="content d-md-block d-none"><img class="bloc__img" src="Images/1.png"/></div>
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