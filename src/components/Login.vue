<template>
  <img class="image" src="../assets/mac.jpg" />
  <h3>Login</h3>
  <div class="signup">
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button class="primarybtn" @click="login()">Login</button>
  </div>
    <router-link to="/sign-up">SignUp</router-link>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Login',
    data()
    {
        return{
            email: '',
            password: ''
        }
    },
    methods:{
      async login(){
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        console.log('result', result);
        console.log(result.data.length)

         if (result.status === 200 && result.data.length > 0) {
              localStorage.setItem("user-info", JSON.stringify(result.data));
              this.$router.push('/')
         }

      }
    },
        mounted () {
      let userInfo = localStorage.getItem("user-info")

      if (userInfo) {
        this.$router.push('/')
      }
    }




}
</script>

<style>
.image {
  width: 100px;
}
.signup input {
  width: 300px;
  height: 50px; 
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.primarybtn {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>