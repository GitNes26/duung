const sectionWinner = document.querySelector('#sectionWinner');

sectionWinner.innerHTML = `
<div class="context">
    <main class="bloquePrincipal">
      <div class="position-relative">
       <h1 class="position-absolute title__p1 start-50 translate-middle-x">Partida Terminada</h1>
        <img class="position-absolute  start-50 translate-middle-x img__central" src="Images/Winner.png"/>
        <div class="position-absolute  start-50 translate-middle-x button__central" >
              <img class="push button__size" type="button"  src="Images/return.png" width="130px;"/>
        </div>
      </div>


     <div class="position-relative">
      <div class="position-absolute bottom-0 end-0" style="top:80vh;margin-right:50px;">
        <h4 class="leter__score">Score: 0000</h4>
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