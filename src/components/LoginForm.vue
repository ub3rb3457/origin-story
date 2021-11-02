<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="Email address"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type your email']"
      />

      <q-input
        filled
        v-model="password"
        label="Your password *"
        hint="Password"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Please type your password',
        ]"
      />

      <!-- <q-side-link tag="a" to="/SignUpForm.vue">Go to Route</q-side-link> -->
      <p class="signup">Already have an account? <a href="#">Sign Up</a></p>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const email = ref(null);
    const password = ref(null);
    const accept = ref(false);

    return {
      email,
      password,
      accept,

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

      onReset() {
        email.value = null;
        password.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style>
.signup {
  color: grey;
}

.signup a {
  text-decoration: none;
  transition: 0.2s ease-in;
}

.signup a:visited {
  color: grey;
}

.signup a:hover {
  color: black;
  transform: scale(1.1);
}
</style>
