<template>
  <div class="forget">
    <q-form>
      <h4>Reset Password</h4>
      <q-input filled v-model="email" placeholder="Email" />
      <br />
      <q-input
        filled
        v-model="New"
        :type="isPwd ? 'password' : 'text'"
        placeholder="New Password"
      />
      <br />
      <q-input
        v-model="confirm"
        filled
        :type="isPwd ? 'password' : 'text'"
        placeholder="Confirm Password"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <br/>
      <q-btn :ripple="{ color: 'white' }"
        style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #6ce34e;
          width: 300px;
          font-family: Racing Sans One, cursive;
          text-transform: capitalize;
          font-size: 15px;
        "
        label="Reset Password"
      />
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "forgetPassword",
  setup() {
    return {
      email: ref(""),
      New: ref(""),
      confirm: ref(""),
      isPwd: ref(true),
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');

.forget {
  display: flex;
  justify-content: center;
  align-items: center;
}
.q-form {
    padding: 50px;
    width: 400px;
    background: #176CEA;
    border-radius: 20px;
}
.q-input{
    background: white;
    border-radius: 30px;
}
h4{
    margin-top: 0;
    font-family: Racing Sans One, cursive;
    color: #FFFFFF;
}
</style>
