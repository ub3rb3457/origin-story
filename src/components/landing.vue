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
          v-if="!user_id"
          @click="signUp()"
          label="Sign Up"
          icon="app_registration"
        ></q-btn>
        <q-btn
          v-if="!user_id"
          @click="logIn()"
          label="Log In"
          icon="login"
        ></q-btn>
        <q-btn
          v-if="user_id"
          @click="viewProfile()"
          label="View Profile"
          icon="person"
        ></q-btn>
        <q-btn
          v-if="user_id"
          @click="logOut()"
          label="Log Out"
          icon="logout"
        ></q-btn>
      </div>
    </q-toolbar>
  </q-header>
  <q-body>
    <div class="blog-container"></div>
  </q-body>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, resolveDirective } from "vue";

export default {
  async mounted() {
    if (window.localStorage.getItem("User_id")) {
      console.log(window.localStorage.getItem("User_id"));
    }

    // console.log(document.querySelector(".blog-container"));
    let container = document.querySelector(".blog-container");
    container.innerHTML = ``;

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
    viewProfile() {
      window.location = "/profile";
    },
    signUp() {
      window.location = "/register";
    },
    logIn() {
      window.location = "/login";
    },
    logOut() {
      window.localStorage.removeItem("User_id");
      window.location = "/";
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
  data: function () {
    if (window.localStorage.getItem("User_id")) {
      return {
        user_id: true,
      };
    } else {
      return {
        user_id: false,
      };
    }
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
