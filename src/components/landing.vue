<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <div class="q-pa-md">
        <q-btn-dropdown
          style="background: #6ce34e"
          label="Filter"
          dropdown-icon="change_history"
        >
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
      <q-toolbar-title> MyBlog & Me </q-toolbar-title>
      <div class="entry">
        <q-btn
          @click="signUp()"
          label="Sign Up"
          icon="app_registration"
        ></q-btn>
        <q-btn @click="logIn()" label="Log In" icon="login"></q-btn>
      </div>
    </q-toolbar>
  </q-header>
  <q-body>
    <div class="blog-container">
      <div class="test">
        <h3 class="title">Blog-title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          facilis magni, porro libero nihil impedit debitis fugit unde alias quo
          velit cumque consequuntur temporibus, minus veniam aut accusamus sed
          commodi.
        </p>
        <p class="tags">#book #read #home</p>
      </div>
      <div class="test">
        <h3 class="title">Blog-title</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          facilis magni, porro libero nihil impedit debitis fugit unde alias quo
          velit cumque consequuntur temporibus, minus veniam aut accusamus sed
          commodi.
        </p>
        <p class="tags">#book #read #home</p>
      </div>
      <div class="test">
        <h3 class="title">Blog-title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          facilis magni, porro libero nihil impedit debitis fugit unde alias quo
          velit cumque consequuntur temporibus, minus veniam aut accusamus sed
          commodi.
        </p>
        <p class="tags">#book #read #home</p>
      </div>
    </div>
  </q-body>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, resolveDirective } from "vue";

export default {
  async mounted() {
    console.log(document.querySelector(".blog-container"));
    let container = document.querySelector(".blog-container");
    container.innerHTML = ``;
    // let content = [];

    await fetch(`http://localhost:3690/blogs`).then((request) => {
      request.json().then((obj) => {
        // console.log(obj);
        obj.forEach((blog) => {
          // console.log(blog);
          container.innerHTML += `
                  <div class="test">
                    <h3 class="title">${blog.title}</h3>

                    <p>${blog.content}</p>
                    <p class="tags tag-${blog.id}"></p>
                  </div>
                `;
        });
      });
    });

    fetch(`http://localhost:3690/blogs`).then((request) => {
      request.json().then((obj) => {
        // console.log(obj);
        obj.forEach((blog) => {
          this.popHashtag(blog);
        });
      });
    });
  },
  methods: {
    signUp() {
      window.location = "/register";
    },
    logIn() {
      window.location = "/login";
    },
    async popHashtag(blog) {
      let hashtagContainer = document.querySelector(`.tag-${blog.id}`);
      hashtagContainer.innerHTML = ``;
      await fetch(`http://localhost:3690/hashtags/blog/${blog.id}`).then(
        (request) => {
          request.json().then((obj) => {
            obj.forEach((hashtag) => {
              hashtagContainer.innerHTML += `#${hashtag.hashtag} `;
            });
          });
        }
      );
    },
  },
};
</script>

<style>
body {
  padding-left: 100px;
  padding-right: 100px;
}
.test {
  border-bottom: 1px dashed #000000;
  margin-top: 40px;
}
.title {
  font-size: 25px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: orange;
  margin: 0;
}
.tags {
  color: #5d5fef;
  display: flex;
  justify-content: start;
}
</style>
