<template>
  <q-layout view="lHh Lpr lFf">
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
    <q-btn-dropdown style="background: #6CE34E;" label="Options" dropdown-icon="change_history">
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
    <q-page-container>
      <Profile />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Profile from './components/Profile.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Profile
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}

</script>
