<template>
  <h1>Hello user, Welcome to update page</h1>
<Header/>
<form class="signup" >
<input type="text" placeholder="Name" v-model="book.name"/>
<input type="text" placeholder="Author" v-model="book.author" />
<input type="text" placeholder="Rating" v-model="book.rating"/>
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
        book:{
          name: '',
          author: '',
          rating: 0
        },

      }
    },
    methods:{
    async updateRestro(){
      try{
        let data = {
          name: this.book.name,
          author: this.book.author,
          rating: this.book.rating
        }
       let result = await axios.put("http://localhost:3000/book/" + this.$route.params.id,data);
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

      let response = await axios.get('http://localhost:3000/book/'+this.$route.params.id);
      this.book = response.data
      console.log(response.data,'response')


    }
}
</script>

<style>

</style>