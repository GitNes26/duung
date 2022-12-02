const 
GET = "GET",
POST = "POST",
UPDATE = "UPDATE",
DELETE = "DELETE",
PATCH = "PATCH",
PROTOCOL = "http://",
NAME = "127.0.0.1:8000",
DOMAIN = `${PROTOCOL}${NAME}`,
API_URL = `${DOMAIN}/api`,
LOGIN = `${API_URL}/login`,
LOGOUT = `${API_URL}/logout`,
USERS = `${API_URL}/users`,
ROLES = `${API_URL}/roles`
;

export default {
   GET,
   POST,
   UPDATE,
   DELETE,
   PATCH,
   PROTOCOL,
   NAME,
   DOMAIN,
   API_URL,
   LOGIN,
   LOGOUT,
   USERS,
   ROLES,
}