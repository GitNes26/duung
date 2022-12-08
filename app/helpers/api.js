const 
GET = "GET",
POST = "POST",
UPDATE = "UPDATE",
DELETE = "DELETE",
PATCH = "PATCH",
// PROTOCOL = "https://",
// HOST = "persidpanute.maemm.xyz",
PROTOCOL = "http://",
HOST = "127.0.0.1:8000",
<<<<<<< HEAD
// HOST = "persidpanute.maemm.xyz",
=======
>>>>>>> 67ada2a9661d4e7b12683b4cafcff13509e6f2f9
DOMAIN = `${PROTOCOL}${HOST}`,
API_URL = `${DOMAIN}/api`,
SIGNUP = `${API_URL}/signup`,
LOGIN = `${API_URL}/login`,
LOGOUT = `${API_URL}/logout`,
USERS = `${API_URL}/users`,
ROLES = `${API_URL}/roles`,
SUBJETS = `${API_URL}/subjets`,
DIFFICULTS = `${API_URL}/difficults`,
TYPES_QUESTION = `${API_URL}/types_question`,
ITEMS = `${API_URL}/items`,
ANSWERS = `${API_URL}/answers`,
GAMES = `${API_URL}/games`,
TIPS = `${API_URL}/tips`
;

export default {
   GET,
   POST,
   UPDATE,
   DELETE,
   PATCH,
   PROTOCOL,
   HOST,
   DOMAIN,
   API_URL,
   SIGNUP,
   LOGIN,
   LOGOUT,
   USERS,
   ROLES,
   GAMES,
   SUBJETS,
   DIFFICULTS,
   TYPES_QUESTION,
   ITEMS,
   ANSWERS,
   TIPS
}