<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">
    <q-form
      @submit="onSubmit"
     
      class="q-gutter-md"
      style="margin-top: 0; margin-left: none"
    >
      <h4>SignUp</h4>
      <q-input

        filled
        v-model="username"

        rounded outlined
        v-model="name"

        label="Username"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Enter a Username']"
      />

      <q-input
        v-model="email"
        rounded outlined
        type="email"
        label="Email"
        lazy-rules

        :rules="[ val => val && val.length > 0 || 'Enter a Email Address']"
        />
     

        <q-input v-model="password"
            filled :type="isPwd ? 'password' : 'text'"
            label="Password"
            lazy-rules
            :rules="[ val => val.length > 0 || 'Enter a Password' ]"
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
      <p class="signup">Already have an account? <router-link to="/"><span class="link">Login</span></router-link></p>
      <div>
        <q-btn  label="Submit" type="submit" color="primary"/>
        <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
      </div>

        :rules="[(val) => (val && val.length > 0) || 'Enter a Email Address']"
      />
      <!-- <q-input
        filled
        type="password"
        v-model="age"
        label="Password"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />


        <q-input v-model="password" filled type="password" hint="Password" /> -->

      <q-input
        v-model="password"
        rounded outlined
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

      <q-btn
        label="Sign Up"
        type="submit"
        style="background: linear-gradient(180deg,rgba(255, 255, 255, 0.4) 0%,rgba(0, 0, 0, 0) 100%),#6ce34e;
          width: 325px;
          font-family: Racing Sans One, cursive;
          text-transform: capitalize;
          font-size: 15px;
        "
      />
      <br />
      <!-- <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /> -->
      <p class="signup">Already have an account? <a href="#">Log In</a></p>
      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();


    const username = ref(null)
    const password = ref(null)
    const email = ref(null)

    return {
      username,
      password,
      isPwd: ref(true),
      email,

      onSubmit () {
        if (email.value !== true) {

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),

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


      
    }
  },
  methods:{
   onSubmit(){
   this.$router.push('/'); 
      }
  }
}
</script>

<style>
.link{
  color: black;
}
</style>

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style>
</style>

