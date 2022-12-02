// import { User } from "./globals.js";
import NavBar from "./navbar.js";
import SideBar from "./sidebar.js";
// import UserView from "./users.js";

// const User = User
const Navbar = new NavBar(User);
const Sidebar = new SideBar(User);
// const Userview = new UserView();

Navbar.navBar();
Sidebar.sideBar();
// Userview;