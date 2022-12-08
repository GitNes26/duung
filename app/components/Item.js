export const Item = (props={}) => {
   // let answers, id, question
   // if (props) {answers, id, question} = props;
   let {answers, id, question} = props;
   return`
      <div
         class="card__BlocGame position-absolute start-50 translate-middle-x"
      >
         <div class="row">
            <center
               class="col-md-12"
               style="
                  background-color: #ffffff;
                  border-radius: 20px;
                  height: 380px;
                  padding: 100px;
               "
            >
               <h1 class="fw-light text1__game">¿La pregunta es?</h1>
            </center>
         </div>
         <br />
         <div class="row">
            <center
               class="col-md-12 push"
               type="button"
               style="
                  background-color: #ffffff;
                  border-radius: 50px;
                  height: 80px;
                  margin-top: 10px;
               "
            >
               <div style="padding: 20px" class="row text-start">
                  <div
                     class="col-md-2 col-2"
                     style="
                        background-color: #dc0084;
                        border-radius: 50%;
                        font-weight: bold;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        padding-left: 15px;
                        color: #ffffff;
                     "
                  >
                     a)
                  </div>
                  <h4 class="fw-light col-md-10 col-10 text2__game">
                     Respuesta a
                  </h4>
               </div>
            </center>

            <center
               class="col-md-12 push"
               type="button"
               style="
                  background-color: #ffffff;
                  border-radius: 50px;
                  height: 80px;
                  margin-top: 10px;
               "
            >
               <div style="padding: 20px" class="row text-start">
                  <div
                     class="col-md-2 col-2"
                     style="
                        background-color: #0088dc;
                        border-radius: 50%;
                        font-weight: bold;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        padding-left: 15px;
                        color: #ffffff;
                     "
                  >
                     b)
                  </div>
                  <h4 class="fw-light col-md-10 col-10 text2__game">
                  Respuesta b
                  </h4>
               </div>
            </center>

            <center
               class="col-md-12 push"
               type="button"
               style="
                  background-color: #ffffff;
                  border-radius: 50px;
                  height: 80px;
                  margin-top: 10px;
               "
            >
               <div style="padding: 20px" class="row text-start">
                  <div
                     class="col-md-2 col-2"
                     style="
                        background-color: #1adc00;
                        border-radius: 50%;
                        font-weight: bold;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        padding-left: 15px;
                        color: #ffffff;
                     "
                  >
                     c)
                  </div>
                  <h4 class="fw-light col-md-10 col-10 text2__game">
                  Respuesta c
                  </h4>
               </div>
            </center>
            <center
               class="col-md-12 push"
               type="button"
               style="
                  background-color: #ffffff;
                  border-radius: 50px;
                  height: 80px;
                  margin-top: 10px;
               "
            >
               <div style="padding: 20px" class="row text-start">
                  <div
                     class="col-md-2 col-2"
                     style="
                        background-color: #c47600;
                        border-radius: 50%;
                        font-weight: bold;
                        width: 40px;
                        height: 40px;
                        padding: 5px;
                        padding-left: 15px;
                        color: #ffffff;
                     "
                  >
                     d)
                  </div>
                  <h4 class="fw-light col-md-10 col-10 text2__game">
                  Respuesta d
                  </h4>
               </div>
            </center>
         </div>
      </div>
   `
}