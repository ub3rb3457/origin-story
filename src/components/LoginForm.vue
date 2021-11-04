<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">
    <q-form @submit="onSubmit" class="q-gutter-md" style="margin-top: 0">
      <h4>Login</h4>
      <q-input
        rounded
        outlined
        v-model="email"
        label="Your email *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your email']"
      />

      <q-input
        rounded
        outlined
        :type="isPwd ? 'password' : 'text'"
        v-model="password"
        label="Your password *"
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

      <div>
        <q-btn
          label="Login"
          type="submit"
          style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%,  rgba(0, 0, 0, 0) 100%), #6ce34e;
            width: 320px;
            font-family: Racing Sans One, cursive;
            text-transform: capitalize;
            font-size: 15px;
          "
        />
      </div>
      <!-- <q-side-link tag="a" to="/SignUpForm.vue">Go to Route</q-side-link> -->

      <p class="signup">Don't have an account? <a href="#">Sign Up</a></p>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "LoginForm",
  setup() {
    const $q = useQuasar();

    const email = ref(null);
    const password = ref(null);
    const accept = ref(false);

    return {
      email,
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
h4 {
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
p{
  display: flex;
  justify-content: center;
}
.block{
  font-size: x-large
}
</style>
