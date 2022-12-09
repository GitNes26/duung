export const Item = (props={}) => {
   let {answers, item_id, item_question} = props;
   let item =`
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
               <h1 class="fw-light text1__game">${item_question}</h1>
            </center>
         </div>
         <br />
         <div class="row">
   `;
         
   if (answers.length > 0) {
      item += `
            <center
               class="col-md-12 push btn_answer"
               data-c="${answers[0].answer_correct}"
               type="button"
               style="
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
                     ${answers[0].answer_text}
                  </h4>
               </div>
            </center>
      `;
      if (answers.length > 1) {
         item += `
            <center
               class="col-md-12 push btn_answer"
               data-c="${answers[1].answer_correct}"
               type="button"
               style="
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
                     ${answers[1].answer_text}
                  </h4>
               </div>
            </center>
         `;
         if (answers.length > 2) {
            item += `
            <center
               class="col-md-12 push btn_answer"
               data-c="${answers[2].answer_correct}"
               type="button"
               style="
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
                     ${answers[2].answer_text}
                  </h4>
               </div>
            </center>
            `;
            if (answers.length == 4) {
               item += `
            <center
               class="col-md-12 push btn_answer"
               data-c="${answers[3].answer_correct}"
               type="button"
               style="
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
                     ${answers[3].answer_text}
                  </h4>
               </div>
            </center>
               `;
            }
         }
      }
   }
   item += `
      </div>
   </div>
   `
   return item;
}

export const Items = () => {

}