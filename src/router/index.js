import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/LoginForm.vue";
import Signup from "../components/SignUp.vue";
import forgetPassword from "../components/forgetPassword.vue";
import CreateBlog from "../components/CreateBlog.vue";
import Landing from "../components/landing.vue"

const routes = [
  {
    path: "/login",
    name: "Home",
    component: Landing,
  },
  {
    path: '/login',
    name: "Login",
    component: Login
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
