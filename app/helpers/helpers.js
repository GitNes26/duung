export const span_requiered = $(".span_requiered").html(
   `<span class="text-danger fst-italic">&nbsp; * required</span>`
 );

export function iconEye() {

   $(".icon_eye").click((e) => {
      const target = $(e.target);
      target.toggleClass("fa-solid fa-eye fa-duotone fa-eye-slash");
      const input = $(`input#${target.attr('data-input')}`)
      if (target.hasClass("fa-eye")) input.prop("type","text")
      else input.prop("type","password")
   })
}

export const route = (path) => location.hash=`#/${path}`;

export const getSession = () => Cookies.get('active_session');
export const getToken = () => Cookies.get('active_token');
export const getId = () => Cookies.get('active_id');
export const getUsername = () => Cookies.get('active_username');
export const getRole = () => Cookies.get('active_role');
export const getEmail = () => Cookies.get('active_email');
export const getCookie = (name) => Cookies.get(name);

const expires = 10; //dias
export const setCookies = (objResponse) => {
   Cookies.set('active_session', true, {expires});
   Cookies.set('active_token', objResponse.token, {expires});
   Cookies.set('active_id', objResponse.data.id, {expires});
   Cookies.set('active_username', objResponse.data.username, {expires});
   Cookies.set('active_role', objResponse.data.role_id, {expires});
   Cookies.set('active_email', objResponse.data.email, {expires});
   Cookies.set('musicSound', true, {expires});
   Cookies.set('efectsSound', true, {expires});
}
export const setCookie = (name,value) => Cookies.set(name, value, {expires})

export const CleanCookies = () => {
   Cookies.remove('active_session', {expires});
   Cookies.remove('active_token', {expires});
   Cookies.remove('active_id', {expires});
   Cookies.remove('active_username', {expires});
   Cookies.remove('active_role', {expires});
   Cookies.remove('active_email', {expires});
}
export const removeCookie = (name) => Cookies.remove(name, {expires})

export const playAudio = (audio) => {
   // console.log("audio");
   const event_audio = document.querySelector("#audio_events");
   event_audio.volume = 0.1;
   event_audio.src = `/app/assets/audios/${audio}`;

   if (audio == "error-answer.mp3") event_audio.currentTime = 5;
   event_audio.play();
}

export const shuffleArray = (inputArray) => inputArray.sort(()=> Math.random() - 0.5);