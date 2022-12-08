import { Router } from "./components/Router.js";
import { validateSession } from "./helpers/validates.js";

export async function App() {
   let hash = location.hash
   const validate_session = await validateSession()
   if (hash === '' || hash === '#/') {
      if (!validate_session) console.log("sin sesion en el splash");//location.hash = '';
   }
   else if (hash === '#/login' || hash === '#/signup') {
      if (validate_session) location.hash = "#/main";
   }
   else if (hash === '#/main') {
      if (!validate_session) location.hash = '/';
   }

   Router();
}

// console.log(API);

// Loader();
// GET_fetchRequestAsync(API.USERS, API.GET).then(res =>{
//    console.log(res);
//    CloseLoader();
// })