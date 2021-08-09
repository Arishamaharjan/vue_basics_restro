<template>
<Header/>
  <h1>Hello {{name }} Welcome to Home page</h1>
  <table style="width:100%">
  <tr>
    <td>Id</td>
    <td>Name</td>
    <td>Address</td>
    <td>Contact</td>
    <td>Actions</td>
  </tr>
  <tr v-for="(item,index) in restroList" :key="index">
    <td>{{ item.id}}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.address }}</td>
    <td>{{ item.contact }}</td>
    <td> 
      <router-link :to="'/update/'+item.id">Update</router-link>
     <button @click="deleteRestro(item.id)">delete</button>
    </td>
  </tr>
</table>
</template>
<script>

import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'Home',
    data(){
      return{
        name:'',
        restroList: []
      }
    },
    methods:{
      async deleteRestro(id){
        let response = await axios.delete(`http://localhost:3000/restaurant/${id}`);

        if (response.status === 200){
          await this.loadData();

        }
      },

      async loadData(){
        let rest = await axios.get(`http://localhost:3000/restaurant`);
        this.restroList = rest.data

      }
    },
    components: {
      Header
    },
   async mounted () {
      let userInfo = localStorage.getItem("user-info");
      this.name=JSON.parse(userInfo)[0].name;

      if (!userInfo) {
        this.$router.push('/sign-up')
      }

      await this.loadData()

    }
}
</script>

<style>
td {
  height: 40px;
  width: 100px;
}

</style>