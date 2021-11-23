<template>
  <q-header class="glossy">
    <q-toolbar>
      <div class="q-pa-md"></div>
      <q-btn flat icon="keyboard_backspace" @click="$router.go(-1)"></q-btn>
      <q-toolbar-title class="name"> MyBlog & Me </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <div class="work">
    <div v-if="!(blog_id > 0)" class="error">
      <h3 class="title">Error</h3>
      <p>
        Blog post was unable to be loaded. Invalid blog post id was passed
        through. Please return to previous page.
      </p>
    </div>
    <div v-else class="test">
      <h3 class="title">{{ blog_details.title }}</h3>
      <p>
        {{ blog_details.content }}
      </p>
      <p v-for="hashtags in blog_details.hashtags" :key="hashtags" class="tags">
        #book #read #home
      </p>
      <q-btn flat icon="thumb_up_off_alt"></q-btn>
      <q-btn flat icon="thumb_down_off_alt"></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog_id: window.localStorage.getItem("Blog_id"),
      blog_details: JSON.parse(window.localStorage.getItem("Blog_details")),
    };
  },
};
</script>

<style></style>
