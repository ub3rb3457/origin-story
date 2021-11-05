<template>
  <q-header class="glossy">
    <q-toolbar>
      <div class="q-pa-md"></div>
      <q-btn flat icon="keyboard_backspace" @click="$router.go(-1)"></q-btn>
      <q-toolbar-title class="name"> MyBlog & Me </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">

    <q-form @submit="loginUser" class="q-gutter-md" style="margin-top: 0">
      <h4>Login</h4>
      <q-input
        rounded
        outlined
        v-model="username"
        label="Your username *"
        class="Login-input"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your username',
        ]"
      />

      <q-input
        rounded
        outlined
        :type="isPwd ? 'password' : 'text'"
        v-model="password"
        label="Your password *"
        class="Login-input"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your password',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <span class="signup"><a href="/reset">forgot password?</a></span>
      <div>
        <q-btn
          label="Login"
          type="submit"
          style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%,rgba(0, 0, 0, 0) 100%),#6ce34e;

            width: 320px;
            font-family: Racing Sans One, cursive;
            text-transform: capitalize;
            font-size: 15px;
          "
        />
      </div>
      <!-- <q-side-link tag="a" to="/SignUpForm.vue">Go to Route</q-side-link> -->

      <p class="signup">
        Don't have an account? <a href="/register">Sign Up</a>
      </p>

    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "LoginForm",
  methods: {
    async loginUser() {
      let inputs = document.querySelectorAll(
        ".Login-input > div > div > div > input"
      );
      let match = false;

      await fetch("http://localhost:3690/users").then((request) => {
        request.json().then((obj) => {
          obj.forEach((user) => {
            if (
              inputs[0].value == user.username &&
              inputs[1].value == user.password
            ) {
              window.localStorage.setItem("User_id", user.id);
              console.log(window.localStorage.getItem("User_id"));
              match = true;
              return;
            }
          });
          if (!match) alert("Username or Password is Incorect");
          else {
            alert("You have successfully logged in.");
            // Goes to the blog section
          }
        });
      });
    },
  },
  setup() {
    const $q = useQuasar();

    const username = ref(null);
    const password = ref(null);
    const accept = ref(false);

    return {
      username,
      password,
      accept,
      isPwd: ref(true),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
    };
  },
};
</script>

<style>
.q-toolbar__title {
  font-family: Racing Sans One, cursive;
  font-size: 35px;
}
.q-form {
  padding: 30px;
  width: 400px;
  background: #176cea;
  border-radius: 20px;
}
.q-field--outlined.q-field--rounded .q-field__control {
  border-radius: 28px;
  background: #ffffff;
}
.form-name {
  margin: 0 0 20px 0;
  font-family: Racing Sans One, cursive;
  color: #ffffff;
  display: flex;
  justify-content: center;
}
.signup {
  color: white;
}

.signup a {
  transition: 0.2s ease-in;
  color: greenyellow;
}

.signup a:visited {
  color: greenyellow;
}

.signup a:hover {
  color: black;
  transform: scale(1.1);
}
p {
  display: flex;
  justify-content: center;
}
.block {
  font-size: x-large;
}
.work {
  padding-left: 100px;
  padding-right: 100px;
}
.test {
  border-bottom: 1px dashed #000000;
  margin-top: 40px;
}
.title {
  font-size: 25px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: orange;
  margin: 0;
}
.tags {
  color: #5d5fef;
  display: flex;
  justify-content: start;
}
.name {
  font-family: Racing Sans One, cursive;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 0;
}
</style>
