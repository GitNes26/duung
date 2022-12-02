const validateSession = () => {
   console.log("validateSession()");
   const coockie_session = Cookies.get('session_active')
   console.log(coockie_session);
}