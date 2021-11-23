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
    <div v-for="blog in this.blogs" :key="blog" class="blog-container">
      <div class="test">
        <h3 class="title">{{ blog.title }}</h3>

        <p>{{ blog.content }}</p>
        <div class="hashtages">
          <p v-for="hashtag in blog.hashtags" :key="hashtag" class="tags">
            #{{ hashtag.hashtags }}
          </p>
        </div>
        <q-btn @click="viewBlog(blog.id)" label="View Blog"></q-btn>
        <b data="blog_id"></b>
      </div>
    </div>
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

    await fetch(`http://localhost:3690/blogs`).then((request) => {
      request.json().then((obj) => {
        obj.forEach((blog) => {
          this.blogs.push({
            id: blog.id,
            title: blog.title,
            content: blog.content,
            hashtags: [],
          });

          fetch(`http://localhost:3690/hashtags/blog/${blog.id}`).then(
            (request) => {
              request.json().then((obj) => {
                obj.forEach((hashtag) => {
                  this.blogs.forEach((blogContainer) => {
                    if (blogContainer.id == blog.id) {
                      blogContainer.hashtags.push({
                        hashtags: hashtag.hashtag,
                      });
                    }
                  });
                });
              });
            }
          );
        });
      });
    });
  },
  methods: {
    async viewBlog(id) {
      await fetch(`http://localhost:3690/blogs/${id}`).then((request) => {
        request.json().then((obj) => {
          obj.forEach((blog) => {
            window.localStorage.setItem("Blog_id", blog.id);
            window.localStorage.setItem(
              "Blog_details",
              JSON.stringify({
                title: blog.title,
                content: blog.content,
              })
            );
          });
        });
      });

      await fetch(`http://localhost:3690/hashtags/blog/${id}`).then(
        (request) => {
          request.json().then((obj) => {
            let hashtags = [];
            obj.forEach((hashtag) => {
              hashtags.push(hashtag.hashtag);
            });
            window.localStorage.setItem("hashtags", JSON.stringify(hashtags));
          });
        }
      );
      window.location = "/blog";
    },
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
  },
  data: function () {
    if (window.localStorage.getItem("User_id")) {
      return {
        user_id: true,
        blogs: [],
      };
    } else {
      return {
        user_id: false,
        blogs: [],
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
