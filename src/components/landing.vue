<template>
 <q-header class="glossy">
      <q-toolbar>
    <div class="q-pa-md">
    <q-btn-dropdown style="background: #6CE34E;" label="Filter" dropdown-icon="change_history">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>A-Z</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Oldest</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Newest</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
    <h5 class="name">
        MyBlog & Me
    </h5>
    <div class="entry" style="display: flex;">
        <q-btn style="background: #E34E72" @click="signUp()" label="Sign Up" icon="app_registration"></q-btn>
        <q-btn style="background: #E34E72" @click="logIn()" label="Log In" icon="login"></q-btn>
    </div>
      </q-toolbar>
    </q-header>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
    methods: {
        signUp () {
            window.location = '/register'
        },
        logIn () {
            window.location = '/login'
        }
    }
}
</script>

<style scoped>
.work{
    padding-left: 100px;
    padding-right: 100px;
}
.test {
    border-bottom: 1px dashed #000000;
    margin-top: 40px;
}
.title{
    font-size: 25px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: orange;
    margin: 0;
}
.tags{
    color: #5D5FEF;
    display: flex;
    justify-content: start;
}
.name{
  font-family: Racing Sans One, cursive;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 0;
}
.q-toolbar{
    display: flex;
    justify-content: space-between;
}

</style>