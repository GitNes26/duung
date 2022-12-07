const sectionGameArea = document.querySelector('#sectionGameArea');

sectionGameArea.innerHTML = `
<div class="context">


       <div class="shadow reloj__position">
              <p class="reloj__let">00:00</p>
       </div>

       <main class="bloquePrincipal">
         <div class="position-relative">
           <div class="card__BlocGame position-absolute  start-50 translate-middle-x ">
          
              <div class="row ">
                     <center class="col-md-12" style="background-color:#ffffff;border-radius:20px;height: 380px;padding: 100px;">
                     <h1 class="fw-light">¿La pregunta es?</h1>   
                     </center>
              </div>
              <br/>
              <div class="row">
                     <center class="col-md-12 push" type="button" style="background-color:#ffffff;border-radius:50px;height:80px;margin-top: 10px;">
                     <div style="padding:20px;" class="row text-start">
                       <div class="col-md-2 col-2" style="background-color:#dc0084;border-radius:50%;width:40px;height:40px; padding: 5px;padding-left:15px;color: #ffffff;">a)</div>
                       <h4 class="fw-light col-md-10 col-10 ">¿La pregunta es?</h4> 
                     </div>   
                     </center>

                     <center class="col-md-12 push" type="button" style="background-color:#ffffff;border-radius:50px;height:80px;margin-top: 10px;">
                     <div style="padding:20px;" class="row text-start">
                            <div class="col-md-2 col-2" style="background-color:#0088dc;border-radius:50%;width:40px;height:40px; padding: 5px;padding-left:15px;color: #ffffff;">b)</div>
                            <h4 class="fw-light col-md-10 col-10 ">¿La pregunta es?</h4> 
                     </div>   
                     </center>

                     <center class="col-md-12 push" type="button" style="background-color:#ffffff;border-radius:50px;height:80px;margin-top: 10px;">
                     <div style="padding:20px;" class="row text-start">
                            <div class="col-md-2 col-2" style="background-color:#1adc00;border-radius:50%;width:40px;height:40px; padding: 5px;padding-left:15px;color: #ffffff;">c)</div>
                            <h4 class="fw-light col-md-10 col-10 ">¿La pregunta es?</h4> 
                     </div>   
                     </center>

              </div>
              
           </div>
           
         </div> 
         <img class="d-md-block d-none position-absolute  start-50 translate-middle-x img__central1" src="Images/circles.png"/>      
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