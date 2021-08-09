<template>
  <h1>Hello user, Welcome to Add page</h1>
<Header/><br>
<form class="signup" >
<input type="text" placeholder="Name" v-model="restaurant.name"/>
<input type="text" placeholder="Address" v-model="restaurant.address" />
<input type="text" placeholder="Contact" v-model="restaurant.contact"/>
<button @click="addRestro" type="button" class="primarybtn">Add Restaurant</button>
</form>
</template>


<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'Add',
    components: {
      Header
    },
    data(){
      return{
        restaurant:{
          name: '',
          address: '',
          contact: ''
        },

      }
    },
  mounted () {
      let userInfo = localStorage.getItem("user-info")

      if (!userInfo) {
        this.$router.push('/sign-up')
      }
    },
    methods:{
     async addRestro(){
      try{
        let data = {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact
        }
       let result = await axios.post(`http://localhost:3000/restaurant`,data);
      console.log(result,'result')
      }
      catch(e){
        console.error("error",e);

      }
      
        
      }
    }
}
</script>

<style>

</style>