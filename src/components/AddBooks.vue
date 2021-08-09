<template>
  <h3>Add Books</h3>
  <div class="signup">
    <input type="text" placeholder="Enter Book Name" v-model="book.name" />
    <input
      type="text"
      placeholder="Enter Author's name"
      v-model="book.author"
    />
    <input type="number" placeholder="Rate this book" v-model="book.rating" />
    <button class="primarybtn" @click="addBooks">Submit</button>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "AddBooks",
  data() {
    return {
      book: {
        name: "",
        author: "",
        rating: 0,
      },
    };
  },
  mounted() {
    let userInfo = localStorage.getItem("user-info");

    if (!userInfo) {
      this.$router.push("/sign-up");
    }
  },
  methods: {
    async addBooks() {
      try {
        let data = {
          name: this.book.name,
          author: this.book.author,
          rating: this.book.rating,
        };
        let result = await axios.post(`http://localhost:3000/book`, data);
        if (result.status === 201) {
          this.$router.push("/");
        }
        console.log(result, "result");
      } catch (e) {
        console.error("error", e);
      }
    },
  },
};
</script>

<style>
</style>