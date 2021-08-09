<template>
  <Header />
  <h1>Hello {{ name }} Welcome to Home page</h1>
  <h2>Restaurant List</h2>
  <table style="width: 100%">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="(item, index) in restroList" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button @click="deleteRestro(item.id)">delete</button>
      </td>
    </tr>
  </table>
  <br />
  <h2>Book List</h2>
  <table style="width: 100%">
    <tr>
      <td>Id</td>
      <td>Author</td>
      <td>Book Name</td>
      <td>Rating</td>
      <td>Actions</td>
    </tr>
    <tr v-for="(item, index) in bookList" :key="index">
      <td>{{ item.id }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.rating }}</td>
      <td>
        <router-link :to="'/updatebooks/' + item.id">Update</router-link>
       <button @click="deleteBook(item.id)">delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      restroList: [],
      bookList: [],
    };
  },
  methods: {
    async deleteRestro(id) {
      let response = await axios.delete(
        `http://localhost:3000/restaurant/${id}`
      );

      if (response.status === 200) {
        await this.loadData();
      }
    },

    async deleteBook(id) {
      let response = await axios.delete(
        `http://localhost:3000/book/${id}`
      );

      if (response.status === 200) {
        await this.loadData();
      }
    },
    


    async loadData() {
      let rest = await axios.get(`http://localhost:3000/restaurant`);
      this.restroList = rest.data;

      let result = await axios.get(`http://localhost:3000/book`);
      this.bookList = result.data;
    },
  },
  components: {
    Header,
  },
  async mounted() {
    let userInfo = localStorage.getItem("user-info");
    this.name = JSON.parse(userInfo)[0].name;

    if (!userInfo) {
      this.$router.push("/sign-up");
    }

    await this.loadData();
  },
};
</script>

<style>
td {
  height: 40px;
  width: 100px;
}
</style>