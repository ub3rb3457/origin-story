<template>
  <div class="forget">
    <q-form>
      <h4>Reset Password</h4>
      <q-input rounded outlined v-model="email" placeholder="Email" />
      <br />
      <q-input
        rounded outlined
        v-model="New"
        :type="isPwd ? 'password' : 'text'"
        placeholder="New Password"
      />
      <br />
      <q-input
        rounded outlined
        v-model="confirm"
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
      <br />
      <q-btn :ripple="{ color: 'white' }" label="Reset Password" 
      style=" background: linear-gradient(180deg,rgba(255, 255, 255, 0.4) 0%,rgba(0, 0, 0, 0) 100%),#6ce34e;
  width: 300px;
  font-family: Racing Sans One, cursive;
  text-transform: capitalize;
  font-size: 15px;"/>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("")
    const New = ref('')
    const confirm = ref('')
    const isPwd = ref(true)

    return { email, New, confirm, isPwd };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap");

.forget {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.q-form {
  padding: 50px;
  width: 400px;
  background: #176cea;
  border-radius: 20px;
  margin: 20px;
}
.q-input {
  background: white;
  border-radius: 30px;
}
h4 {
  margin: 0 0 20px 0;
  font-family: Racing Sans One, cursive;
  color: #ffffff;
  display: flex;
  justify-content: center;
}
.q-field__control {
  height: 37px;
  max-width: 100%;
  outline: none;
}

</style>
