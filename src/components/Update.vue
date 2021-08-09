<template>
  <h1>Hello user, Welcome to update page</h1>
<Header/>
<form class="signup" >
<input type="text" placeholder="Name" v-model="restaurant.name"/>
<input type="text" placeholder="Address" v-model="restaurant.address" />
<input type="text" placeholder="Contact" v-model="restaurant.contact"/>
<button @click="updateRestro" type="button" class="primarybtn">Update Restaurant</button>
</form>
</template>


<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'Update',
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
    methods:{
    async updateRestro(){
      try{
        let data = {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact
        }
       let result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id,data);
       this.$router.push('/')
      }
      catch(e){
        console.error("error",e);

      }
      
        
      }
    },
    async mounted () {
      let userInfo = localStorage.getItem("user-info")

      if (!userInfo) {
        this.$route.push('/sign-up')
      }
      console.log(this.$route.params.id,'params')

      let response = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
      this.restaurant = response.data
      console.log(response.data,'response')


    }
}
</script>

<style>

</style>