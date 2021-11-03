import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/LoginForm.vue";
import Signup from "../components/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
  },
  {
    path: "/register",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
