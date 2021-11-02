<template>
  <div class="create">
    <q-form>
      <label class="sub">Title</label>
      <q-input style="width:648px;" outlined v-model="title" required/>
      <br>
      <label class="sub">New Blog</label>
      <q-input  v-model="body" outlined type="textarea" required/>
      <br>
      <label class="sub">Tags</label>
      <q-input v-model="tag" outlined @keydown.enter.prevent="handleKeydown"/>
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <br/>
      <q-btn 
      style=
      'background:linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #6CE34E; 
      width:200px;
      font-family: Racing Sans One, cursive;
      text-transform: capitalize;
      font-size:15px;
      flex-wrap:wrap;' 
      icon="cloud_upload" label='Upload'/>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";


export default {
  name: "CreateBlog",
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ""); // removes all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    return {  title, body, tag, handleKeydown, tags };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');

.create {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.sub {
font-family: Racing Sans One, cursive;
font-size: 20px;
text-decoration-line: underline;
}
.pill {
  display: flex;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
  width: fit-content;
}
</style>
