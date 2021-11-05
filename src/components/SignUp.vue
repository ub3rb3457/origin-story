<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
      style="margin-top: 0; margin-left: 0"
    >
      <h4>SignUp</h4>
      <q-input
        rounded outlined
        v-model="username"
        label="Username"
        class="Signin-input"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Enter a Username']"
      />

      <q-input
        v-model="email"
        rounded outlined
        filled
        type="email"
        label="Email"
        class="Signin-input"
        lazy-rules
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
        filled
        :type="isPwd ? 'password' : 'text'"
        label="Password"
        class="Signin-input"
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

    validateSigininUser() {
      let inputs = document.querySelectorAll(".Signin-input");

      // // // Validation
      console.log(inputs);

      // let valCharacter = true;

      // inputs.forEach((input) => {
      //   if (input.value == "") {
      //     valCharacter = false;
      //   }
      // });

      // if (valCharacter) {
      //   fetch("http://localhost:3690/users").then((request) => {
      //     request
      //       .json()
      //       .then((obj) => {
      //         obj.forEach((user) => {
      //           if (
      //             user.username == inputs[0].value ||
      //             user.email == inputs[1].value ||
      //             user.password == inputs[2].value
      //           ) {
      //             throw new Error("Details Already Used");
      //           }
      //         });
      //         // signinValidUser();
      //         console.log("Loged_In");
      //       })
      //       .catch((err) => alert(err));
      //   });
      // } else alert("Please enter Your details!");
    },

    async signinValidUser() {
      let inputs = document.querySelectorAll(".Signin-input");

      let url = "http://localhost:3690/users";
      let data = {
        username: inputs[0].value,
        email: inputs[1].value,
        password: inputs[2].value,
      };

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      // // // Login
      let match = false;

      await fetch("http://localhost:3690/users").then((request) => {
        request.json().then((obj) => {
          obj.forEach((user) => {
            if (
              data.username == user.username &&
              data.password == user.password
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
            displaySignin.innerHTML = ``;
            popRegisterButtons();
            popBlogs();
          }
        });
      });
    },
  },
};
</script>

<style>
.q-toolbar__title {
  font-family: Racing Sans One, cursive;
  font-size: 30px;
}
.link{
  color: black;
}
</style>
