import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/LoginForm.vue";
import Signup from "../components/SignUp.vue";
import forgetPassword from "../components/forgetPassword.vue";
import CreateBlog from "../components/CreateBlog.vue";
import Landing from "../components/landing.vue";
import SingleBlog from "../components/SingleBlog.vue";
import Profile from "../components/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Landing,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/reset",
    name: "resetPassword",
    component: forgetPassword,
  },
  {
    path: "/create",
    name: "CreateBlog",
    component: CreateBlog,
  },
  {
    path: "/blog",
    name: "SingleBlog",
    component: SingleBlog,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
