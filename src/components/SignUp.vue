<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Username"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Enter a Username']"
      />

      <q-input
        v-model="email"
        filled
        type="email"
        label="Email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Enter a Email Address']"
      />

      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        label="Password"
        lazy-rules
        :rules="[(val) => val.length > 0 || 'Enter a Password']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
      <p class="signup">
        Already have an account?
        <router-link to="/login"><span class="link">Login</span></router-link>
      </p>
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
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

    const username = ref(null);
    const password = ref(null);
    const email = ref(null);

    return {
      username,
      password,
      isPwd: ref(true),
      email,

      onSubmit() {
        if (email.value !== true) {
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
  methods: {
    onSubmit() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.link {
  color: black;
}
</style>
