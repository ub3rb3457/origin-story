<template>
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
        />
        <q-toolbar-title>
          Profile
        </q-toolbar-title>
        <q-toolbar-title>
          MyBlog & Me
        </q-toolbar-title>

  <div class="q-pa-md">
    <q-btn-dropdown style="background: #6CE34E; font-family:Racing Sans One, Cursive" label="Options" dropdown-icon="change_history">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Saved Blogs</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Create Blogs</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Log Out</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
      </q-toolbar>
    </q-header>
    <div class="container">
        <div class="profile">
            <div class="details">
                <h2>Name: </h2>
                <p>Author</p>
            </div>
            <div class="details">
                <h2>Email: </h2>
                <p>example@email.com</p>
            </div>
            <div class="details">
                <h2>Password: </h2>
                <p>***********</p>
            </div>

        </div>
        <div class="blogs">
            <div class="blog">
                <h2>My Blogs: </h2>
                <p>12</p>
            </div>
            <div class="blog">
                <h2>Saved Blogs: </h2>
                <p>12</p>
            </div>
        </div>
        <div class="tags">
            <h2>Tags: </h2>
                <div>
                    <p>#back </p>
                    <p>#real </p>
                    <p>#home </p>
                </div>
        </div>
    </div>
        <div class="content">
            <h2>My Blogs</h2>
            <div></div>
        </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
    setup() {
        const $q = useQuasar();
        name: "Profile";
    }
}
</script>

<style>
.q-toolbar__title {
  font-family: Racing Sans One, cursive;
  font-size: 30px;
}
.container{
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.profile{
    width: 18vw;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    box-shadow: -11px 12px 11px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: -11px 12px 11px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: -11px 12px 11px -2px rgba(0,0,0,0.75);
    border:1px solid black;
    border-radius: 10px;
    margin-top:20px;
    padding:5px
}
.details{
    display:flex;
    align-items: center;
    flex-direction: row;
    text-align: center;
}
.details h2{
    font-size: 1rem;
    margin:10px;
    font-weight: bolder;
}
.details p{
    margin-top: 15px;
}
.blogs{
    width: 20vw;
    margin-left:30px;
}
.blog{
    display:flex;
    flex-direction: row;
    border-bottom: 2px solid black;
    margin-top: 20px;
}
.blog h2{
    font-size: 1rem;
    font-weight: bolder;
    display:flex;
    justify-content: center;
}
.blog p{
    margin-top: 33px;
    margin-left:20px;
}
.tags{
    padding:20px;
}
.tags h2{
   font-size: 1rem;
   font-weight:bolder;
   margin-top: 20px;
   border-bottom: 2px solid black;
}
.tags div{
    display:flex;
    flex-direction: row;
}
.content{
    width:100vw;
    height:auto;
    display:flex;
    justify-content: space-around;
}
.content h2{
    font-size: 2rem;
    font-weight: bolder;
    margin-top:3rem;
    border-bottom: 2px solid black;
}
</style>