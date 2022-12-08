const d = document;

export function Loader() {
   const dialogoBlockUI = `
      <div class="text-center text-light" style="opacity:1 !important; width:40vw !important;">
         <div class="card-body">
            <img src="/app/assets/images/11.png" class="img__loading"/>
            <div class="fw-bold h6">CARGANDO...</div><br>
            <div class='spinner-border text-light' role='status'> <span class='sr-only'></span></div>
         </div>
      </div>
   `;
   // const showBlocUI = () => {
   $.blockUI({
      message: dialogoBlockUI,
      css: { backgroundColor: null, color: "#313131", border: null },
   });
   // }
}

export function CloseLoader() {
	$.unblockUI();
}