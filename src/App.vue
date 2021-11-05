<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <!-- <CreateBlog/>
      <ForgetPassword />
      <SignUp />

      <LoginForm /> -->



    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import SignUp from "./components/SignUp.vue";
import LoginForm from "./components/LoginForm.vue";
import CreateBlog from './components/CreateBlog.vue'
import ForgetPassword from './components/forgetPassword.vue'

export default {
  components: { LoginForm, SignUp, CreateBlog, ForgetPassword },
  name: 'LayoutDefault',

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
