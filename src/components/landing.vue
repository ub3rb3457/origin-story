<template>
 <q-header elevated class="glossy">
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
    <q-toolbar-title>
        MyBlog & Me
    </q-toolbar-title>
    <div class="entry">
        <q-btn @click="signUp()" label="Sign Up" icon="app_registration"></q-btn>
        <q-btn @click="logIn()" label="Log In" icon="login"></q-btn>
    </div>
      </q-toolbar>
    </q-header>
    <q-body>
        <div>
            <div class="test">
                <h3 class="title">Blog-title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facilis magni, porro libero nihil impedit debitis fugit unde alias quo velit cumque consequuntur temporibus, minus veniam aut accusamus sed commodi.</p>
                <p class="tags">#book #read #home</p>
            </div>
            <div class="test">
                <h3 class="title">Blog-title</h3>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facilis magni, porro libero nihil impedit debitis fugit unde alias quo velit cumque consequuntur temporibus, minus veniam aut accusamus sed commodi.</p>
                <p class="tags">#book #read #home</p>
            </div>
            <div class="test">
                <h3 class="title">Blog-title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facilis magni, porro libero nihil impedit debitis fugit unde alias quo velit cumque consequuntur temporibus, minus veniam aut accusamus sed commodi.</p>
                <p class="tags">#book #read #home</p>
            </div>
        </div>
    </q-body>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, resolveDirective } from "vue";

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

<style>
body{
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
</style>